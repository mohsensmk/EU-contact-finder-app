import React, { useState } from "react";
import contactsData from "../data/EUOfficialContacts.real.json";
import { uxCopy } from "../data/uxCopy";

function ContactSelect({ country, onSelect, onBack }) {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 12;
  const contacts = contactsData.filter((c) => c.country === country);
  const pageCount = Math.ceil(contacts.length / PAGE_SIZE);
  const pagedContacts = contacts.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );

  const handleSelect = (contact) => {
    setSelected(contact);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
  };

  return (
    <div>
      <label className="section-desc">{uxCopy.contactSelect.label}</label>
      <div className="contact-grid contact-grid-responsive">
        {pagedContacts.map((c, i) => (
          <div
            key={i + page * PAGE_SIZE}
            className={`contact-card${
              selected === c ? " selected" : ""
            } contact-card-responsive`}
            tabIndex={0}
            onClick={() => handleSelect(c)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && handleSelect(c)
            }
            aria-label={c.name}
            style={{ padding: "14px 10px 12px 10px", marginBottom: 12 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 2,
              }}
            >
              <input
                type="radio"
                name="official"
                checked={selected === c}
                onChange={() => handleSelect(c)}
                className="contact-radio"
                tabIndex={-1}
                style={{ width: 20, height: 20 }}
              />
              <span
                style={{
                  fontWeight: 800,
                  fontSize: 18,
                  color: "#f3d34a",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {c.name}
              </span>
            </div>
            {c.role && (
              <div
                className="contact-role contact-role-responsive"
                style={{
                  fontSize: 14,
                  color: "#f3d34a",
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                {c.role}
              </div>
            )}
            {c.email && (
              <div
                className="contact-email-responsive"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  marginTop: 2,
                }}
              >
                <span
                  style={{
                    wordBreak: "break-all",
                    fontSize: 15,
                    color: "#f3f6fa",
                  }}
                >
                  {c.email}
                </span>
                <button
                  className="contact-copy-btn-responsive"
                  style={{
                    background: "#1976d2",
                    color: "#fff",
                    fontWeight: 700,
                    border: "none",
                    padding: "6px 18px",
                    borderRadius: 7,
                    fontSize: 15,
                    marginLeft: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopyEmail(c.email);
                  }}
                  aria-label={`Copy email for ${c.name}`}
                >
                  Copy
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Pagination controls */}
      {pageCount > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
            margin: "18px 0 0 0",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            style={{ minWidth: 70 }}
          >
            &larr; Prev
          </button>
          <span style={{ color: "#b0b8c9", fontSize: 15 }}>
            Page {page + 1} of {pageCount}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={page === pageCount - 1}
            style={{ minWidth: 70 }}
          >
            Next &rarr;
          </button>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 18,
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "none",
            color: "#f3d34a",
            border: "none",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            padding: 0,
          }}
        >
          &larr; Back
        </button>
        <button
          onClick={() => onSelect(selected ? [selected] : [])}
          disabled={!selected}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ContactSelect;
