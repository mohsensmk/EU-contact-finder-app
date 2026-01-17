import requests
from bs4 import BeautifulSoup
import json

BASE_URL = "https://www.europarl.europa.eu"
LIST_URL = f"{BASE_URL}/meps/en/full-list/all"

def get_mep_list():
    r = requests.get(LIST_URL)
    soup = BeautifulSoup(r.text, "html.parser")
    meps = []
    EU_COUNTRIES = [
        "Austria", "Belgium", "Bulgaria", "Croatia", "Republic of Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden"
    ]
    for div in soup.select("div.erpl_member-list-item"):
        a = div.select_one("a.erpl_member-list-item-content")
        if not a or not a.has_attr("href"):
            continue
        url = a["href"] if a["href"].startswith("http") else BASE_URL + a["href"]
        name_tag = div.select_one("div.erpl_title-h4.t-item")
        name = name_tag.text.strip() if name_tag else None
        # Extract all .sln-additional-info spans
        info_spans = div.select("span.sln-additional-info")
        group = None
        country = None
        for span in info_spans:
            text = span.text.strip()
            if not group and "Group" in text:
                group = text
            if not country and text in EU_COUNTRIES:
                country = text
        meps.append({
            "name": name,
            "profile_url": url,
            "group": group,
            "country": country
        })
    return meps

def get_mep_email(profile_url):
    r = requests.get(profile_url)
    soup = BeautifulSoup(r.text, "html.parser")
    email = None
    email_tag = soup.select_one("a.link_email")
    if email_tag and email_tag.has_attr("href"):
        obfuscated = email_tag["href"]
        obfuscated = obfuscated.replace("[at]", "@").replace("[dot]", ".")
        reversed_email = obfuscated[::-1]
        if "@" in reversed_email:
            email = reversed_email
    return email

if __name__ == "__main__":
    meps = get_mep_list()  # Fetch all MEPs
    data = []
    for mep in meps:
        try:
            email = get_mep_email(mep["profile_url"])
            data.append({
                "name": mep["name"],
                "country": mep["country"],
                "email": email,
                "group": mep["group"]
            })
        except Exception as e:
            print(f"Error for {mep['profile_url']}: {e}")
    with open("EUOfficialContacts.real.json", "w") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Done! Check EUOfficialContacts.real.json")

