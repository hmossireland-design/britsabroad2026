const app = document.getElementById("app");
let currentPhase = 1;
let answers = {};

const countries = [
  { name: "Portugal", flag: "🇵🇹", tax: "10% pension tax", visa: "D7 Passive Income Visa" },
  { name: "Spain", flag: "🇪🇸", tax: "Progressive up to 47%", visa: "Non-Lucrative Visa" },
  { name: "France", flag: "🇫🇷", tax: "Progressive", visa: "Long Stay Visitor Visa" },
  { name: "Ireland", flag: "🇮🇪", tax: "Progressive", visa: "No visa required" },
  { name: "Cyprus", flag: "🇨🇾", tax: "5–10% pension tax", visa: "Pink Slip / Category F" },
  { name: "Italy", flag: "🇮🇹", tax: "7% flat tax (south)", visa: "Elective Residence" },
  { name: "Greece", flag: "🇬🇷", tax: "7% flat tax option", visa: "Financially Independent Visa" },
  { name: "UAE", flag: "🇦🇪", tax: "0% income tax", visa: "Retirement Visa" },
  { name: "Thailand", flag: "🇹🇭", tax: "Territorial", visa: "Retirement Visa" },
  { name: "Malaysia", flag: "🇲🇾", tax: "Territorial", visa: "MM2H" }
];

function renderPhase() {
  app.innerHTML = "";
  const card = document.createElement("div");
  card.className = "phase-card";

  let html = "";

  /* PHASE 1 */
  if (currentPhase === 1) {
    html = `
      <h2>Phase 1: Choose Destination</h2>
      <select id="country">
        <option value="">Select country</option>
        ${countries.map(c => `<option value="${c.name}">${c.flag} ${c.name}</option>`).join("")}
      </select>
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 2 */
  else if (currentPhase === 2) {
    html = `
      <h2>Phase 2: Age</h2>
      <input id="age" type="number" placeholder="Your age">
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 3 */
  else if (currentPhase === 3) {
    html = `
      <h2>Phase 3: Monthly Income (£)</h2>
      <input id="income" type="number" placeholder="e.g. 2500">
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 4 */
  else if (currentPhase === 4) {
    html = `
      <h2>Phase 4: Healthcare Preference</h2>
      <select id="healthcare">
        <option value="">Select</option>
        <option>Private</option>
        <option>Public</option>
        <option>Mixed</option>
      </select>
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 5 */
  else if (currentPhase === 5) {
    html = `
      <h2>Phase 5: Housing Plan</h2>
      <select id="housing">
        <option value="">Select</option>
        <option>Rent</option>
        <option>Buy</option>
        <option>Undecided</option>
      </select>
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 6 */
  else if (currentPhase === 6) {
    html = `
      <h2>Phase 6: Banking Setup</h2>
      <select id="banking">
        <option value="">Select</option>
        <option>UK bank only</option>
        <option>Local bank account</option>
        <option>Online banks (Wise / Revolut)</option>
        <option>Combination of all</option>
      </select>
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 7 */
  else if (currentPhase === 7) {
    html = `
      <h2>Phase 7: Transport</h2>
      <select id="transport">
        <option value="">Select</option>
        <option>No car</option>
        <option>Buy locally</option>
        <option>Import UK vehicle</option>
      </select>
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 8 */
  else if (currentPhase === 8) {
    html = `
      <h2>Phase 8: Residency Route</h2>
      <select id="visaRoute">
        <option value="">Select</option>
        <option>Retirement / Passive Income</option>
        <option>Work / Self-employed</option>
        <option>Investment</option>
      </select>
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 9 */
  else if (currentPhase === 9) {
    html = `
      <h2>Phase 9: Lifestyle Preference</h2>
      <select id="lifestyle">
        <option value="">Select</option>
        <option>Quiet / Rural</option>
        <option>City</option>
        <option>Coastal / Island</option>
      </select>
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 10 */
  else if (currentPhase === 10) {
    html = `
      <h2>Phase 10: Risk Tolerance</h2>
      <select id="risk">
        <option value="">Select</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button onclick="next()">Next</button>
    `;
  }

  /* PHASE 11 */
  else if (currentPhase === 11) {
    const country = countries.find(c => c.name === answers.country);
    html = `
      <h2>Your Relocation Summary</h2>
      <p><strong>Destination:</strong> ${country.flag} ${country.name}</p>
      <p><strong>Visa Route:</strong> ${country.visa}</p>
      <p><strong>Tax Profile:</strong> ${country.tax}</p>
      <p><strong>Age:</strong> ${answers.age}</p>
      <p><strong>Income:</strong> £${answers.income}</p>
      <p><strong>Healthcare:</strong> ${answers.healthcare}</p>
      <p><strong>Housing:</strong> ${answers.housing}</p>
      <p><strong>Banking:</strong> ${answers.banking}</p>
      <p><strong>Transport:</strong> ${answers.transport}</p>
      <p><strong>Lifestyle:</strong> ${answers.lifestyle}</p>
      <p><strong>Risk Tolerance:</strong> ${answers.risk}</p>
    `;
  }

  card.innerHTML = html;
  app.appendChild(card);
  updateProgress();
}

function next() {
  if (currentPhase === 1) answers.country = document.getElementById("country").value;
  if (currentPhase === 2) answers.age = document.getElementById("age").value;
  if (currentPhase === 3) answers.income = document.getElementById("income").value;
  if (currentPhase === 4) answers.healthcare = document.getElementById("healthcare").value;
  if (currentPhase === 5) answers.housing = document.getElementById("housing").value;
  if (currentPhase === 6) answers.banking = document.getElementById("banking").value;
  if (currentPhase === 7) answers.transport = document.getElementById("transport").value;
  if (currentPhase === 8) answers.visaRoute = document.getElementById("visaRoute").value;
  if (currentPhase === 9) answers.lifestyle = document.getElementById("lifestyle").value;
  if (currentPhase === 10) answers.risk = document.getElementById("risk").value;

  if (currentPhase < 11) {
    currentPhase++;
    renderPhase();
  }
}

function updateProgress() {
  document.getElementById("progress-text").innerText = `Phase ${currentPhase} of 11`;
  document.getElementById("progress-fill").style.width = `${(currentPhase / 11) * 100}%`;
}

renderPhase();
