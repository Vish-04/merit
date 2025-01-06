import json
from openai import OpenAI

# Load the existing personalizations and scraped data
with open('personalizations_mcb.json', 'r') as f:
    personalizations = json.load(f)

with open('repersonalization_mcb.json', 'r') as f:
    repersonalizations = json.load(f)

with open('scraped_data_mcb.json', 'r') as f:
    scraped_data = json.load(f)

# OpenAI API key setup
api_key = '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'
client = OpenAI(api_key=api_key)

# List to store the new personalizations
new_repersonalizations = []
i = -1
for index, (personalization, text, repersonalization) in enumerate(zip(personalizations, scraped_data, repersonalizations)):
    i += 1
    style = 'formal'
    if i % 3 == 0:
        style = 'formal'
    elif i % 3 == 1:
        style = 'casual'
    elif i % 3 == 2:
        style = 'semi-formal'
    print(style)
    prompt = f"""
    Given the entire information on the personal page of a professor, and an example "personalization", generate a "personalization" that essentially states something interesting that the professor does by picking one of their articles, and also states that you would like to learn more about a particular aspect of their work that was interesting to you. Make sure that the information is not complex, and is at a very basic scientific level. This is being sent by a college student so they will not have as much knowledge of the professor's work. Do not use the same personalization as the example, and use different material or information from the professor's page. Ensure the personalization sounds human, and not like an AI unlike the examples Generate only the personalization and nothing else such as introductions or endings, just the personalization. Be {style} with the personaliztion.

    Example Personalization:
    {personalization}

    Example Repersonalization:
    {repersonalization}

    Professor Personal Page Content:
    {text}
    """

    # Call OpenAI API to generate a new personalization
    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "Given the entire information on the personal page of a professor, and an example \"personalization\", generate a \"personalization\" that essentially states something interesting that the professor does by picking one of their articles, and also states that you would like to learn more about a particular aspect of their work that was interesting to you. Try to not use the same personalization as the example, and use different material or information from the professor's page."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150
        )

        # Extract the generated text
        new_personalization = response.choices[0].message.content.strip()
        if new_personalization:
            new_repersonalizations.append(new_personalization)
            print(f"Generated Personalization: {new_personalization}\n")
        else:
            print("Warning: Received empty personalization for this entry.\n")

    except Exception as e:
        print(f"Error during API call for entry {index + 1}: {e}\n")

# Save the new personalizations to a JSON file
if new_repersonalizations:
    with open('repersonalization_mcb_2.json', 'w') as outfile:
        json.dump(new_repersonalizations, outfile, indent=4)
    print("New personalizations saved successfully.")
else:
    print("No new personalizations were generated.")
