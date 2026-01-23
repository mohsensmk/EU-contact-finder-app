import React, { useState } from "react";
import InstructionPage from "./components/InstructionPage";
import CountrySelect from "./components/CountrySelect";
import ContactSelect from "./components/ContactSelect";
import EmailDraft from "./components/EmailDraft";
import "./styles.minimal.css";

function App() {
  const [page, setPage] = useState("home"); // 'home', 'final', 'mep'
  const [selectedMEPCountry, setSelectedMEPCountry] = useState("");
  const [selectedMEPs, setSelectedMEPs] = useState([]);
  const [mepStep, setMepStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [userCity, setUserCity] = useState(""); // Add this if missing

  return (
    <div
      style={{ minHeight: "100vh", background: "#18192b", padding: "2rem 0" }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
        {page === "home" && (
          <div
            className="card-pro"
            style={{
              marginTop: 32,
              marginBottom: 48,
              background: "#222436",
              border: "1.5px solid #2e3147",
              boxShadow: "0 4px 32px #0002, 0 1.5px 6px #0001",
              borderRadius: 22,
              padding: "2.5rem 2rem 2rem 2rem",
            }}
          >
            <div
              className="section-title"
              style={{
                color: "#f3d34a",
                fontWeight: 700,
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
              }}
            >
              Choose a Section
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 32,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="pro-btn pro-btn-primary"
                style={{ minWidth: 220, fontSize: "1.13rem" }}
                onClick={() => setPage("final")}
              >
                Final EU Decision-Makers
              </button>
              <button
                className="pro-btn pro-btn-secondary"
                style={{ minWidth: 220, fontSize: "1.13rem" }}
                onClick={() => setPage("mep")}
              >
                Contact Your MEPs
              </button>
            </div>
          </div>
        )}
        {page === "final" && (
          <>
            <div
              className="card-pro"
              style={{
                background:
                  "linear-gradient(120deg, #23243a 80%, #2d2f4a 100%)",
                border: "2.5px solid #3b82f6",
                boxShadow: "0 8px 40px #0005, 0 2px 8px #0002",
                marginBottom: 48,
                padding: "2.8rem 2.7rem 2.2rem 2.7rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background:
                    "radial-gradient(ellipse at top left, #3b82f633 0%, transparent 70%)",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: "1.6rem",
                  marginBottom: 12,
                  letterSpacing: 0.3,
                  textShadow: "0 2px 18px #000a, 0 0 8px #3b82f6cc",
                  lineHeight: 1.22,
                  zIndex: 1,
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: 4,
                }}
              >
                <span
                  style={{
                    color: "#f3d34a",
                    textShadow: "0 0 16px #ffe06688, 0 2px 12px #0008",
                    borderBottom: "2.5px solid #ffe066",
                    paddingBottom: 2,
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #f3d34a22 60%, transparent 100%)",
                    boxShadow: "0 2px 12px #ffe06633",
                  }}
                >
                  Final EU Decision-Makers
                </span>
                <br />
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: "1.13rem",
                    color: "#fff",
                    display: "block",
                    marginTop: 10,
                    textShadow: "0 1px 8px #0007",
                  }}
                >
                  These are the officials and bodies who make the final, binding
                  decisions on EU foreign policy regarding Iran.{" "}
                  <span style={{ color: "#ffe066", fontWeight: 700 }}>
                    Contacting them is essential for direct impact.
                  </span>
                </span>
              </div>
              <button
                className="pro-btn pro-btn-dark"
                style={{
                  fontSize: "1.08rem",
                  marginTop: 12,
                  marginBottom: 0,
                  padding: "0.8rem 2.4rem",
                  fontWeight: 700,
                  letterSpacing: 0.1,
                  boxShadow: "0 2px 12px #3b82f655",
                }}
                onClick={() => setPage("home")}
              >
                Back to Home
              </button>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(120deg, #23243a 80%, #23243a 100%)",
                borderRadius: 18,
                border: "1.5px solid #3b82f6",
                boxShadow: "0 4px 32px #0003, 0 1.5px 6px #0001",
                padding: "2.7rem 2.1rem 2.2rem 2.1rem",
                maxWidth: 760,
                margin: "0 auto 2.5rem auto",
                fontFamily: "Inter, Segoe UI, Arial, sans-serif",
                color: "#f7f8fa",
                fontSize: "1.13rem",
                lineHeight: 1.8,
                fontWeight: 500,
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "#3b82f6 #23243a",
              }}
            >
              <style>{`
              .instruction-content::-webkit-scrollbar {
                width: 8px;
                background: #23243a;
              }
              .instruction-content::-webkit-scrollbar-thumb {
                background: #3b82f6;
                border-radius: 8px;
              }
            `}</style>
              <div className="instruction-content">
                <InstructionPage />
              </div>
            </div>
          </>
        )}
        {page === "mep" && mepStep === 1 && (
          <div className="card-pro">
            <div className="section-title">
              Contact Your MEPs (European Parliament)
            </div>
            <div className="section-desc">
              Select your country to find and contact Members of the European
              Parliament (MEPs) representing you. These officials can raise
              issues, propose resolutions, and influence EU debates.
            </div>
            <button
              className="pro-btn pro-btn-dark"
              onClick={() => setPage("home")}
              style={{ marginBottom: 18 }}
            >
              Back to Home
            </button>
            <CountrySelect
              onSelect={(country) => {
                setSelectedMEPCountry(country);
                setMepStep(2);
              }}
            />
          </div>
        )}
        {page === "mep" && mepStep === 2 && (
          <div className="card-pro">
            <div className="section-title">Select officials to contact</div>
            <button
              className="pro-btn pro-btn-dark"
              onClick={() => setMepStep(1)}
              style={{ marginBottom: 18 }}
            >
              Back to Country Select
            </button>
            <ContactSelect
              country={selectedMEPCountry}
              onBack={() => setMepStep(1)}
              onSelect={(mepList) => {
                setSelectedMEPs(mepList);
                setMepStep(3);
              }}
            />
          </div>
        )}
        {page === "mep" && mepStep === 3 && (
          <div
            className="card-pro"
            style={{ position: "relative", paddingTop: 48 }}
          >
            <button
              className="pro-btn pro-btn-primary"
              onClick={() => setMepStep(2)}
              style={{
                position: "absolute",
                top: 18,
                left: 18,
                marginBottom: 0,
                zIndex: 2,
                minWidth: 140,
                fontSize: "1rem",
                padding: "0.6rem 1.2rem",
              }}
            >
              Back to Officials
            </button>
            <div
              className="section-title"
              style={{ textAlign: "center", marginBottom: 24 }}
            >
              Draft Your Email
            </div>
            <EmailDraft
              contacts={selectedMEPs}
              onBack={() => setMepStep(2)}
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
