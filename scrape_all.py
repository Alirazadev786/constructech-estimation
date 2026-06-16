import requests
from bs4 import BeautifulSoup
import json
import re

urls = [
    "https://constructem.com/",
    "https://constructem.com/general-contractor-services/commercial-estimating/",
    "https://constructem.com/services/",
    "https://constructem.com/contact-us/",
    "https://constructem.com/general-contractor-services/residential-estimating/",
    "https://constructem.com/general-contractor-services/public-projects-estimates/",
    "https://constructem.com/reviews/",
    "https://constructem.com/blog/",
    "https://constructem.com/consultation-form/",
    "https://constructem.com/general-contractor-services/",
    "https://constructem.com/services/pre-construction/",
    "https://constructem.com/services/pre-construction/shop-drawings/",
    "https://constructem.com/services/design-drawing-engineering/3d-rendering-modeling/",
    "https://constructem.com/services/design-drawing-engineering/architectural-drawings/",
    "https://constructem.com/services/design-drawing-engineering/mep-with-title-24/",
    "https://constructem.com/labor-recruitment/",
    "https://constructem.com/services/design-drawing-engineering/",
    "https://constructem.com/services/design-build-services/",
    "https://constructem.com/services/cost-estimating/",
    "https://constructem.com/supplier-estimates/flooring-tiles-takeoffs/",
    "https://constructem.com/supplier-estimates/steel-takeoffs/",
    "https://constructem.com/supplier-estimates/lumber-takeoffs/",
    "https://constructem.com/supplier-estimates/rebar-takeoffs/",
    "https://constructem.com/supplier-estimates/",
    "https://constructem.com/sub-contractors-estimates/site-works/",
    "https://constructem.com/sub-contractors-estimates/exterior-finishes-estimates/",
    "https://constructem.com/sub-contractors-estimates/plumbing-estimates/",
    "https://constructem.com/sub-contractors-estimates/flooring-estimates/",
    "https://constructem.com/sub-contractors-estimates/electrical-work-estimating-takeoffs/",
    "https://constructem.com/sub-contractors-estimates/painting-estimates/",
    "https://constructem.com/sub-contractors-estimates/masonry-estimates/",
    "https://constructem.com/sub-contractors-estimates/concrete-estimating-services/",
    "https://constructem.com/sub-contractors-estimates/dry-wall-takeoffs/",
    "https://constructem.com/sub-contractors-estimates/insulation-estimates/",
    "https://constructem.com/sub-contractors-estimates/metals-takeoffs/",
    "https://constructem.com/sub-contractors-estimates/",
    "https://constructem.com/general-contractor-services/industrial-estimating/",
    "https://constructem.com/general-contractor-services/multi-family-apartments/",
    "https://constructem.com/our-trades/",
    "https://constructem.com/about-us/",
    "https://constructem.com/services/construction-takeoff/",
    "https://constructem.com/services/pre-construction/scheduling-services/",
    "https://constructem.com/services/design-drawing-engineering/structural-calculations/",
    "https://constructem.com/construction-cost-estimating-services-newyork/",
    "https://constructem.com/construction-cost-estimating-services-california/",
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def clean_text(text):
    text = re.sub(r'(?i)constructem', 'Constructech Estimation', text)
    text = re.sub(r'\(402\) 901-0788', '(718) 719-2009', text)
    text = re.sub(r'\(808\) 998-5083', '(718) 719-2009', text)
    text = re.sub(r'info@constructem\.com', 'info@constructechestimation.com', text)
    return text.strip()

scraped_data = {}

for url in urls:
    print(f"Scraping {url}...")
    try:
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Remove header, footer, scripts, and styles to isolate main content
        for element in soup(["script", "style", "header", "footer", "nav", "svg", "img"]):
            element.extract()

        title = soup.title.string if soup.title else ""
        
        # Heuristic: the main content is usually inside a container. Since it's wordpress/breakdance, look for main or section
        main_content = soup.find('main') or soup.body
        
        sections = []
        if main_content:
            # Get headings and paragraphs in order
            for tag in main_content.find_all(['h1', 'h2', 'h3', 'p', 'ul', 'ol']):
                # Skip if empty or hidden
                text = clean_text(tag.get_text(separator=' ', strip=True))
                if not text: continue
                
                if tag.name in ['ul', 'ol']:
                    items = [clean_text(li.get_text(separator=' ', strip=True)) for li in tag.find_all('li')]
                    if items:
                        sections.append({"type": "list", "items": items})
                else:
                    sections.append({"type": tag.name, "text": text})

        # To build URL slug structure
        path = url.replace("https://constructem.com", "").strip("/")
        if path == "": path = "home"

        scraped_data[path] = {
            "title": clean_text(title),
            "sections": sections
        }
    except Exception as e:
        print(f"Failed to scrape {url}: {e}")

with open('src/data/competitor_content.json', 'w') as f:
    json.dump(scraped_data, f, indent=2)

print("Scraping complete. Data saved to src/data/competitor_content.json")
