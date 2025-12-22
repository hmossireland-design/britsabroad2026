const app = document.getElementById("app");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

let currentPhase = 1;

const data = {
  country: "",
  age: "",
  income: "",
  healthcare: "",
  housing: ""
};

/* ===============================
   COUNTRY VISA + TAX DATABASE
================================ */

const countryRules = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    income: "€870/month minimum",
    tax: "10% pension tax (NHR, ending soon)",
    notes: "Very popular with British retirees. Rising costs in Lisbon/Algarve."
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    income: "€2,400/month",
    tax: "Progressive tax up to ~47%",
    notes: "Excellent healthcare, but higher income requirement."
  },
  France: {
    visa: "Long-Stay Visitor Visa",
    income: "€1,800/month",
    tax: "Worldwide income taxable",
    notes: "S1 healthcare available for UK pensioners."
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    income: "€1,000+/month",
    tax: "0–12.5% low tax bands",
    notes: "English widely spoken, very UK-friendly."
  },
  Italy: {
    visa: "Elective Residence Visa",
    income: "€31,000/year",
    tax: "7% flat tax (southern regions)",
    notes: "Excellent lifestyle but heavy bureaucracy."
  },
  Greece: {
    visa: "Financially Independent Person (FIP)",
    income: "€3,500/month",
    tax: "7% flat tax option",
    notes: "Island lifestyle with Golden Visa alternatives."
  },
  Ireland: {
    visa: "No visa required",
    income: "None",
    tax: "High income tax",
    notes: "CTA access, but expensive living."
  },
  UAE: {
    visa: "Retirement Visa",
    income: "£4,200/month or property",
    tax: "0% income tax",
    notes: "No permanent residency path, extreme summers."
  },
  Thailand: {
    visa: "Retirement Visa (50+)",
    income: "£1,500/month",
    tax: "Territorial tax system",
    notes: "Affordable, renewals required."
  },
  Malaysia: {
    visa: "MM2H",
    income: "$1,500/month",
    tax: "Territorial",
    notes: "English widely spoken, policy changes possible."
  },
  Panama: {
    visa: "Pensionado",
    income: "$1,000/month",
    tax: "No tax on foreign income",
    notes: "Strong expat benefits."
  },
  Mexico: {
    visa: "Temporary Resident",
    income: "$2,500/month",
    tax: "Progressive",
    notes: "Regional safety varies."
  },
  Bulgaria: {
    visa: "D Visa",
    income: "€1,000/month",
    tax: "10% flat tax",
    notes: "Cheapest EU option."
  }
};

/* ===============================
   COUNTRY LIST
================================ */

const countries = Object.keys(countryRules);

/* ===============================
   RENDER LOGIC
================================ */

function render() {
  updateProgress();

  let html = "";

  if (currentPhase === 1) {
    html = `
      <div class="phase-card">
        <h2>Phase 1: Choose Destination</h2>
        <select id="country">
          <option value="">Select country</option>
          ${countries.map(c => `<option>${c}</option>`).join("")}
        </select>
        <button onclick="saveAndNext('country')">Continue</button>
      </div>`;
  }

  if (currentPhase === 2) {
    html = `
      <div class="phase-card">
        <h2>Phase 2: Your Age</h2>
        <input id="age" type="number" placeholder="Your age">
        <button onclick="saveAndNext('age')">Continue</button>
      </div>`;
  }

  if (currentPhase === 3) {
    html = `
      <div class="phase-card">
        <h2>Phase 3: Monthly Income (£)</h2>
        <input id="income" type="number" placeholder="Monthly income">
        <button onclick="saveAndNext('income')">Continue</button>
      </div>`;
  }

  if (currentPhase === 4) {
    html = `
      <div class="phase-card">
        <h2>Phase 4: Healthcare Preference</h2>
        <select id="healthcare">
          <option value="">Select</option>
          <option>Private</option>
          <option>Public</option>
          <option>Mixed</option>
        </select>
        <button onclick="saveAndNext('healthcare')">Continue</button>
      </div>`;
  }

  if (currentPhase === 5) {
    html = `
      <div class="phase-card">
        <h2>Phase 5: Housing Plan</h2>
        <select id="housing">
          <option value="">Select</option>
          <option>Rent</option>
          <option>Buy</option>
          <option>Undecided</option>
        </select>
        <button onclick="saveAndNext('housing')">Continue</button>
      </div>`;
  }

  if (currentPhase === 11) {
    const rules = countryRules[data.country];

    html = `
      <div class="phase-card">
        <h2>Your Relocation Summary</h2>

        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Visa Route:</strong> ${rules.visa}</p>
        <p><strong>Income Requirement:</strong> ${rules.income}</p>
        <p><strong>Tax Position:</strong> ${rules.tax}</p>
        <p><strong>Healthcare:</strong> ${data.healthcare}</p>
        <p><strong>Housing:</strong> ${data.housing}</p>

        <hr>

        <p><strong>Key Insight:</strong> ${rules.notes}</p>

        <p style="margin-top:15px;">
          Next steps will include visa paperwork, tax residency planning,
          and healthcare setup specific to <strong>${data.country}</strong>.
        </p>
      </div>`;
  }

  app.innerHTML = html;
}

/* ===============================
   HELPERS
================================ */

function saveAndNext(field) {
  const el = document.getElementById(field);
  if (!el || !el.value) {
    alert("Please complete this step");
    return;
  }
  data[field] = el.value;
  currentPhase++;
  if (currentPhase > 11) currentPhase = 11;
  render();
}

function updateProgress() {
  progressText.textContent = `Phase ${currentPhase} of 11`;
  progressFill.style.width = `${(currentPhase / 11) * 100}%`;
}

render();
