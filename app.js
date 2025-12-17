const app = document.getElementById("app");

const countries = {
  Portugal: { tax: "Low pension tax (≈10%)", visa: "D7 Passive Income Visa" },
  Spain: { tax: "Worldwide taxation", visa: "Non-Lucrative Visa" },
  France: { tax: "Progressive tax", visa: "Long-Stay Visitor" },
  Cyprus: { tax: "Non-dom benefits", visa: "Pink Slip / Category F" },
  Italy: { tax: "7% flat tax (south)", visa: "Elective Residence" },
  Greece: { tax: "Flat 7% pension tax", visa: "FIP Visa" },
  UAE: { tax: "0% income tax", visa: "Retirement Visa" },
  Thailand: { tax: "Territorial taxation", visa: "Retirement Visa" },
  Malaysia: { tax: "Territorial taxation", visa: "MM2H" },
  Panama: { tax: "No foreign income tax", visa: "Pensionado" },
  Mexico: { tax: "Worldwide taxation", visa: "Temporary Resident" },
  Costa Rica: { tax: "Territorial taxation", visa: "Pensionado" },
  Hungary: { tax: "Low flat tax", visa: "Residence Permit" },
  Poland: { tax: "Low cost EU tax", visa: "Temporary Residence" },
  Bulgaria: { tax: "10% flat tax", visa: "D Visa" },
  Serbia: { tax: "Low flat tax", visa: "Temporary Residence" },
  Argentina: { tax: "Worldwide tax", visa: "Rentista" },
  Vietnam: { tax: "Territorial", visa: "Long Stay Visa" },
  "New Zealand": { tax: "Worldwide tax", visa: "Parent / Investor" },
  Mauritius: { tax: "Low tax regime", visa: "Retired Non-Citizen" },
  Ecuador: { tax: "Territorial tax", visa: "Pensioner Visa" }
};

app.innerHTML = `
  <div class="phase">
    <h2>🌍 Destination</h2>
    <label>Choose your country</label>
    <select id="country">
      ${Object.keys(countries).map(c => `<option>${c}</option>`).join("")}
    </select>
  </div>

  <div class="phase">
    <h2>🛂 Passport</h2>
    <select id="passport">
      <option>UK Passport</option>
      <option>EU Passport</option>
    </select>
  </div>

  <div class="phase">
    <h2>💰 Monthly Income (£)</h2>
    <input type="number" id="income" placeholder="e.g. 2000">
  </div>

  <div class="phase">
    <h2>🏥 Status</h2>
    <select id="status">
      <option>Working</option>
      <option>Retired</option>
    </select>
  </div>

  <div class="phase">
    <h2>🏠 Housing</h2>
    <select id="housing">
      <option>Rent</option>
      <option>Buy</option>
    </select>
  </div>

  <button onclick="calculate()">Generate My Relocation Profile</button>

  <div id="result"></div>
`;

window.calculate = function () {
  const country = document.getElementById("country").value;
  const income = document.getElementById("income").value;
  const status = document.getElementById("status").value;

  const data = countries[country];

  document.getElementById("result").innerHTML = `
    <h2>✅ Your Personal Relocation Summary</h2>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Visa Route:</strong> ${data.visa}</p>
    <p><strong>Tax Reality:</strong> ${data.tax}</p>
    <p><strong>Status:</strong> ${status}</p>
    <p><strong>Income Entered:</strong> £${income || "Not specified"} / month</p>
  `;
};
