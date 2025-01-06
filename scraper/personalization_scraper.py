import json
import requests
from bs4 import BeautifulSoup

# Load data from links.json
data = []
with open('links_animal.json', 'r') as json_file:
    data = json.load(json_file)

scraped_data = []

# Scrape data from each link
for link in data:
    url = f'https://animalscience.ucdavis.edu/{link}'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    text = soup.get_text(separator=' ', strip=True)
    scraped_data.append(text)

with open('scraped_data_animal.json', 'w') as outfile:
    json.dump(scraped_data, outfile, indent=4)
