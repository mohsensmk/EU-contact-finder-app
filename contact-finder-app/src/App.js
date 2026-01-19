import React, { useState } from "react";
import CountrySelect from "./components/CountrySelect";
import ContactSelect from "./components/ContactSelect";
import EmailDraft from "./components/EmailDraft";
import { uxCopy } from "./data/uxCopy";
import contactsData from "./data/EUOfficialContacts.real.json";
import { emailTemplates } from "./data/emailTemplates";
import ProgressIndicator from "./components/ProgressIndicator";
import "./styles.minimal.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedOfficials, setSelectedOfficials] = useState([]);
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [userCity, setUserCity] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#181c24",
        padding: 0,
        margin: 0,
        position: "relative",
      }}
    >
      <div id="lion-sun-bg"></div>
      <div
        className="app-container"
        style={{
          maxWidth: 650,
          margin: "0 auto",
          padding: "40px 0 32px 0",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: 32,
              color: "#f3d34a",
              letterSpacing: 1,
              textShadow: "0 2px 12px #0008",
            }}
          >
            EU Official Contact Finder
          </span>
          <div
            style={{
              color: "#b0b8c9",
              fontSize: 17,
              marginTop: 8,
              fontWeight: 400,
            }}
          >
            Easily draft and send professional emails to EU officials
          </div>
        </div>
        <ProgressIndicator step={step - 1} />
        {step === 1 && (
          <div className="card-dark">
            <div className="step-header">Step 1: Select Country</div>
            <CountrySelect
              onSelect={(country) => {
                setSelectedCountry(country);
                setStep(2);
              }}
            />
          </div>
        )}
        {step === 2 && (
          <div className="card-dark">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <button
                onClick={() => setStep(1)}
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
                <span style={{ fontSize: 20, marginRight: 4 }}>&larr;</span>{" "}
                Back
              </button>
              <span className="step-header" style={{ margin: 0 }}>
                Step 2: Select Official
              </span>
            </div>
            <div
              style={{ marginBottom: 16, color: "#b0b8c9", fontWeight: 500 }}
            >
              <span>Selected Country: </span>
              <span style={{ color: "#f3d34a", fontWeight: 700 }}>
                {selectedCountry || "None"}
              </span>
            </div>
            <ContactSelect
              country={selectedCountry}
              onBack={() => setStep(1)}
              onSelect={(officials) => {
                setSelectedOfficials(officials);
                setStep(3);
              }}
            />
          </div>
        )}
        {step === 3 && (
          <div className="card-dark">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <span className="step-header" style={{ margin: 0 }}>
                Step 3: Draft & Copy Email
              </span>
            </div>
            <div
              style={{ marginBottom: 16, color: "#b0b8c9", fontWeight: 500 }}
            >
              <span>Selected Country: </span>
              <span style={{ color: "#f3d34a", fontWeight: 700 }}>
                {selectedCountry || "None"}
              </span>
              {selectedOfficials.length > 0 && (
                <span style={{ marginLeft: 18 }}>
                  <span>Selected Official(s): </span>
                  <span style={{ color: "#f3d34a", fontWeight: 700 }}>
                    {selectedOfficials.map((o) => o.name).join(", ")}
                  </span>
                </span>
              )}
            </div>
            <EmailDraft
              contacts={selectedOfficials}
              onBack={() => setStep(2)}
              userName={userName}
              userCity={userCity}
              setUserName={setUserName}
              setUserCity={setUserCity}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
