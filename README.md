# Apple Design Style Showcase

This repository packages a Codex skill plus static sample sites that demonstrate how the skill shapes Apple-inspired product interfaces.

## Contents

- `skill/SKILL.md` - the English `apple-design-style` skill.
- `demo/` - a single interactive workspace demo with toolbar, sidebar, inspector, settings sheet, responsive bottom tabs, light/dark appearance, and accessibility states.
- `scenarios/` - three visual-only sample sites:
  - `health.html` - health tracking dashboard.
  - `schedule.html` - schedule management workspace.
  - `files.html` - file manager inspired by Finder-style structure.

## Open Locally

Open the main demo directly:

```bash
open demo/index.html
```

Open the scenario gallery directly:

```bash
open scenarios/index.html
```

You can also serve the whole package over local HTTP:

```bash
python3 -m http.server 4175 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4175/
```

## Notes

These examples are intentionally static. They are meant to show visual hierarchy, Apple-like component conventions, responsive layout behavior, semantic color, restrained material effects, and accessibility-minded states rather than full product functionality.
