import React from "react";
import { uxCopy } from "../data/uxCopy";
import contacts from "../data/EUOfficialContacts.real.json";

function getUniqueCountries(contacts) {
  const set = new Set();
  contacts.forEach((c) => {
    if (c.country) set.add(c.country);
  });
  return Array.from(set).sort();
}

function CountrySelect({ onSelect }) {
  const [selected, setSelected] = React.useState("");
  const countries = React.useMemo(() => getUniqueCountries(contacts), []);
  return (
    <div>
      <label className="section-desc">{uxCopy.countrySelect.label}</label>
      <div className="country-grid">
        {countries.map((c) => (
          <button
            key={c}
            className={`country-btn${selected === c ? " selected" : ""}`}
            onClick={() => {
              setSelected(c);
              onSelect(c);
            }}
            tabIndex={0}
            aria-label={c}
          >
            {c}
          </button>
        ))}
      </div>
      <p style={{ fontSize: "0.97em", color: "#b0b8c9", marginTop: 10 }}>
        {uxCopy.countrySelect.disclaimer}
      </p>
    </div>
  );
}

export default CountrySelect;
