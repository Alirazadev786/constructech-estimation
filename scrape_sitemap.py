import requests
from bs4 import BeautifulSoup
import json
import os

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

data = {}

for url in urls[:5]: # just testing with 5 first
    print(f"Fetching {url}...")
    try:
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # We want to extract main text. Let's look for main or article, or just body
        # Clean up scripts and styles
        for script in soup(["script", "style", "header", "footer", "nav"]):
            script.extract()
            
        text = soup.get_text(separator=' ', strip=True)
        data[url] = {
            "title": soup.title.string if soup.title else "",
            "content_preview": text[:500]
        }
    except Exception as e:
        print(f"Error fetching {url}: {e}")

print("Test complete.")
