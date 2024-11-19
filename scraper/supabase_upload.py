import json

from supabase import create_client, Client
import os

url: str = "https://vuzidfbefkkocigeuaqt.supabase.co"
key: str = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1emlkZmJlZmtrb2NpZ2V1YXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3OTI2NjAsImV4cCI6MjA0NDM2ODY2MH0.rxcvCc_vxWtePGZts-WsS9x6ODiNc2FKjexrpUrdv7U"
supabase: Client = create_client(url, key)


def upload_professors():
    page_content = []
    names = []
    emails = []

    print("Loading names from names_npb.json")
    with open("names_npb.json", "r") as f:
        names = json.load(f)

    print("Loading emails from emails_npb.json")
    with open("emails_npb.json", "r") as f:
        emails = json.load(f)

    print("Loading page content from scraped_data_npb.json")
    with open("scraped_data_npb.json", "r") as f:
        page_content = json.load(f)

    department_id = 2

    for index, email in enumerate(emails):
        name = names[index]
        pc = page_content[index]

        print(f"Processing professor: {name}, Email: {email}")

        # Fetch existing professor by email
        existing_professor = supabase.table("Professor").select("*").eq("email", email).execute()
        print(f"Existing professor data: {existing_professor.data}")

        if existing_professor.data:
            # If professor exists, update their details
            professor_data = existing_professor.data[0]
            professor_id = professor_data["id"]

            print(f"Updating existing professor with ID: {professor_id}")

            # Update professor details
            professor = {
                "name": name,
                "page_content": pc
            }
            response = supabase.table("Professor").update(professor).eq("email", email).execute()
            print(f"Update response: {response}")

            # Fetch current professors array
            department = supabase.table("Department").select("professors").eq("id", department_id).execute()

            # Check if department data is not empty
            if department.data:
                current_professors = department.data[0]["professors"]
            else:
                print(f"No department found with ID: {department_id}")
                current_professors = []

            # Append new professor ID if not already present
            if current_professors is None:
                current_professors = [professor_id]
            if professor_id not in current_professors:
                current_professors.append(professor_id)

            # Update department with new professors array
            supabase.table("Department").update({
                "professors": current_professors
            }).eq("id", department_id).execute()

            # Fetch current departments array for the professor
            current_departments = professor_data.get("department", [])

            # Append department ID if not already present
            if current_departments is None:
                current_departments = [department_id]
            if department_id not in current_departments:
                current_departments.append(department_id)

            # Update professor with new departments array
            supabase.table("Professor").update({
                "department": current_departments
            }).eq("id", professor_id).execute()
        else:
            # If professor does not exist, create a new entry
            print(f"Inserting new professor: {name}")
            response = supabase.table("Professor").insert({
                "name": name,
                "email": email,
                "page_content": pc,
                "department": [department_id]  # Initialize with the department ID
            }).execute()
            print(f"Insert response: {response}")

            # Get the new professor's ID
            professor_id = response.data[0]["id"]
            print(f"New professor ID: {professor_id}")

            # Fetch current professors array
            department = supabase.table("Department").select("professors").eq("id", department_id).execute()

            # Check if department data is not empty
            if department.data:
                current_professors = department.data[0]["professors"]
            else:
                print(f"No department found with ID: {department_id}")
                current_professors = []

            # Append new professor ID
            current_professors.append(professor_id)

            # Update department with new professors array
            supabase.table("Department").update({
                "professors": current_professors
            }).eq("id", department_id).execute()

        print(f"Final response for {name}: {response}")

# upload_professors()

def upload_personalizations():
    with open("personalizations.json", "r") as f:
        personalizations = json.load(f)

    print(personalizations)
