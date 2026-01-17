import React from "react";
import { uxCopy } from "../data/uxCopy";

function Disclaimer() {
  return (
    <div style={{ marginTop: "2rem", fontSize: "0.9em", color: "#888" }}>
      <p>{uxCopy.safety.disclaimer}</p>
      <p>{uxCopy.safety.lastUpdated.replace("{date}", "2026-01-17")}</p>
    </div>
  );
}

export default Disclaimer;
