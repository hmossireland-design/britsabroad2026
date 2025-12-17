// ---------- COUNTRY DATABASE ----------
const countries = {
  Portugal: { tax: "10%", visa: "D7 Passive Income", income: "€870/mo" },
  Spain: { tax: "Progressive", visa: "Non-Lucrative", income: "€2,400/mo" },
  Ireland: { tax: "Progressive", visa: "No Visa Needed", income: "None" },
  Cyprus: { tax: "Low", visa: "Category F", income: "€1,000/mo" },
  Malta: { tax: "Low Foreign Income", visa: "Retirement Programme", income: "€10k/yr" },
  France: { tax: "Progressive", visa: "Long Stay Visitor", income: "€1,800/mo" },
  UAE: { tax: "0%", visa: "Retirement Visa", income: "£4,200/mo" },
  Thailand: { tax: "Territorial", visa: "Retirement Visa", income: "£1,500/mo" },
  Italy: { tax: "7% (South)", visa: "Elective Residence", income: "€31k/yr" },
  Greece: { tax: "Low", visa: "FIP / Golden Visa", income: "€3,500/mo" },
  Malaysia: { tax: "Territorial", visa: "MM2H", income: "$1,500/mo" },
  Panama: { tax: "0% foreign", visa: "Pensionado", income: "$1,000/mo" },
  Mexico: { tax: "Territorial", visa: "Temporary Resident", income: "$2,500/mo" },
  CostaRica: { tax: "Territorial", visa: "Pensionado", income: "$1,000/mo" },
  Ecuador: { tax: "Low", visa: "Pensioner Visa", income: "$800/mo" },
  Bulgaria: { tax: "10%", visa: "D Visa", income: "€1,000/mo" },
  Hungary: { tax: "Low", visa: "Residence Permit", income: "€1,700/yr" },
  Poland: { tax: "Low", visa: "Temporary Residence", income: "£160/mo" },
  Slovakia: { tax: "Low", visa: "Temporary Residence", income: "€800/mo" },
  Serbia: { tax: "Low", visa: "Temporary Residence", income: "€1,000/mo" },
  CzechRepublic: { tax: "Moderate", visa: "Long-Term Residence", income: "€1,200/mo" },
  Argentina: { tax: "Territorial", visa: "Rentista", income: "$2,000/mo" },
  USA: { tax: "Federal + State", visa: "Various", income: "Varies" },
  Vietnam: { tax: "Low", visa: "Long Stay", income: "$1,500/mo" },
  NewZealand: { tax: "High", visa: "Investor/Family", income: "High" },
  Mauritius: { tax: "Low", visa: "Retired Permit", income: "$1,500/mo" }
};

// ---------- APP UI ----------
const app = document.getElementById("app");

app.innerHTML = `
  <div class="phase">
    <h2>Phase 1 – Choose Destination</h2>
    <select id="countrySelect">
      ${Object.keys(countries).map(c => `<option value="${c}">${c}</option>`).join("")}
    </select>
  </div>

  <div class="phase">
    <h2>Phase 2 – Monthly Income (£)</h2>
    <input type="number" id="income" placeholder="e.g. 2500">
  </div>

  <div class="phase">
    <h2>Phase 3 – Property Value (£)</h2>
    <input type="number" id="property" placeholder="e.g. 200000">
  </div>

  <div class="phase">
    <h2>Phase 4 – Health Status</h2>
    <select id="health">
      <option>Excellent</option>
      <option>Good</option>
      <option>Ongoing Conditions</option>
    </select>
  </div>

  <div class="phase">
    <h2>Phase 5 – Age</h2>
    <input type="number" id="age" placeholder="e.g. 60">
  </div>

  <button onclick="generateResult()">Generate My Relocation Plan</button>

  <div id="results"></div>
`;

// ---------- LOGIC ----------
function generateResult() {
  const countryKey = document.getElementById("countrySelect").value;
  const country = countries[countryKey];

  document.getElementById("results").innerHTML = `
    <h2>Your Recommended Destination: ${countryKey}</h2>
    <p><strong>Visa Type:</strong> ${country.visa}</p>
    <p><strong>Income Requirement:</strong> ${country.income}</p>
    <p><strong>Typical Tax Treatment:</strong> ${country.tax}</p>
    <p>This recommendation is based on your inputs and current 2025–2026 data.</p>
  `;
}
