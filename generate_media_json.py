#!/usr/bin/env python3
"""Scan images/gallery, videos, documents → write media.json
Run locally or via GitHub Action. No manual media.json edits needed.
"""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
# When run from repo root in Action, ROOT is repo root if script lives at root
# Support both: script in root OR script in tools/
if not (ROOT / "images").is_dir() and (ROOT.parent / "images").is_dir():
    ROOT = ROOT.parent

GALLERY = ROOT / "images" / "gallery"
VIDEOS = ROOT / "videos"
DOCS = ROOT / "documents"
OUT = ROOT / "media.json"

PHOTO_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".JPG", ".JPEG", ".PNG", ".WEBP", ".GIF"}
VIDEO_EXT = {".mp4", ".webm", ".mov", ".MP4", ".WEBM", ".MOV"}
DOC_EXT = {".pdf", ".PDF"}


def title_from_filename(name: str) -> str:
    stem = Path(name).stem
    # strip common prefixes / noise
    stem = re.sub(r"[_\+]+", " ", stem)
    stem = re.sub(r"\s+", " ", stem).strip()
    # keep Turkish-friendly: don't force title-case on all-caps UUID names
    if re.fullmatch(r"[0-9A-Fa-f-]{8,}", stem.replace(" ", "")):
        return stem  # uuid-like — leave as-is; gallery uses path only
    return stem


def collect_photos() -> list[str]:
    if not GALLERY.is_dir():
        return []
    files = [
        p
        for p in GALLERY.iterdir()
        if p.is_file() and p.suffix in PHOTO_EXT and not p.name.startswith(".")
    ]
    files.sort(key=lambda p: p.name.lower())
    return [f"images/gallery/{p.name}" for p in files]


def collect_videos() -> list[str]:
    if not VIDEOS.is_dir():
        return []
    files = [
        p
        for p in VIDEOS.iterdir()
        if p.is_file() and p.suffix in VIDEO_EXT and not p.name.startswith(".")
    ]
    files.sort(key=lambda p: p.name.lower())
    return [f"videos/{p.name}" for p in files]


def collect_documents() -> list[dict]:
    if not DOCS.is_dir():
        return []
    files = [
        p
        for p in DOCS.iterdir()
        if p.is_file() and p.suffix in DOC_EXT and not p.name.startswith(".")
    ]
    files.sort(key=lambda p: p.name.lower())
    docs = []
    for p in files:
        docs.append(
            {
                "title": title_from_filename(p.name),
                "file": f"documents/{p.name}",
                "icon": "fa-file-pdf",
            }
        )
    return docs


def main() -> None:
    data = {
        "photos": collect_photos(),
        "videos": collect_videos(),
        "documents": collect_documents(),
    }
    text = json.dumps(data, ensure_ascii=False, indent=2) + "\n"
    old = OUT.read_text(encoding="utf-8") if OUT.exists() else None
    if old == text:
        print("media.json already up to date")
        print(f"  photos={len(data['photos'])} videos={len(data['videos'])} docs={len(data['documents'])}")
        return
    OUT.write_text(text, encoding="utf-8")
    print("media.json written")
    print(f"  photos={len(data['photos'])} videos={len(data['videos'])} docs={len(data['documents'])}")
    for d in data["documents"]:
        print(f"  - {d['title']} → {d['file']}")


if __name__ == "__main__":
    main()
