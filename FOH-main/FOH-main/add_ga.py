#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Tüm HTML dosyalarına Google Analytics ekler.
Eski GA/gtag kodu varsa G-GVS4022KDJ ile değiştirir.
google*.html doğrulama dosyasına dokunmaz.
"""

import re
from pathlib import Path

GA_BLOCK = """<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GVS4022KDJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GVS4022KDJ');
</script>"""

OLD_GA = re.compile(
    r'(?:<!--\s*Google Analytics\s*-->\s*)?'
    r'<script[^>]*src=["\']https://www\.googletagmanager\.com/gtag/js\?id=[^"\']+["\'][^>]*>\s*</script>\s*'
    r'<script>[\s\S]*?gtag\s*\(\s*[\'"]config[\'"][\s\S]*?</script>',
    re.IGNORECASE,
)

def main() -> None:
    root = Path(__file__).resolve().parent
    updated = []
    skipped = []

    for path in root.rglob("*.html"):
        text = path.read_text(encoding="utf-8", errors="ignore")

        # Google site verification dosyasını atla
        if path.name.lower().startswith("google"):
            skipped.append(path.name)
            continue

        original = text

        if OLD_GA.search(text):
            text = OLD_GA.sub(GA_BLOCK, text, count=1)
        elif re.search(r"</head>", text, flags=re.IGNORECASE):
            text = re.sub(
                r"</head>",
                GA_BLOCK + "\n</head>",
                text,
                count=1,
                flags=re.IGNORECASE,
            )
        else:
            skipped.append(path.name)
            continue

        if text != original:
            path.write_text(text, encoding="utf-8")
            updated.append(path.name)

    print("Güncellenen:", len(updated))
    for name in updated:
        print(" -", name)

    print("Atlanan:", len(skipped))
    for name in skipped:
        print(" -", name)

    if updated:
        print("\nTamam. Şimdi git add / commit / push yap.")
    else:
        print("\nDeğişiklik yok (zaten ekli olabilir).")

if __name__ == "__main__":
    main()