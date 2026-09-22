# HanThing Notes

Public learning notes with separate records, questions and quizzes. Markdown in `_source/content/` is canonical; `content-data.js` is generated from it. The Leo outline stays as a landmark while every published knowledge document adds a selectable star. Administrative pages do not count as knowledge stars.

The homepage and `learning/` are static HTML, CSS and JavaScript. Particle motion uses native Canvas2D; reduced motion and the pause control are supported. Knowledge stars stay fixed under the pointer and move only with explicit graph rotation. Search and filters do not require a service.

The top theme button shares its saved light/dark preference across the homepage, notes and learning pages. First visits start dark; light mode uses dark stars on a light background. Curriculum names come from each note's `topics`. Questions expand to show context, intent and the answer; quizzes remain a separate collection. Course reference documents stay outside the learning graph and recent records.

## Maintain the public repository

Read `_source/AGENTS.md`, `_source/INDEX.md` and `_source/CHANGELOG.md`. After editing the public Markdown, run:

```sh
sh _source/rebuild.sh
```

This rebuilds `/notes/` and the shared homepage catalog. It neither commits nor publishes. Check changed pages, questions, quiz answers, source links and document counts before deployment. Private source material and operational instructions do not belong in this repository.

Notion is temporary staging. An agent reads the selected sources, updates dated records and existing concepts, records evidence and unresolved issues, and updates the index and log. This site does not run an LLM or automatic ingestion job. The approach adapts [Karpathy’s LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

The original particle geometry is inspired by [Astra](https://openai.com/ko-KR/index/gpt-6-astra/) and [Memory](https://www.careerhackeralex.com/memory). Local font attribution is in `vendor/NOTICE.txt`.
