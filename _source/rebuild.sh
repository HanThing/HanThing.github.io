#!/bin/sh
set -eu

source_dir=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
repo_root=$(dirname "$source_dir")
upstream=3dff48b5df6d84c9544a5ae19c8f2cbb01dc44e5
work=$(mktemp -d "${TMPDIR:-/tmp}/hanthing-quartz.XXXXXX")
stage=$(mktemp -d "$repo_root/.notes-rebuild.XXXXXX")
cleanup() {
  if [ -e "$stage/previous" ] && [ ! -e "$repo_root/notes" ]; then
    mv "$stage/previous" "$repo_root/notes" || return
  fi
  rm -rf "$work" "$stage"
}
trap cleanup EXIT
trap 'exit 1' HUP INT TERM

git init -q "$work/engine"
git -C "$work/engine" remote add origin https://github.com/jackyzha0/quartz.git
git -C "$work/engine" fetch -q --depth 1 origin "$upstream"
git -C "$work/engine" checkout -q --detach FETCH_HEAD

for file in quartz.config.yaml quartz.ts package.json package-lock.json generate-catalog.mjs \
  quartz/components/HanThingHome.tsx quartz/styles/custom.scss quartz/static/outfit.woff2 \
  quartz/static/icon.png quartz/static/og-image.png
do
  mkdir -p "$work/engine/$(dirname "$file")"
  cp "$source_dir/$file" "$work/engine/$file"
done
rm -rf "$work/engine/content"
mkdir "$work/engine/content"
cp -R "$source_dir/content/." "$work/engine/content/"
mkdir "$work/blog-preview"
cp "$repo_root/theme.js" "$work/blog-preview/theme.js"

cd "$work/engine"
npm ci
node generate-catalog.mjs --check
node generate-catalog.mjs "$stage/content-data.js"
# All configured plugins are already pinned in package-lock.json.
npx quartz build --output "$stage/notes" --concurrency 2
test -f "$stage/notes/index.html"
test -f "$stage/notes/static/contentIndex.json"

# Keep the previous output until the complete replacement is ready.
if [ -e "$repo_root/notes" ]; then
  mv "$repo_root/notes" "$stage/previous"
fi
if ! mv "$stage/notes" "$repo_root/notes"; then
  if [ -e "$stage/previous" ]; then
    mv "$stage/previous" "$repo_root/notes"
  fi
  exit 1
fi
mv "$stage/content-data.js" "$repo_root/content-data.js"
cp "$work/engine/INDEX.md" "$source_dir/INDEX.md"
printf 'Built %s/notes from Quartz %s\n' "$repo_root" "$upstream"
