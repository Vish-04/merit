import requests
from bs4 import BeautifulSoup
import json

def extract_links(url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
    
    # Send a GET request to the URL with headers
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # Raise an error for bad responses

    # Parse the HTML content
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all name tags
    name_tags = soup.find_all('h3', class_='vm-teaser__title')

    # Create a list to store links
    links_list = []
    name_list = []
    email_list =[]

    # Iterate over the name tags
    for name_tag in name_tags:
        # Extract the href from the a tag
        link = name_tag.find('a').get('href').strip()
        print(name_tag.get_text())

        # Find the email associated with the name
        email_tag = name_tag.find_next('li', class_='icon--envelope')
        email = None
        if email_tag:
            email = email_tag.get_text()
        print(email)

        # Append to the lists
        links_list.append(link)
        name_list.append(name_tag.get_text())
        if email:
            email_list.append(email)

    return links_list, name_list, email_list

def save_links_to_json(links, names, emails, filename='links_genetics.json'):
    with open(filename, 'w') as json_file:
        json.dump(links, json_file, indent=4)

    with open('names_genetics.json', 'w') as json_file:
        json.dump(names, json_file, indent=4)
    
    with open('emails_genetics.json', 'w') as json_file:  # Corrected file extension
        json.dump(emails, json_file, indent=4)
    

if __name__ == "__main__":
    url = "https://biology.ucdavis.edu/faculty/microbiology-and-molecular-genetics"
    all_links, names, emails = extract_links(url)
    for i in range(1, 25):
        new_all_links, new_names, new_emails = extract_links(f'{url}?page={i}')
        all_links.extend(new_all_links)
        names.extend(new_names)
        emails.extend(new_emails)
        

    save_links_to_json(all_links, names, emails)
    print(f"Data saved to links.json")
