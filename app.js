// ================================
// GLOBAL STATE
// ================================
const userData = {
  country: null,
  income: null,
  housing: null,
  healthcare: null,
  taxConcern: null
};

// ================================
// COUNTRY RULES (EXTENDABLE)
// ================================
const countryRules = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    tax: "10% pension tax (NHR legacy)",
    healthcare: "S1 or private insurance",
    warning: "Rising housing costs in Lisbon/Algarve"
  },
  UAE: {
    visa: "Retirement / Property Visa",
    tax: "0% income tax",
    healthcare: "Private insurance mandatory",
    warning: "No permanent residency path"
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    tax: "Worldwide income taxable",
    healthcare: "Private initially, then public",
    warning: "High income threshold"
  },
  Thailand: {
    visa: "Retirement / Elite Visa",
    tax: "Territorial (changing rules)",
    healthcare: "Private insurance required",
    warning: "Visa policy volatility"
  }
};

// ================================
// PHASE HANDLERS
// ================================
function selectCountry(value) {
  userData.country = value;
  document.getElementById("countryStatus").innerText =
    `Primary destination: ${value}`;
}

function saveIncome(value) {
  userData.income = value;
}

function saveHousing(value) {
  userData.housing = value;
}

function saveHealthcare(value) {
  userData.healthcare = value;
}

function saveTax(value) {
  userData.taxConcern = value;
}

// ================================
// FINAL SUMMARY ENGINE
// ================================
function generateSummary() {
  const output = document.getElementById("finalSummary");

  if (!userData.country) {
    alert("Please select a destination country first.");
    return;
  }

  const rules = countryRules[userData.country];

  if (!rules) {
    output.innerHTML = `
      <h3>⚠️ No Data Available</h3>
      <p>We do not yet have detailed rules for ${userData.country}.</p>
    `;
    return;
  }

  output.innerHTML = `
    <h2>📊 Your Personalised Relocation Plan</h2>

    <p><strong>Destination:</strong> ${userData.country}</p>
    <p><strong>Recommended Visa:</strong> ${rules.visa}</p>
    <p><strong>Tax Position:</strong> ${rules.tax}</p>
    <p><strong>Healthcare Setup:</strong> ${rules.healthcare}</p>

    <hr>

    <h3>⚠️ Key Risk</h3>
    <p>${rules.warning}</p>

    <hr>

    <h3>✅ Readiness Check</h3>
    <ul>
      <li>Income: ${userData.income || "Not specified"}</li>
      <li>Housing plan: ${userData.housing || "Not specified"}</li>
      <li>Healthcare status: ${userData.healthcare || "Not specified"}</li>
      <li>Tax concern: ${userData.taxConcern || "Not specified"}</li>
    </ul>

    <p><strong>Status:</strong> Your plan is viable, but professional tax advice is recommended before relocation.</p>
  `;
}
