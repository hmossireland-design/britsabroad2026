const app = document.getElementById("app");

/* =========================
   COUNTRY DATA (30)
========================= */

const countries = [
  "Portugal",
  "Spain",
  "Ireland",
  "Australia",
  "Cyprus",
  "Malta",
  "France",
  "UAE",
  "Thailand",
  "Italy",
  "Greece",
  "Canada",
  "New Zealand",
  "Malaysia",
  "Panama",
  "Mexico",
  "Costa Rica",
  "Hungary",
  "Poland",
  "Slovenia",
  "Slovakia",
  "Bulgaria",
  "Indonesia",
  "Colombia",
  "Mauritius",
  "Belize",
  "Ecuador",
  "Uruguay",
  "Chile",
  "Latvia"
];

/* =========================
   RENDER APP
========================= */

function renderApp() {
  app.innerHTML = `
    <section class="card">
      <h2>🌍 Phase 1: Choose Your Country</h2>
      <select id="country">
        <option value="">-- Select Country --</option>
        ${countries.map(c => `<option value="${c}">${c}</option>`).join("")}
      </select>
    </section>

    <section class="card">
      <h2>🛂 Phase 2: Passport</h2>
      <select id="passport">
        <option>UK Passport</option>
        <option>EU Passport</option>
        <option>Dual Citizen</option>
      </select>
    </section>

    <section class="card">
      <h2>💰 Phase 3: Monthly Income (£)</h2>
      <input id="income" type="number" placeholder="e.g. 2500">
    </section>

    <section class="card">
      <h2>🏥 Phase 4: Healthcare Preference</h2>
      <select id="health">
        <option>Private Insurance</option>
        <option>State + Private</option>
        <option>State Only</option>
      </select>
    </section>

    <section class="card">
      <h2>🏠 Phase 5: Housing Plan</h2>
      <select id="housing">
        <option>Rent</option>
        <option>Buy</option>
      </select>
    </section>

    <section class="card">
      <h2>💸 Phase 6: Tax Awareness</h2>
      <select id="tax">
        <option>UK Tax Resident</option>
        <option>Foreign Tax Resident</option>
        <option>Not Sure</option>
      </select>
    </section>

    <section class="card">
      <h2>🏦 Phase 7: Banking Setup</h2>
      <select id="banking">
        <option>UK Bank Only</option>
        <option>International Bank</option>
        <option>Local Bank</option>
      </select>
    </section>

    <section class="card">
      <h2>📑 Phase 8: Visa Preparation</h2>
      <select id="visa">
        <option>No Research Yet</option>
        <option>Basic Research</option>
        <option>Already Applied</option>
      </select>
    </section>

    <section class="card">
      <h2>🚗 Phase 9: Transport</h2>
      <select id="transport">
        <option>No Car</option>
        <option>Buy Locally</option>
        <option>Import Vehicle</option>
      </select>
    </section>

    <section class="card">
      <h2>📦 Phase 10: Moving Complexity</h2>
      <select id="moving">
        <option>Minimal</option>
        <option>Moderate</option>
        <option>Complex (pets, shipping)</option>
      </select>
    </section>

    <section class="card final">
      <h2>✅ Phase 11: Your Relocation Summary</h2>
      <button onclick="generateResult()">Generate My Plan</button>
      <div id="result"></div>
    </section>
  `;
}

/* =========================
   RESULT LOGIC
========================= */

function generateResult() {
  const country = document.getElementById("country").value;
  const income = document.getElementById("income").value || "unspecified";

  if (!country) {
    alert("Please select a country first.");
    return;
  }

  document.getElementById("result").innerHTML = `
    <h3>Relocation Plan: ${country}</h3>
    <p><strong>Income:</strong> £${income} per month</p>
    <p>This country is now locked as your primary destination.</p>
    <p>Next steps will include visa rules, tax exposure, and healthcare setup specific to ${country}.</p>
  `;
}

/* =========================
   INIT
========================= */

renderApp();
