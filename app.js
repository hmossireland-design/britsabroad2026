const app = document.getElementById("app");
let currentPhase = 1;
let answers = {};

const countries = [
  { name: "Portugal", flag: "🇵🇹", tax: "10% pension tax", visa: "D7 Passive Income Visa" },
  { name: "Spain", flag: "🇪🇸", tax: "Progressive up to 47%", visa: "Non-Lucrative Visa" },
  { name: "France", flag: "🇫🇷", tax: "Progressive", visa: "Long Stay Visitor Visa" },
  { name: "Ireland", flag: "🇮🇪", tax: "Progressive", visa: "No visa required" },
  { name: "Cyprus", flag: "🇨🇾", tax: "5–10% pension tax", visa: "Category F / Pink Slip" },
  { name: "Italy", flag: "🇮🇹", tax: "7% flat tax (south)", visa: "Elective Residence" },
  { name: "Greece", flag: "🇬🇷", tax: "7% flat tax option", visa: "Financially Independent Visa" },
  { name: "UAE", flag: "🇦🇪", tax: "0% income tax", visa: "Retirement Visa" },
  { name: "Thailand", flag: "🇹🇭", tax: "Territorial", visa: "Retirement Visa" },
  { name: "Malaysia", flag: "🇲🇾", tax: "Territorial", visa: "MM2H" },
  { name: "Panama", flag: "🇵🇦", tax: "Territorial", visa: "Pensionado" },
  { name: "Mexico", flag: "🇲🇽", tax: "Progressive", visa: "Temporary Resident" },
  { name: "Costa Rica", flag: "🇨🇷", tax: "Territorial", visa: "Pensionado" },
  { name: "Poland", flag: "🇵🇱", tax: "Progressive", visa: "Temporary Residence" },
  { name: "Hungary", flag: "🇭🇺", tax: "15% flat tax", visa: "Residence Permit" },
  { name: "Bulgaria", flag: "🇧🇬", tax: "10% flat tax", visa: "D Visa" },
  { name: "Slovakia", flag: "🇸🇰", tax: "Progressive", visa: "Temporary Residence" },
  { name: "Slovenia", flag: "🇸🇮", tax: "Progressive", visa: "Long-Term Residence" },
  { name: "Latvia", flag: "🇱🇻", tax: "Progressive", visa: "Temporary Residence" },
  { name: "Indonesia", flag: "🇮🇩", tax: "Territorial", visa: "Retirement KITAS" },
  { name: "Colombia", flag: "🇨🇴", tax: "Progressive", visa: "Pension Visa" },
  { name: "Mauritius", flag: "🇲🇺", tax: "15% flat tax", visa: "Retired Non-Citizen Permit" },
  { name: "Ecuador", flag: "🇪🇨", tax: "Territorial", visa: "Pensioner Visa" },
  { name: "Argentina", flag: "🇦🇷", tax: "Worldwide", visa: "Rentista Visa" },
  { name: "USA", flag: "🇺🇸", tax: "Worldwide", visa: "Various (complex)" },
  { name: "Vietnam", flag: "🇻🇳", tax: "Territorial", visa: "Temporary Residence" },
  { name: "New Zealand", flag: "🇳🇿", tax: "Progressive", visa: "Investor / Family" }
];

function renderPhase() {
  app.innerHTML = "";

  const card = document.createElement("div");
  card.className = "phase-card";

  let html = "";

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

  else if (currentPhase === 2) {
    html = `
      <h2>Phase 2: Age</h2>
      <input id="age" type="number" placeholder="Your age">
      <button onclick="next()">Next</button>
    `;
  }

  else if (currentPhase === 3) {
    html = `
      <h2>Phase 3: Monthly Income (£)</h2>
      <input id="income" type="number">
      <button onclick="next()">Next</button>
    `;
  }

  else if (currentPhase === 11) {
    const country = countries.find(c => c.name === answers.country);
    html = `
      <h2>Your Relocation Summary</h2>
      <p><strong>Destination:</strong> ${country.flag} ${country.name}</p>
      <p><strong>Visa Route:</strong> ${country.visa}</p>
      <p><strong>Tax Profile:</strong> ${country.tax}</p>
      <p><strong>Age:</strong> ${answers.age}</p>
      <p><strong>Monthly Income:</strong> £${answers.income}</p>
      <p><em>This is an initial planning summary. Legal advice always recommended.</em></p>
    `;
  }

  else {
    html = `
      <h2>Phase ${currentPhase}</h2>
      <p>Details collected.</p>
      <button onclick="next()">Next</button>
    `;
  }

  card.innerHTML = html;
  app.appendChild(card);
  updateProgress();
}

function next() {
  if (currentPhase === 1) {
    const val = document.getElementById("country").value;
    if (!val) return alert("Select a country");
    answers.country = val;
  }

  if (currentPhase === 2) {
    answers.age = document.getElementById("age").value;
  }

  if (currentPhase === 3) {
    answers.income = document.getElementById("income").value;
  }

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
