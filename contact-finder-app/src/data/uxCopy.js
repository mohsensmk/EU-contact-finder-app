// Copy of uxCopy.js for app data import
export const uxCopy = {
  countrySelect: {
    label: "Select your country",
    helper:
      "Choose the country whose officials you want to contact. (Currently: EU countries)",
    disclaimer: "We only use official public contact information.",
  },
  contactSelect: {
    label: "Select officials to contact",
    helper:
      "Choose from a curated list of relevant officials (e.g., Foreign Affairs, Human Rights committees). Prefer your own representative if available.",
    searchPlaceholder: "Search by name or region (optional)",
    showAll: "Show all officials",
    officialContact: "Official contact page",
  },
  emailDraft: {
    label: "Generate your email draft",
    helper:
      "Fill in your name and city (optional). Add up to 2 incident references (date, location, source link) if you wish.",
    toneLabel: "Select tone:",
    toneOptions: ["Concise", "Standard", "Strong"],
    policyAskLabel: "Select your policy asks:",
    generateButton: "Generate email draft",
    subjectLabel: "Subject line",
    bodyLabel: "Email body",
    languageNote: "Emails are generated in English.",
  },
  safety: {
    disclaimer:
      "This tool does not send emails or store your personal data. Please use respectful, lawful language. No threats, harassment, or unverifiable claims.",
    lastUpdated: "Contact data last updated: {date}",
  },
};
