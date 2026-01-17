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
  // Always use concise template for simplicity

  const contact = contacts[0];
  const template = emailTemplates.concise;
  const subject = template.subject;
  const body = template.body
    .replace("{RecipientTitle}", contact.role || "")
    .replace(
      "{RecipientLastName}",
      contact.name ? contact.name.split(" ").slice(-1)[0] : ""
    )
    .replace("{UserName}", userName)
    .replace("{UserCity}", userCity)
    .replace("{UserCountry}", contact.country || "")
    .replace("{Incident1}", "")
    .replace("{Incident2}", "")
    .replace("{PolicyAsk1}", "")
    .replace("{PolicyAsk2}", "");

  const [copiedBody, setCopiedBody] = useState(false);
  const [copiedSubject, setCopiedSubject] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyBody = () => {
    navigator.clipboard.writeText(body);
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };
  const handleCopySubject = () => {
    navigator.clipboard.writeText(subject);
    setCopiedSubject(true);
    setTimeout(() => setCopiedSubject(false), 2000);
  };
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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
            <label>Your City </label>
            <input
              placeholder="Enter your city"
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
              style={{ width: "100%", minWidth: 0 }}
            />
          </div>
        </div>
        <div style={{ marginTop: 18 }}>
          {/* Email on top */}
          <div
            style={{
              marginBottom: 14,
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 8,
            }}
          >
            <span style={{ color: "#f3f6fa", fontWeight: 600 }}>
              Official Email:
            </span>
            <span style={{ color: "#b0b8c9", wordBreak: "break-all" }}>
              {contact.email}
            </span>
            <button
              style={{ padding: "2px 10px", fontSize: 13, borderRadius: 5 }}
              onClick={handleCopyEmail}
            >
              Copy Email
            </button>
            {copiedEmail && (
              <span style={{ color: "#b0b8c9", fontSize: 13 }}>Copied!</span>
            )}
          </div>
          {/* Subject next */}
          <div
            style={{
              marginBottom: 10,
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
            <button
              style={{ padding: "2px 10px", fontSize: 13, borderRadius: 5 }}
              onClick={handleCopySubject}
            >
              Copy Subject
            </button>
            {copiedSubject && (
              <span style={{ color: "#b0b8c9", fontSize: 13 }}>Copied!</span>
            )}
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
            }}
          >
            <button
              style={{ padding: "2px 10px", fontSize: 13, borderRadius: 5 }}
              onClick={handleCopyBody}
            >
              Copy Body
            </button>
            {copiedBody && (
              <span style={{ color: "#b0b8c9", fontSize: 13 }}>Copied!</span>
            )}
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
