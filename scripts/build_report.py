"""Merge the report chapters in docs/ into a single Markdown file.

Usage (from the repository root):
    python scripts/build_report.py

Output: docs/SafeDiary-Report.md (ignored by git). It is written inside docs/
so every relative image path (../assets/..., img.png) keeps working. Open it
in VS Code and use "Markdown PDF: Export (pdf)" to get the PDF.
"""

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
OUTPUT = DOCS / "upc-pre-202620-1acc0238-4948-mindcluster-report-tb1.md"

# Chapters are numbered (00-cover.md, 10-chap-1.md, ...): file name order is report order.
CHAPTER_PATTERN = re.compile(r"^\d{2}-.+\.md$")

PAGE_BREAK = '\n\n<div style="page-break-after: always;"></div>\n\n'

# Links between chapter files become in-document anchors, e.g. (20-chap-2.md#21-competidores) -> (#21-competidores).
CROSS_FILE_LINK = re.compile(r"\]\((?:\.\./docs/|docs/|\./)?\d{2}-[\w-]+\.md(#[^)]*)?\)")


def chapter_files():
    return sorted(p for p in DOCS.iterdir() if p.is_file() and CHAPTER_PATTERN.match(p.name))


def normalize(text):
    text = text.replace("\r\n", "\n").lstrip("﻿")
    return CROSS_FILE_LINK.sub(lambda m: "](" + (m.group(1) or "#") + ")", text)


def add_section_breaks(text, levels):
    """Start each heading of the given levels on a new page."""
    out = []
    in_code = False
    last_heading_level = None
    for line in text.split("\n"):
        if line.lstrip().startswith("```"):
            in_code = not in_code
        level = len(line) - len(line.lstrip("#"))
        is_heading = not in_code and 0 < level <= 6 and line[level:level + 1] == " "
        # Break only between sibling sections, so a section stays on the page of its parent's introduction.
        sibling = last_heading_level is not None and last_heading_level >= level
        if is_heading and level in levels and (sibling or (level == 1 and any(o.strip() for o in out))):
            out.append(PAGE_BREAK.strip("\n"))
            out.append("")
        if is_heading:
            last_heading_level = level
        out.append(line)
    return "\n".join(out)


# Heading levels that start a new page in each file; files not listed only break between files.
SECTION_BREAKS = {
    "00-cover.md": {1},
    "10-chap-1.md": {2},
    "20-chap-2.md": {2},
    "30-chap-3.md": {2, 3},
    "40-chap-4.md": {2, 3},
}


def main():
    files = chapter_files()
    parts = []
    for f in files:
        text = normalize(f.read_text(encoding="utf-8")).strip()
        if f.name in SECTION_BREAKS:
            text = add_section_breaks(text, SECTION_BREAKS[f.name])
        parts.append(text)
    OUTPUT.write_text(PAGE_BREAK.join(parts) + "\n", encoding="utf-8")
    print(f"Merged {len(files)} files into {OUTPUT.relative_to(ROOT)}:")
    for f in files:
        print(f"  - {f.name}")


if __name__ == "__main__":
    main()
