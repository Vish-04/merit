import json 
from openai import OpenAI

scraped_data =[]
with open('scraped_data_animal.json', 'r') as f:
    scraped_data = json.load(f)

# OpenAI API key setup
api_key = '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'
client = OpenAI(
    api_key=api_key,
)

# Loop through each scraped data and generate personalization
personalizations = []
for text in scraped_data:
    prompt = f"""
Given the entire information on the personal page of a professor, generate a "personalization" that essentially states something interesting that the professor does by picking one of their articles, and also states that you would like to learn more about a particular aspect of their work that was interesting to you. 

Examples:
I’m particularly fascinated by your recent paper, 'Expression of bond-related behaviors affects titi monkey responsiveness to oxytocin and vasopressin treatments,' where you explore how these neuropeptides influence social behaviors. The findings on how specific bonding behaviors affect hormonal responsiveness were really eye-opening, and I’d love to discuss how this might apply to broader contexts, like human social interactions or early development.
I found your work on idiographic approaches to personality, especially your paper 'Idiographic prediction of loneliness and procrastination,' to be incredibly insightful. The idea of personalizing behavior predictions and the unique antecedents for each individual really struck me, and I would love to chat more about how this could inform interventions in mental health or behavior change.
I’ve been fascinated by your research on the neural systems underlying social and affective behaviors in both humans and nonhuman animals. Your recent paper, 'Evolutionarily conserved neural responses to affective touch in monkeys,' was particularly compelling, and I’d love to discuss how your findings on neural responses and aging might inform our understanding of emotional regulation across the lifespan.
I’m really interested in your research on statistical methods for longitudinal and missing data, especially your recent paper on 'First-interview response patterns of intensive longitudinal psychological and health data.' The application of these methods to health psychology and chronic illness research is particularly compelling, and I’d love to learn more about your work in this area.
I’ve been captivated by your research on the computational and neural mechanisms of decision-making, especially your paper, 'Neural mechanisms of credit assignment for inferred relationships in a structured world.' The way you explore how the brain forms predictive models and makes inferences in complex environments is fascinating, and I’d love the opportunity to discuss how this research might further inform our understanding of human decision-making processes.
I’m really fascinated by your work on the neural correlates of social cognition in children, especially your recent paper on 'Action mechanisms for social cognition: Behavioral and neural correlates of developing theory of mind.' The integration of EEG and behavioral methods to understand the developmental process of social cognition is truly intriguing, and I’d love to discuss how this research might inform interventions for both typical and atypical social development.
I’m really interested in your research on instructional innovations and how they can improve student access and critical thinking skills. Your focus on tracking student demographics to understand different academic risk factors is especially relevant, and I’d love to discuss how your findings might influence teaching strategies to support diverse student success at UC Davis.

Professor Personal Page:
    {text}",

"""

    # Call OpenAI API using the new interface
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Given the entire information on the personal page of a professor, generate a 'personalization' that essentially states something interesting that the professor does by picking one of their articles, and also states that you would like to learn more about a particular aspect of their work that was interesting to you."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=150
    )

    print(response)

    # Extract the generated text
    personalization = response.choices[0].message.content.strip()
    personalizations.append(personalization)

# Save the personalizations to a JSON file
with open('personalizations_animal.json', 'w') as outfile:
    json.dump(personalizations, outfile, indent=4)
