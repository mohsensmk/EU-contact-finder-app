import React from "react";
import "../styles.minimal.css";

// Helper for mailto links
const Email = ({ email, children }) => (
  <a
    href={`mailto:${email}`}
    style={{ color: "#f3d34a", textDecoration: "underline" }}
  >
    {children || email}
  </a>
);

function InstructionPage() {
  return (
    <div className="card-dark" style={{ margin: "40px auto", maxWidth: 800 }}>
      <h1
        style={{
          color: "#f3d34a",
          fontWeight: 800,
          fontSize: 28,
          marginBottom: 8,
        }}
      >
        Who Decides the Final EU Action on Iran
      </h1>
      <div style={{ color: "#e5e7eb", fontSize: 15, marginBottom: 24 }}>
        Last updated: 2026-01
      </div>
      <p style={{ color: "#e5e7eb", fontSize: 17 }}>
        This page lists the{" "}
        <b>key decision-makers and official contact channels</b> responsible for
        the <b>final, binding EU steps</b> on Iran, including:
      </p>
      <ul style={{ marginBottom: 18, color: "#e5e7eb" }}>
        <li>Terrorist designation of the IRGC</li>
        <li>Enforcement of sanctions</li>
        <li>Diplomatic expulsions</li>
        <li>Internet circumvention support</li>
      </ul>
      <p style={{ color: "#e5e7eb", fontSize: 16, marginBottom: 24 }}>
        This section is designed for <b>public pressure campaigns</b> and is
        regularly updated for advocacy use.
      </p>

      {/* 1. EU Council */}
      <h2 style={{ color: "#f3d34a", fontWeight: 700, marginTop: 32 }}>
        1. EU Council – Final Legal Decision-Maker
      </h2>
      <div style={{ marginBottom: 12 }}>
        <b>Role:</b> Adopts binding EU foreign policy decisions (sanctions,
        terrorist listings, diplomatic measures).
      </div>
      <div style={{ marginBottom: 12 }}>
        <b>Who decides:</b> Foreign Ministers of all EU Member States (unanimity
        required).
      </div>
      <div style={{ marginBottom: 12 }}>
        <b>Council Secretariat (central coordination):</b>
        <ul>
          <li>
            <Email email="public.info@consilium.europa.eu" />
          </li>
          <li>
            <Email email="protocol.council@consilium.europa.eu" />
          </li>
        </ul>
      </div>

      {/* 2. EU High Representative */}
      <h2 style={{ color: "#f3d34a", fontWeight: 700, marginTop: 32 }}>
        2. EU High Representative
      </h2>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        <b>Current High Representative:</b> Kaja Kallas
      </div>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        <b>Role:</b>
        <ul>
          <li>Chairs the Foreign Affairs Council</li>
          <li>Sets agenda and drafts sanctions packages</li>
          <li>Coordinates EU external action</li>
        </ul>
      </div>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        <b>Cabinet Contacts (high-impact):</b>
        <ul>
          <li>
            <Email email="vivian.loonela@ec.europa.eu">
              vivian.loonela@ec.europa.eu
            </Email>{" "}
            <span style={{ color: "#e5e7eb" }}>– Head of Cabinet</span>
          </li>
          <li>
            <Email email="laure.chapuis@ec.europa.eu">
              laure.chapuis@ec.europa.eu
            </Email>{" "}
            <span style={{ color: "#e5e7eb" }}>– Deputy Head of Cabinet</span>
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        <b>General contact:</b>{" "}
        <Email email="commissions-public-opinion@ec.europa.eu" />
      </div>

      {/* 3. Foreign Ministers Table */}
      <h2 style={{ color: "#f3d34a", fontWeight: 700, marginTop: 32 }}>
        3. Foreign Ministers of EU Member States
      </h2>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        These ministers <b>vote in the EU Council</b>. Pressure on even one can
        block or unlock the final step.
      </div>
      <div style={{ overflowX: "auto", marginBottom: 18 }}>
        <table
          style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}
        >
          <thead>
            <tr style={{ background: "#f3d34a22" }}>
              <th style={{ padding: 6, textAlign: "left", color: "#fff" }}>
                Country
              </th>
              <th style={{ padding: 6, textAlign: "left", color: "#fff" }}>
                Foreign Minister
              </th>
              <th style={{ padding: 6, textAlign: "left", color: "#fff" }}>
                Contact
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows hardcoded for now, can be mapped from data if needed */}
            <tr>
              <td>Belgium</td>
              <td>Maxime Prévot</td>
              <td>
                <Email email="info@diplomatie.be" />
              </td>
            </tr>
            <tr>
              <td>Bulgaria</td>
              <td>Georg Georgiev</td>
              <td>
                <Email email="ministry@mfa.bg" />
              </td>
            </tr>
            <tr>
              <td>Denmark</td>
              <td>Lars Løkke Rasmussen</td>
              <td>
                <Email email="um@um.dk" />
              </td>
            </tr>
            <tr>
              <td>Germany</td>
              <td>Johann Wadephul</td>
              <td>
                <Email email="presse@auswaertiges-amt.de" />
              </td>
            </tr>
            <tr>
              <td>Estonia</td>
              <td>Margus Tsahkna</td>
              <td>
                <Email email="foreign@vm.ee" />
              </td>
            </tr>
            <tr>
              <td>Ireland</td>
              <td>Simon Harris</td>
              <td>
                <Email email="info@dfa.ie" />
              </td>
            </tr>
            <tr>
              <td>Greece</td>
              <td>Georgios Gerapetritis</td>
              <td>
                <Email email="grcons.brussels@mfa.gr" />
              </td>
            </tr>
            <tr>
              <td>Spain</td>
              <td>José Manuel Albares</td>
              <td>
                <Email email="informacion@mhexterior.es" />
              </td>
            </tr>
            <tr>
              <td>France</td>
              <td>Jean‑Noël Barrot</td>
              <td>
                <Email email="contact@diplomatie.gouv.fr" />
              </td>
            </tr>
            <tr>
              <td>Croatia</td>
              <td>Gordan Grlić Radman</td>
              <td>
                <Email email="mvpei@mvep.hr" />
              </td>
            </tr>
            <tr>
              <td>Italy</td>
              <td>Antonio Tajani</td>
              <td>
                <Email email="ministero.affariesteri@cert.esteri.it" />
              </td>
            </tr>
            <tr>
              <td>Latvia</td>
              <td>Baiba Braže</td>
              <td>
                <Email email="info@mfa.gov.lv" />
              </td>
            </tr>
            <tr>
              <td>Lithuania</td>
              <td>Gabrielius Landsbergis</td>
              <td>
                <Email email="diplomatas@urm.lt" />
              </td>
            </tr>
            <tr>
              <td>Luxembourg</td>
              <td>Xavier Bettel</td>
              <td>
                <Email email="direction.eu@mae.etat.lu" />
              </td>
            </tr>
            <tr>
              <td>Hungary</td>
              <td>Péter Szijjártó</td>
              <td>
                <Email email="titkarsag@me.gov.hu" />
              </td>
            </tr>
            <tr>
              <td>Netherlands</td>
              <td>Caspar Veldkamp</td>
              <td>
                <Email email="postmaster@minbuza.nl" />
              </td>
            </tr>
            <tr>
              <td>Poland</td>
              <td>Radosław Sikorski</td>
              <td>
                <Email email="kancelaria@mfa.gov.pl" />
              </td>
            </tr>
            <tr>
              <td>Portugal</td>
              <td>Paulo Rangel</td>
              <td>
                <Email email="info@mne.gov.pt" />
              </td>
            </tr>
            <tr>
              <td>Romania</td>
              <td>Oana‑Silvia Țoiu</td>
              <td>
                <Email email="minister@mae.ro" />
              </td>
            </tr>
            <tr>
              <td>Finland</td>
              <td>Elina Valtonen</td>
              <td>
                <Email email="minister@formin.fi" />
              </td>
            </tr>
            <tr>
              <td>Sweden</td>
              <td>Maria Malmer Stenergard</td>
              <td>
                <Email email="utrikesministern@government.se" />
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ color: "#e5e7eb", fontSize: 13, marginTop: 6 }}>
          Many ministers do not publish personal emails. These are{" "}
          <b>official ministry channels</b> and are appropriate for formal
          pressure campaigns.
        </div>
      </div>

      {/* 4. Prime Ministers / Heads of State */}
      <h2 style={{ color: "#f3d34a", fontWeight: 700, marginTop: 32 }}>
        4. Prime Ministers / Heads of State (Political Green Light)
      </h2>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        <b>Body:</b> European Council
      </div>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        <b>Role:</b>
        <ul>
          <li>Gives political authorization</li>
          <li>Breaks deadlocks</li>
          <li>Directs foreign ministers</li>
        </ul>
      </div>
      <div style={{ color: "#e5e7eb", fontSize: 15, marginBottom: 12 }}>
        Pressure here is indirect but powerful.
        <br />
        <b>Contact method:</b> National government offices and PM websites
        (varies by country).
      </div>

      {/* 5. Permanent Representations */}
      <h2 style={{ color: "#f3d34a", fontWeight: 700, marginTop: 32 }}>
        5. Permanent Representations to the EU (Brussels)
      </h2>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        Each Member State has a Permanent Representation that prepares Council
        decisions.
      </div>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        <b>Why important:</b>
        <ul>
          <li>Early-stage influence</li>
          <li>Technical drafting</li>
          <li>National position shaping</li>
        </ul>
      </div>
      <div style={{ marginBottom: 8, color: "#e5e7eb" }}>
        <b>Example:</b> Italy – Permanent Representation to the EU{" "}
        <Email email="rpue.coord@esteri.it" />
      </div>
      <div style={{ color: "#e5e7eb", fontSize: 15, marginBottom: 12 }}>
        All Permanent Representations can be found via the EU “Who is Who”
        directory.
      </div>

      {/* 6. What This Means Strategically */}
      <h2 style={{ color: "#f3d34a", fontWeight: 700, marginTop: 32 }}>
        6. What This Means Strategically
      </h2>
      <ul style={{ marginBottom: 18 }}>
        <li>
          The <b>European Parliament resolution is not final</b>
        </li>
        <li>
          The <b>EU Council is the final legal gate</b>
        </li>
        <li>
          <b>One country can block everything</b>
        </li>
        <li>Sustained, targeted pressure is essential</li>
      </ul>

      {/* 7. Recommended Campaign Focus */}
      <h2 style={{ color: "#f3d34a", fontWeight: 700, marginTop: 32 }}>
        7. Recommended Campaign Focus
      </h2>
      <ol style={{ marginBottom: 18 }}>
        <li>EU High Representative cabinet</li>
        <li>
          Foreign Ministries of France, Germany, Italy, Netherlands, Sweden,
          Poland
        </li>
        <li>Council Secretariat</li>
        <li>National Permanent Representations in Brussels</li>
      </ol>

      {/* 8. Update Log */}
      <h2 style={{ color: "#f3d34a", fontWeight: 700, marginTop: 32 }}>
        8. Update Log
      </h2>
      <ul>
        <li>2026-01: Initial release</li>
      </ul>

      <div style={{ color: "#e5e7eb", fontSize: 14, marginTop: 32 }}>
        This document is intended for civic action, advocacy, and accountability
        efforts.
      </div>
    </div>
  );
}

export default InstructionPage;
