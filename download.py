import os
import re
import urllib.request
from urllib.parse import urlparse
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

content_path = '/Users/macbook/.gemini/antigravity/brain/10f54d96-af0a-41f8-a2e7-8f0a5625084b/.system_generated/steps/8/content.md'
output_dir = '/Users/macbook/Desktop/Anti Gravity/NextJS_Projects/constructech/public/images'

os.makedirs(output_dir, exist_ok=True)

with open(content_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Find all image URLs from constructem.com
pattern = r'https://constructem\.com/[^\s"\']+\.(?:jpg|png|webp|jpeg|svg)'
urls = set(re.findall(pattern, html))

downloaded = 0
for url in urls:
    # get filename from url
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path)
    
    # some filenames might have query params or be duplicate, clean them up
    filename = filename.split('?')[0]
    
    out_path = os.path.join(output_dir, filename)
    if not os.path.exists(out_path):
        try:
            print(f"Downloading {filename}...")
            urllib.request.urlretrieve(url, out_path)
            downloaded += 1
        except Exception as e:
            print(f"Failed to download {url}: {e}")

print(f"Downloaded {downloaded} new images.")
