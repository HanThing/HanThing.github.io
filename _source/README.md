# HanThing Notes

The Markdown wiki is built with Quartz 5.0.0. The homepage at `/` and the reading pages at `/notes/` share one public Markdown source. Read [AGENTS.md](AGENTS.md) for ingest, query and lint; [INDEX.md](INDEX.md) for content; [CHANGELOG.md](CHANGELOG.md) for changes.

## Build

Requires Node 22 or newer and npm 10.9.2 or newer. From the repository root:

```sh
cd blog-wiki
npm ci
node generate-catalog.mjs --check
node generate-catalog.mjs
npx quartz build --output ../.site/notes --concurrency 2
```

From the parent repository, run `python3 scripts/assemble_public_site.py` and `python3 scripts/check_public_site.py .site` after the build. Deploy the checked `.site/` files, preserving unrelated existing public assets. Do not deploy this source directory or `content/` directly. Do not run `quartz create` on this configured project: it can overwrite the config and `content/index.md`.

## Rebuild from the public source bundle

The published repository retains the public Markdown and custom build files under `_source/`; the engine and `node_modules` are not vendored. From that repository's root:

```sh
sh _source/rebuild.sh
```

The script fetches official Quartz commit `3dff48b5df6d84c9544a5ae19c8f2cbb01dc44e5`, installs the locked dependencies with `npm ci`, and builds in a temporary directory. All configured plugins are already in the lockfile. A successful build replaces `notes/`, regenerates the homepage `content-data.js` and updates `_source/INDEX.md`; the custom homepage and learning pages are separate source files and remain intact. The script neither commits nor publishes. Review the generated changes before deploying.

Preserve these paths relative to `_source/`: `content/`, `quartz.config.yaml`, `quartz.ts`, `quartz/components/HanThingHome.tsx`, `quartz/styles/custom.scss`, `quartz/static/outfit.woff2`, `quartz/static/icon.png`, `quartz/static/og-image.png`, `package.json`, `package-lock.json`, `README.md`, `rebuild.sh`, `generate-catalog.mjs`, `AGENTS.md`, `INDEX.md`, and `CHANGELOG.md`. Keep the shared `theme.js` in the public repository root. The source bundle is public, so include only approved public content. Keep `UPSTREAM.txt` and `LICENSE.txt` with it for provenance.

## Local preview

For a wiki-only local preview:

```sh
cd blog-wiki
npx quartz build --serve --baseDir notes --output ../.site/notes
```

Open `http://localhost:8080/notes/`. The Home link goes to `/`, so it requires the combined site preview to reach the custom homepage.

## Publish a note

Add Markdown to `content/`. Every published note, including `content/index.md`, needs explicit frontmatter:

```yaml
---
title: Python 객체와 self
description: 메서드가 어떤 객체를 받는지 따라갑니다.
type: concept
sources:
  - 공개 가능한 원문 URL 또는 자료명
publish: true
draft: false
date: 2026-09-20
topics:
  - 실전 파이썬 준비하기
tags:
  - python
---
```

Use links relative to the content root, for example `[[python/self-and-objects]]`. Quartz provides full-text search, backlinks, RSS, and a sitemap. The homepage generates its document stars and relationships from the same Markdown. Use `type: journal` for dated learning, `concept` for evolving explanations, `weekly` for a verified assignment and `project` for actual project records. Public course guides use `reference`: they appear in the agent index, but do not become learning stars or recent records. Untyped navigation pages stay outside the homepage catalog. Use `published` when the study date differs from publication. `topics` uses official curriculum names for the visible filter; `tags` remain optional metadata.

Use `## 질문: ...` for an actual question and `## 퀴즈: ...` for a review problem. Under each question, include separate paragraphs beginning `**상황:**`, `**의도:**` and `**핵심 답변:**`; the homepage displays them in an expandable question card. Preserve the source question and explain any problem or code needed to understand it. Mark inferred intent as interpretation. Every concept needs at least one self-contained quiz with its answer inside native `<details>`. The generator links questions and quizzes into separate collections. Do not claim mastery or invent user attempts. Each knowledge note needs a nonempty `sources` list; include specific evidence beside claims where needed.

Inside a Markdown table, escape a wikilink's alias separator: `[[python/self-and-objects\|객체와 self]]`. An unescaped `|` creates a new table cell and can hide the rest of that row.

Use full URLs for links outside the wiki, such as `https://hanthing.github.io/learning/python-lab.html#self` and `https://hanthing.github.io/#brain`. Root-relative Markdown links are interpreted as wiki paths by Quartz. SPA navigation is disabled so linked pages load normally and their scripts initialize. Local previews of these full links will open the published site.

Both publishing filters are enabled: a page must have `publish: true` and must not have `draft: true`. `private`, `drafts`, `raw-sources`, and `.obsidian` folders are excluded at any depth. The built JSON index and XML feeds must be checked along with the rendered pages when reviewing a release.

Keep original PDFs, imported source material, private schedules, and unpublished attachments outside `content/` and outside the public repository. Quartz's Markdown filters do not prevent arbitrary attachments from being copied. Add only attachments that may be public. Ignore rules do not remove files already tracked by Git.

Quartz renders the prepared wiki; it does not run an LLM or ingest external sources. The original sources and the process used to derive a note should be recorded separately from the public article.

## Project files

- `quartz/`: official engine plus `components/HanThingHome.tsx`, `styles/custom.scss`, the local Outfit font, and HanThing's static icon and social preview image.
- `quartz.config.yaml`: HanThing settings, Korean UI, the `/notes` canonical URL, publication filters, and plugin layout.
- `quartz.ts`: loads the config and adds the Home link using a normal page navigation.
- `content/`: public-ready Markdown notes and explicitly public attachments.
- `package.json`, `package-lock.json`, `tsconfig.json`, type declaration files: build requirements.
- `UPSTREAM.txt` and `LICENSE.txt`: engine provenance and license.

Commit the source and lockfile, not `node_modules`, `.quartz`, caches, private source material, or the generated `.site` artifact. Upstream Git history, documentation, and GitHub workflows were not copied. Native plugins are pinned through `package-lock.json`.

The homepage, wiki and learning pages share a saved light/dark preference; the first visit starts dark. `theme.js` supplies the shared behavior and is bundled into Quartz by `quartz.ts`. Light mode draws dark particles on a light background. A local font is used; analytics and external font loading are disabled. Search and backlinks use the standard Quartz implementations. The frontmatter transformer stays enabled while its properties panel is hidden; disabling that plugin would remove the publication metadata.
