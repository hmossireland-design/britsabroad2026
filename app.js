const app = document.getElementById("app");

/* ===============================
   COUNTRY DATA (PHASE 1)
================================ */
const countries = [
  { name: "Portugal", flag: "🇵🇹", tax: "10% pension tax", visa: "D7 Passive Income" },
  { name: "Spain", flag: "🇪🇸", tax: "Progressive tax", visa: "Non-Lucrative Visa" },
  { name: "France", flag: "🇫🇷", tax: "Worldwide income", visa: "Long-Stay Visitor" },
  { name: "Ireland", flag: "🇮🇪", tax: "High income tax", visa: "No visa required" },
  { name: "Cyprus", flag: "🇨🇾", tax: "Low tax, non-dom", visa: "Category F / Pink Slip" },
  { name: "Italy", flag: "🇮🇹", tax: "7% flat tax (south)", visa: "Elective Residence" },
  { name: "Greece", flag: "🇬🇷", tax: "Flat tax options", visa: "Financially Independent" },
  { name: "UAE", flag: "🇦🇪", tax: "0% income tax", visa: "Retirement / Property Visa" },
  { name: "Thailand", flag: "🇹🇭", tax: "Territorial tax", visa: "Retirement Visa" },
  { name: "Malaysia", flag: "🇲🇾", tax: "Territorial tax", visa: "MM2H" },
  { name: "Mexico", flag: "🇲🇽", tax: "Progressive", visa: "Temporary Resident" },
  { name: "Panama", flag: "🇵🇦", tax: "No foreign income tax", visa: "Pensionado" },
  { name: "Costa Rica", flag: "🇨🇷", tax: "Territorial", visa: "Pensionado" },
  { name: "Hungary", flag: "🇭🇺", tax: "15% flat tax", visa: "Residence Permit" },
  { name: "Poland", flag: "🇵🇱", tax: "Low EU costs", visa: "Temporary Residence" },
  { name: "Bulgaria", flag: "🇧🇬", tax: "10% flat tax", visa: "D Visa" },
  { name: "Slovakia", flag: "🇸🇰", tax: "Low cost EU", visa: "Temporary Residence" },
  { name: "Slovenia", flag: "🇸🇮", tax: "EU resident tax", visa: "Long-Term Residence" },
  { name: "Indonesia", flag: "🇮🇩", tax: "Territorial", visa: "Retirement KITAS" },
  { name: "Colombia", flag: "🇨🇴", tax: "Progressive", visa: "Pension Visa" },
  { name: "Ecuador", flag: "🇪🇨", tax: "Low cost", visa: "Pensioner Visa" },
  { name: "Mauritius", flag: "🇲🇺", tax: "15% flat tax", visa: "Retired Non-Citizen" },
  { name: "Argentina", flag: "🇦🇷", tax: "Worldwide", visa: "Rentista" },
  { name: "USA", flag: "🇺🇸", tax: "Worldwide", visa: "Various routes" },
  { name: "Vietnam", flag: "🇻🇳", tax: "Territorial", visa: "Temporary Residence" },
  { name: "New Zealand", flag: "🇳🇿", tax: "Worldwide", visa: "Investor / Family" }
];

/* ===============================
   APP STATE
================================ */
let state = {
  country: "",
  age: "",
  income: "",
  healthcare: "",
  housing: "",
  banking: "",
  transport: "",
  visaRoute: "",
  lifestyle: "",
  risk: ""
};

/* ===============================
   RENDER APP
================================ */
function renderApp() {
  app.innerHTML = `
    <div id="progress-container">
      <div id="progress-text">Step 1 of 11</div>
      <div id="progress-bar">
        <div id="progress-fill"></div>
      </div>
    </div>

    <section class="phase">
      <h2>🌍 Phase 1: Choose Destination</h2>

      <select id="countrySelect">
        <option value="">Select a country</option>
        ${countries.map(c =>
          `<option value="${c.name}">${c.flag} ${c.name}</option>`
        ).join("")}
      </select>

      <div class="nav-buttons">
        <button class="primary" onclick="saveCountry()">Continue</button>
      </div>
    </section>
  `;
}

/* ===============================
   SAVE COUNTRY
================================ */
function saveCountry() {
  const select = document.getElementById("countrySelect");
  if (!select.value) {
    alert("Please select a country");
    return;
  }

  state.country = select.value;
  renderSummary();
}

/* ===============================
   SUMMARY (TEMP)
================================ */
function renderSummary() {
  const c = countries.find(x => x.name === state.country);

  app.innerHTML = `
    <section class="phase">
      <h2>✅ Country Selected</h2>
      <p><strong>${c.flag} ${c.name}</strong></p>
      <p><strong>Visa:</strong> ${c.visa}</p>
      <p><strong>Tax:</strong> ${c.tax}</p>

      <p style="margin-top:20px;">
        ✔ Country selection with flags is now working.
      </p>
    </section>
  `;
}

/* ===============================
   INIT
================================ */
renderApp();
