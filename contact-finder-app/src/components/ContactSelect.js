import React, { useState } from "react";
import contactsData from "../data/EUOfficialContacts.real.json";
import { uxCopy } from "../data/uxCopy";

function ContactSelect({ country, onSelect, onBack }) {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 24;

  // Revert to simple country filter and alphabetical sort only
  const contacts = contactsData.filter((c) => c.country === country);
  const pagedContacts = contacts
    .sort((a, b) => a.name.localeCompare(b.name))
    .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const pageCount = Math.ceil(contacts.length / PAGE_SIZE);

  const handleSelect = (contact) => {
    setSelected((prev) => {
      if (prev.includes(contact)) {
        return prev.filter((c) => c !== contact);
      } else {
        return [...prev, contact];
      }
    });
  };

  // Utility: getCountryFlag
  function getCountryFlag(country) {
    // Simple country-to-emoji mapping for EU countries
    const flags = {
      Austria: "🇦🇹",
      Belgium: "🇧🇪",
      Bulgaria: "🇧🇬",
      Croatia: "🇭🇷",
      Cyprus: "🇨🇾",
      Czechia: "🇨🇿",
      Denmark: "🇩🇰",
      Estonia: "🇪🇪",
      Finland: "🇫🇮",
      France: "🇫🇷",
      Germany: "🇩🇪",
      Greece: "🇬🇷",
      Hungary: "🇭🇺",
      Ireland: "🇮🇪",
      Italy: "🇮🇹",
      Latvia: "🇱🇻",
      Lithuania: "🇱🇹",
      Luxembourg: "🇱🇺",
      Malta: "🇲🇹",
      Netherlands: "🇳🇱",
      Poland: "🇵🇱",
      Portugal: "🇵🇹",
      Romania: "🇷🇴",
      Slovakia: "🇸🇰",
      Slovenia: "🇸🇮",
      Spain: "🇪🇸",
      Sweden: "🇸🇪",
    };
    return flags[country] || "";
  }

  return (
    <div>
      <label className="section-desc">{uxCopy.contactSelect.label}</label>
      <div className="contact-grid contact-grid-responsive">
        {pagedContacts.map((c, i) => (
          <div
            key={i + page * PAGE_SIZE}
            className={`contact-card${
              selected.includes(c) ? " selected" : ""
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
                type="checkbox"
                checked={selected.includes(c)}
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
              {/* Country flag */}
              {c.country && (
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: 22,
                    verticalAlign: "middle",
                  }}
                  title={c.country}
                >
                  {getCountryFlag(c.country)}
                </span>
              )}
            </div>
            {/* Political group and committees */}
            {c.group && (
              <div style={{ fontSize: 14, color: "#b0b8c9", fontWeight: 600 }}>
                {c.group}
              </div>
            )}
            {c.committees && c.committees.length > 0 && (
              <div style={{ fontSize: 13, color: "#b0b8c9", marginTop: 2 }}>
                Committees: {c.committees.join(", ")}
              </div>
            )}
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
                    color: "#23272f",
                  }}
                >
                  {c.email}
                </span>
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
          onClick={() => onSelect(selected)}
          disabled={selected.length === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ContactSelect;
