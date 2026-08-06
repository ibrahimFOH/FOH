#!/usr/bin/env python3
from bs4 import BeautifulSoup
from pathlib import Path
import re

html_files = list(Path('.').glob('*.html'))

def default_alt(src):
    name = src.split('/')[-1]
    name = re.sub(r'[_\-\d]+', ' ', name).strip()
    if name == '':
        return 'görsel'
    return name

for f in html_files:
    text = f.read_text(encoding='utf-8')
    soup = BeautifulSoup(text, 'html.parser')
    changed = False
    for img in soup.find_all('img'):
        if not img.has_attr('loading'):
            img['loading'] = 'lazy'
            changed = True
        if not img.has_attr('alt') or img['alt'].strip() == '':
            src = img.get('src','')
            img['alt'] = default_alt(src)
            changed = True
    if changed:
        f.write_text(str(soup), encoding='utf-8')
        print(f"Updated: {f}")
