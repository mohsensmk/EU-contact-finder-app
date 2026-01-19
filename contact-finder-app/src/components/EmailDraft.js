import React, { useState } from "react";
import { emailTemplates } from "../data/emailTemplates";
import { uxCopy } from "../data/uxCopy";

// Cleaned up: Only keep the new, correct EmailDraft function

function EmailDraft({
  contacts,
  onBack,
  userName,
  userCity,
  setUserName,
  setUserCity,
}) {
  // Let user edit country again
  const [country, setCountry] = useState(contacts[0]?.country || "");
  const [randomKey, setRandomKey] = useState(Date.now());

  // --- RANDOMIZATION LOGIC ---
  function getRandomMainTemplate() {
    const mainKeys = Object.keys(emailTemplates).filter(
      (k) => k === "main" || /^main\d+$/.test(k),
    );
    const randomKey = mainKeys[Math.floor(Math.random() * mainKeys.length)];
    return emailTemplates[randomKey];
  }

  // Re-randomize on button click by changing randomKey
  const [template, setTemplate] = useState(getRandomMainTemplate());
  const subject = template.subject;

  const handleRandomize = () => {
    setTemplate(getRandomMainTemplate());
    setRandomKey(Date.now());
  };

  // Compose the email body using the latest state
  let body = template.body
    .replace(
      "Your Excellency {RecipientTitle} {RecipientLastName},",
      contacts.length === 1
        ? `Dear Ms/Mr ${contacts[0].name.split(" ").slice(-1)[0]}, Member of the European Parliament,`
        : "Dear Members of the European Parliament,",
    )
    .replace("{RecipientTitle}", "")
    .replace(
      "{RecipientLastName}",
      contacts.length === 1 ? contacts[0].name.split(" ").slice(-1)[0] : "",
    )
    .replace("{UserName}", userName)
    .replace("{UserCity}", userCity || "[City]")
    .replace("{UserCountry}", country || "[Country]")
    .replace("{Incident1}", "")
    .replace("{Incident2}", "")
    .replace("{PolicyAsk1}", "")
    .replace("{PolicyAsk2}", "");

  const handleSendEmail = () => {
    const allEmails = contacts.map((c) => c.email).join(",");
    const mailto = `mailto:${encodeURIComponent(allEmails)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 24 }}>
        <button
          onClick={onBack}
          style={{
            background: "none",
            border: "none",
            color: "#f3d34a",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            marginRight: 12,
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 20, marginRight: 4 }}>&larr;</span> Back
        </button>
        <span
          style={{
            fontWeight: 700,
            fontSize: 22,
            color: "#f3d34a",
            textShadow: "0 2px 8px #0008",
          }}
        >
          {uxCopy.emailDraft.label}
        </span>
      </div>
      <p className="section-desc">{uxCopy.emailDraft.helper}</p>
      <div
        className="card-dark"
        style={{
          marginBottom: 32,
          padding: 24,
          overflowX: "auto",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          className="input-row-responsive"
          style={{
            display: "flex",
            gap: 18,
            marginBottom: 18,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <label>Your Name</label>
            <input
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: "100%", minWidth: 0 }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <label>Your City</label>
            <input
              placeholder="Enter your city"
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
              style={{ width: "100%", minWidth: 0 }}
            />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <label>Your Country</label>
            <input
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={{ width: "100%", minWidth: 0 }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            marginBottom: 18,
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={handleRandomize}
            style={{
              background: "#1976d2",
              color: "#fff",
              fontWeight: 700,
              border: "none",
              padding: "8px 18px",
              borderRadius: 7,
              fontSize: 15,
              cursor: "pointer",
              minWidth: 180,
            }}
          >
            Randomize Email Text
          </button>
        </div>
        <div style={{ marginTop: 18 }}>
          {/* Email on top */}
          <div
            style={{
              marginBottom: 14,
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span
              style={{ color: "#f3f6fa", fontWeight: 600, marginBottom: 4 }}
            >
              Official Email(s):
            </span>
            <ol
              style={{
                color: "#b0b8c9",
                wordBreak: "break-all",
                margin: 0,
                paddingLeft: 20,
              }}
            >
              {contacts.map((c, idx) => (
                <li key={c.email + idx}>{c.email}</li>
              ))}
            </ol>
          </div>
          <div
            style={{
              fontWeight: 600,
              color: "#f3d34a",
              fontSize: 17,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span style={{ color: "#f3f6fa" }}>
              {uxCopy.emailDraft.subjectLabel}:
            </span>{" "}
            <span style={{ color: "#f3d34a" }}>{subject}</span>
          </div>
          {/* Body label above box */}
          <div
            style={{
              marginBottom: 8,
              fontWeight: 600,
              color: "#f3f6fa",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {uxCopy.emailDraft.bodyLabel}:
          </div>
          <pre
            style={{
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              maxWidth: "100%",
              boxSizing: "border-box",
            }}
          >
            {body}
          </pre>
          <div
            style={{
              marginTop: 6,
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "2px 14px",
                fontSize: 13,
                borderRadius: 5,
                background: "#1976d2",
                color: "#fff",
                fontWeight: 700,
                border: "none",
              }}
              onClick={handleSendEmail}
            >
              Send Email
            </button>
          </div>
          <div
            style={{
              fontSize: "0.97em",
              color: "#b0b8c9",
              marginTop: 12,
              textAlign: "right",
            }}
          >
            {uxCopy.emailDraft.languageNote}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailDraft;
