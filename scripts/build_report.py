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
OUTPUT = DOCS / "SafeDiary-Report.md"

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


def main():
    files = chapter_files()
    parts = [normalize(f.read_text(encoding="utf-8")).strip() for f in files]
    OUTPUT.write_text(PAGE_BREAK.join(parts) + "\n", encoding="utf-8")
    print(f"Merged {len(files)} files into {OUTPUT.relative_to(ROOT)}:")
    for f in files:
        print(f"  - {f.name}")


if __name__ == "__main__":
    main()
