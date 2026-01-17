# EU Official Contact Finder

A modern, mobile-friendly React app to help users easily find and contact Members of the European Parliament (MEPs) by country, draft professional emails, and copy contact details for outreach.

## Features

- **Country Selection:** Choose any EU country to see all its MEPs.
- **Official Selection:** Browse and select an official (radio button, one at a time) with pagination for large countries.
- **Email Drafting:** Instantly generate a formal, customizable email draft for the selected official.
- **Copy Functions:** One-click copy for the official's email, the email subject, and the email body.
- **Responsive Design:** Fully optimized for mobile and desktop use.
- **Data Privacy:** Large contact datasets are excluded from the repository via `.gitignore`.

## Live Demo

Once deployed, access the app at:
[https://mohsensmk.github.io/EU-contact-finder-app](https://mohsensmk.github.io/EU-contact-finder-app)

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
# Clone the repository
https://github.com/mohsensmk/EU-contact-finder-app.git
cd EU-contact-finder-app/contact-finder-app

# Install dependencies
npm install
```

### Development

```bash
npm start
```

### Build & Deploy to GitHub Pages

```bash
npm run deploy
```

## Data Source

- MEP contact data is scraped from the official European Parliament website using the included `mep_scraper.py` script.
- The large data file `EUOfficialContacts.real.json` is ignored in git for privacy and size reasons.

## Project Structure

```
contact-finder-app/
  public/
  src/
    components/
    data/
    styles.css
  package.json
mep_scraper.py
.gitignore
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)

---

**Created by Mohsen**
