import React from "react";

function ProgressIndicator({ step }) {
  const steps = ["Country", "Official", "Email"];
  return (
    <div className="progress-indicator">
      {steps.map((label, idx) => (
        <div key={label} style={{ display: "flex", alignItems: "center" }}>
          <span className={step === idx ? "active" : ""}>{label}</span>
          {idx < steps.length - 1 && <span className="arrow">&rarr;</span>}
        </div>
      ))}
    </div>
  );
}

export default ProgressIndicator;
