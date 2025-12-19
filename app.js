/* ===============================
   COUNTRY DATA (GLOBAL)
================================ */
const countryData = {
  Portugal: {
    flag: "🇵🇹",
    visa: "D7 Passive Income Visa",
    incomeRequired: 870,
    tax: "10% flat tax on pensions (NHR-style)",
    healthcare: "S1 or private insurance initially"
  },
  Spain: {
    flag: "🇪🇸",
    visa: "Non-Lucrative Visa",
    incomeRequired: 2400,
    tax: "Progressive tax up to ~47%",
    healthcare: "Private insurance required"
  },
  France: {
    flag: "🇫🇷",
    visa: "Long-Stay Visitor Visa",
    incomeRequired: 1800,
    tax: "Worldwide income taxable",
    healthcare: "S1 after residency"
  },
  Ireland: {
    flag: "🇮🇪",
    visa: "No visa required (CTA)",
    incomeRequired: 0,
    tax: "High income tax",
    healthcare: "Public + private mix"
  },
  Cyprus: {
    flag: "🇨🇾",
    visa: "Category F / Pink Slip",
    incomeRequired: 1000,
    tax: "0% tax on foreign pensions",
    healthcare: "GESY or private"
  },
  Italy: {
    flag: "🇮🇹",
    visa: "Elective Residence Visa",
    incomeRequired: 2600,
    tax: "7% flat tax (southern regions)",
    healthcare: "Public after residency"
  },
  Greece: {
    flag: "🇬🇷",
    visa: "Financially Independent Person Visa",
    incomeRequired: 3500,
    tax: "7% flat tax option",
    healthcare: "Private initially"
  },
  UAE: {
    flag: "🇦🇪",
    visa: "Retirement Visa",
    incomeRequired: 4200,
    tax: "0% income tax",
    healthcare: "Private mandatory"
  },
  Thailand: {
    flag: "🇹🇭",
    visa: "Retirement Visa (50+)",
    incomeRequired: 1500,
    tax: "Territorial taxation",
    healthcare: "Private insurance required"
  },
  Malaysia: {
    flag: "🇲🇾",
    visa: "MM2H",
    incomeRequired: 1500,
    tax: "Territorial taxation",
    healthcare: "Affordable private care"
  }
};

/* ===============================
   INITIALISE APP
================================ */
document.addEventListener("DOMContentLoaded", () => {

  const countrySelect = document.getElementById("countrySelect");

  // Populate dropdown
  Object.keys(countryData).forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = `${countryData[country].flag} ${country}`;
    countrySelect.appendChild(option);
  });

});

/* ===============================
   PHASE 11 – SUMMARY
================================ */
function generateSummary() {

  const country = document.getElementById("countrySelect").value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const output = document.getElementById("output");

  if (!country || !age || !income) {
    output.innerHTML = `<p style="color:red;">Please complete Phase 1–3 first.</p>`;
    return;
  }

  const data = countryData[country];
  const qualifies = income >= data.incomeRequired;

  output.innerHTML = `
    <div class="summary-card">
      <h3>${data.flag} ${country} – Relocation Summary</h3>

      <p><strong>Visa Route:</strong> ${data.visa}</p>
      <p><strong>Minimum Income Required:</strong> £${data.incomeRequired}/month</p>
      <p><strong>Your Income:</strong> £${income}/month</p>

      <p>
        <strong>Visa Assessment:</strong>
        ${qualifies ? "✅ You meet the visa income requirement." : "❌ You may not meet the visa income requirement."}
      </p>

      <p><strong>Tax Overview:</strong> ${data.tax}</p>
      <p><strong>Healthcare:</strong> ${data.healthcare}</p>

      <p><em>Next steps: visa documentation, tax residency planning, and healthcare setup.</em></p>
    </div>
  `;
}
