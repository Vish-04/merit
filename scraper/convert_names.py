import json

# Load the JSON data
with open('links_npb.json', 'r') as file:
    links = json.load(file)

# Function to capitalize names
def capitalize_name(url):
    # Extract the name part from the URL
    name_part = url.split('/')[-1]
    # Split the name into parts, capitalize each, and join them back
    return ' '.join(part.capitalize() for part in name_part.split('-'))

# Create a new array with capitalized names
capitalized_names = [capitalize_name(link) for link in links]

# Print or save the new array
print(capitalized_names)

with open('names_npb.json', "w") as f:
    json.dump(capitalized_names, f )