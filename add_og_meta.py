#!/usr/bin/env python3
from bs4 import BeautifulSoup
from pathlib import Path

mapping = {
  'index.html': 'images/og-index.svg',
  'hizmetler.html': 'images/og-hizmetler.svg',
  'galeri.html': 'images/og-galeri.svg',
  'ekipman.html': 'images/og-ekipman.svg',
  'sss.html': 'images/og-sss.svg',
  'referanslar.html': 'images/og-referanslar.svg',
  'dokumanlar.html': 'images/og-dokumanlar.svg',
  'muhendislik.html': 'images/og-muhendislik.svg',
  'teklif.html': 'images/og-teklif.svg',
  'hakkimda.html': 'images/og-hakkimda.svg'
}

for file, imgpath in mapping.items():
    p = Path(file)
    if not p.exists():
        print(f"Skip (not found): {file}")
        continue
    html = p.read_text(encoding='utf-8')
    soup = BeautifulSoup(html, 'html.parser')
    head = soup.head
    if not head:
        print(f"No head found in {file}")
        continue
    content_url = f"https://ibrahimfoh.github.io/FOH/{imgpath}"
    og = head.find('meta', property='og:image')
    if og:
        og['content'] = content_url
    else:
        new_meta = soup.new_tag('meta', **{'property':'og:image','content':content_url})
        head.append(new_meta)
    tw = head.find('meta', attrs={'name':'twitter:image'})
    if tw:
        tw['content'] = content_url
    else:
        tw_meta = soup.new_tag('meta', **{'name':'twitter:image','content':content_url})
        head.append(tw_meta)
    p.write_text(str(soup), encoding='utf-8')
    print(f"Updated og meta in {file}")
