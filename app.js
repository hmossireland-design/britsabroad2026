/* ===============================
   BRITS ABROAD 2026 – CORE LOGIC
   =============================== */

/* -------- COUNTRY DATA -------- */

const countryData = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    minIncome: 870,
    tax: "10% pension tax (NHR regime)",
    healthcare: "Private initially, then public (SNS)",
    notes: "Very popular with UK retirees. Rising rents in Lisbon/Algarve."
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    minIncome: 2400,
    tax: "Progressive up to ~24%",
    healthcare: "Private insurance mandatory",
    notes: "No work allowed. Excellent healthcare."
  },
  Ireland: {
    visa: "No visa required (CTA)",
    minIncome: 0,
    tax: "Worldwide income taxable",
    healthcare: "Public + private",
    notes: "High cost of living."
  },
  France: {
    visa: "Long-Stay Visitor",
    minIncome: 1800,
    tax: "Progressive (~20–30%)",
    healthcare: "S1 for UK pensioners",
    notes: "Paperwork heavy, excellent care."
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    minIncome: 1000,
    tax: "Low tax on pensions",
    healthcare: "GESY + private",
    notes: "English widely spoken."
  },
  UAE: {
    visa: "Retirement Visa",
    minIncome: 4200,
    tax: "0% income tax",
    healthcare: "Private only",
    notes: "No permanent residency route."
  },
  Thailand: {
    visa: "Retirement Visa (50+)",
    minIncome: 1500,
    tax: "Territorial system",
    healthcare: "Private required",
    notes: "Annual renewals required."
  },
  Italy: {
    visa: "Elective Residence",
    minIncome: 2600,
    tax: "7% flat tax (south)",
    healthcare: "Public + private",
    notes: "Regional differences huge."
  },
  Greece: {
    visa: "Financially Independent Person",
    minIncome: 3500,
    tax: "Flat 7% for retirees",
    healthcare: "Private initially",
    notes: "Golden Visa alternative."
  },
  Malta: {
    visa: "Retirement Programme",
    minIncome: 833,
    tax: "Foreign income only",
    healthcare: "Private",
    notes: "Small island, busy."
  }
};

/* -------- POPULATE COUNTRY LIST -------- */

const countrySelect = document.getElementById("countrySelect");

Object.keys(countryData).forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

/* -------- SUMMARY ENGINE -------- */

function generateSummary() {
  const country = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const risk = document.getElementById("risk").value;

  const output = document.getElementById("output");

  if (!country || !age || !income) {
    output.innerHTML = `<p style="color:red;">Please complete at least country, age, and income.</p>`;
    return;
  }

  const data = countryData[country];

  let incomeStatus =
    income >= data.minIncome
      ? "✅ You meet the income requirement."
      : "❌ You do NOT meet the income requirement.";

  output.innerHTML = `
    <div style="border:1px solid #ccc; padding:15px; margin-top:15px;">
      <h3>Your Personal Relocation Plan</h3>

      <p><strong>Destination:</strong> ${country}</p>
      <p><strong>Recommended Visa:</strong> ${data.visa}</p>
      <p><strong>Income Requirement:</strong> £${data.minIncome}/month</p>
      <p>${incomeStatus}</p>

      <p><strong>Tax Exposure:</strong> ${data.tax}</p>
      <p><strong>Healthcare:</strong> ${data.healthcare}</p>
      <p><strong>Housing Plan:</strong> ${housing}</p>
      <p><strong>Risk Profile:</strong> ${risk}</p>

      <p><strong>Notes:</strong> ${data.notes}</p>

      <p style="margin-top:10px;"><em>Next steps: visa application, tax planning, healthcare setup.</em></p>
    </div>
  `;
}
