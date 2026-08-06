from pathlib import Path

root = Path(__file__).resolve().parent
print("Klasör:", root)
print()

for path in sorted(root.rglob("*.html")):
    text = path.read_text(encoding="utf-8", errors="ignore")
    has_head = "</head>" in text.lower()
    has_ga = "G-GVS4022KDJ" in text or "googletagmanager.com/gtag" in text.lower()
    print(f"{path.name:40} | head={has_head} | ga={has_ga}")