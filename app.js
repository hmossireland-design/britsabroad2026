const app = document.getElementById("app");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

let currentPhase = 1;

/* ===============================
   USER DATA
================================ */
const data = {
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
   COUNTRY VISA + TAX DATABASE
================================ */
const countryRules = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    income: "€870/month",
    tax: "10% pension tax (NHR – ending)",
    notes: "Huge UK community, rising costs in Algarve."
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    income: "€2,400/month",
    tax: "Progressive up to ~47%",
    notes: "Great healthcare, high income threshold."
  },
  France: {
    visa: "Long-Stay Visitor Visa",
    income: "€1,800/month",
    tax: "Worldwide income taxable",
    notes: "S1 healthcare for UK pensioners."
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    income: "€1,000+/month",
    tax: "0–12.5%",
    notes: "Very UK-friendly, English widely spoken."
  },
  UAE: {
    visa: "Retirement Visa",
    income: "£4,200/month or property",
    tax: "0% income tax",
    notes: "No PR, extreme summer heat."
  },
  Thailand: {
    visa: "Retirement Visa (50+)",
    income: "£1,500/month",
    tax: "Territorial",
    notes: "Affordable, renewals required."
  }
};

const countries = Object.keys(countryRules);

/* ===============================
   RENDER ENGINE
================================ */
function render() {
  updateProgress();

  let html = "";

  switch (currentPhase) {

    case 1:
      html = `
        <div class="phase-card">
          <h2>Phase 1: Destination</h2>
          <select id="country">
            <option value="">Select country</option>
            ${countries.map(c => `<option>${c}</option>`).join("")}
          </select>
          <button onclick="saveAndNext('country')">Continue</button>
        </div>`;
      break;

    case 2:
      html = `
        <div class="phase-card">
          <h2>Phase 2: Age</h2>
          <input id="age" type="number" placeholder="Your age">
          <button onclick="saveAndNext('age')">Continue</button>
        </div>`;
      break;

    case 3:
      html = `
        <div class="phase-card">
          <h2>Phase 3: Monthly Income (£)</h2>
          <input id="income" type="number" placeholder="Monthly income">
          <button onclick="saveAndNext('income')">Continue</button>
        </div>`;
      break;

    case 4:
      html = `
        <div class="phase-card">
          <h2>Phase 4: Healthcare</h2>
          <select id="healthcare">
            <option value="">Select</option>
            <option>Public</option>
            <option>Private</option>
            <option>Mixed</option>
          </select>
          <button onclick="saveAndNext('healthcare')">Continue</button>
        </div>`;
      break;

    case 5:
      html = `
        <div class="phase-card">
          <h2>Phase 5: Housing</h2>
          <select id="housing">
            <option value="">Select</option>
            <option>Rent</option>
            <option>Buy</option>
            <option>Undecided</option>
          </select>
          <button onclick="saveAndNext('housing')">Continue</button>
        </div>`;
      break;

    case 6:
      html = `
        <div class="phase-card">
          <h2>Phase 6: Banking</h2>
          <select id="banking">
            <option value="">Select</option>
            <option>UK bank only</option>
            <option>Wise / Revolut / Online</option>
            <option>Local bank</option>
            <option>Combination</option>
          </select>
          <button onclick="saveAndNext('banking')">Continue</button>
        </div>`;
      break;

    case 7:
      html = `
        <div class="phase-card">
          <h2>Phase 7: Transport</h2>
          <select id="transport">
            <option value="">Select</option>
            <option>No car</option>
            <option>Buy locally</option>
            <option>Import UK vehicle</option>
          </select>
          <button onclick="saveAndNext('transport')">Continue</button>
        </div>`;
      break;

    case 8:
      html = `
        <div class="phase-card">
          <h2>Phase 8: Residency Route</h2>
          <select id="visaRoute">
            <option value="">Select</option>
            <option>Retirement / Passive Income</option>
            <option>Work / Self-Employed</option>
            <option>Investment</option>
          </select>
          <button onclick="saveAndNext('visaRoute')">Continue</button>
        </div>`;
      break;

    case 9:
      html = `
        <div class="phase-card">
          <h2>Phase 9: Lifestyle</h2>
          <select id="lifestyle">
            <option value="">Select</option>
            <option>Quiet / Rural</option>
            <option>City</option>
            <option>Coastal / Island</option>
          </select>
          <button onclick="saveAndNext('lifestyle')">Continue</button>
        </div>`;
      break;

    case 10:
      html = `
        <div class="phase-card">
          <h2>Phase 10: Risk Tolerance</h2>
          <select id="risk">
            <option value="">Select</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button onclick="saveAndNext('risk')">Continue</button>
        </div>`;
      break;

    case 11:
      const rules = countryRules[data.country];
      html = `
        <div class="phase-card">
          <h2>Your Relocation Summary</h2>

          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Visa:</strong> ${rules.visa}</p>
          <p><strong>Income Requirement:</strong> ${rules.income}</p>
          <p><strong>Tax:</strong> ${rules.tax}</p>

          <hr>

          <p><strong>Healthcare:</strong> ${data.healthcare}</p>
          <p><strong>Housing:</strong> ${data.housing}</p>
          <p><strong>Banking:</strong> ${data.banking}</p>
          <p><strong>Transport:</strong> ${data.transport}</p>
          <p><strong>Lifestyle:</strong> ${data.lifestyle}</p>
          <p><strong>Risk Profile:</strong> ${data.risk}</p>

          <hr>

          <p><strong>Insight:</strong> ${rules.notes}</p>
        </div>`;
      break;
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

/* ===============================
   INIT
================================ */
render();
