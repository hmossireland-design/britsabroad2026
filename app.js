/* ===============================
   COUNTRY DATA (GLOBAL)
================================ */
const countryData = {
  Portugal: { flag: "🇵🇹", visa: "D7 Passive Income Visa", incomeRequired: 870, tax: "10% pension tax", healthcare: "S1 or private" },
  Spain: { flag: "🇪🇸", visa: "Non-Lucrative Visa", incomeRequired: 2400, tax: "Up to 47%", healthcare: "Private required" },
  France: { flag: "🇫🇷", visa: "Long-Stay Visitor", incomeRequired: 1800, tax: "Worldwide income", healthcare: "S1 after residency" },
  Ireland: { flag: "🇮🇪", visa: "No visa (CTA)", incomeRequired: 0, tax: "High income tax", healthcare: "Public/private" },
  Cyprus: { flag: "🇨🇾", visa: "Pink Slip / Cat F", incomeRequired: 1000, tax: "0% foreign pensions", healthcare: "GESY/private" },
  Italy: { flag: "🇮🇹", visa: "Elective Residence", incomeRequired: 2600, tax: "7% south", healthcare: "Public after residency" },
  Greece: { flag: "🇬🇷", visa: "FIP Visa", incomeRequired: 3500, tax: "7% flat", healthcare: "Private initially" },
  UAE: { flag: "🇦🇪", visa: "Retirement Visa", incomeRequired: 4200, tax: "0%", healthcare: "Private mandatory" },
  Thailand: { flag: "🇹🇭", visa: "Retirement Visa", incomeRequired: 1500, tax: "Territorial", healthcare: "Private" },
  Malaysia: { flag: "🇲🇾", visa: "MM2H", incomeRequired: 1500, tax: "Territorial", healthcare: "Private" }
};

/* ===============================
   POPULATE COUNTRY SELECT
================================ */
const countrySelect = document.getElementById("countrySelect");

if (countrySelect) {
  Object.keys(countryData).forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = `${countryData[country].flag} ${country}`;
    countrySelect.appendChild(option);
  });
} else {
  console.error("countrySelect not found in DOM");
}

/* ===============================
   GENERATE SUMMARY
================================ */
function generateSummary() {

  const country = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const output = document.getElementById("output");

  if (!country || !age || !income) {
    output.innerHTML = `<p style="color:red;">Please complete Phase 1–3.</p>`;
    return;
  }

  const data = countryData[country];
  const qualifies = income >= data.incomeRequired;

  output.innerHTML = `
    <div class="summary-card">
      <h3>${data.flag} ${country} Relocation Summary</h3>
      <p><strong>Visa:</strong> ${data.visa}</p>
      <p><strong>Required Income:</strong> £${data.incomeRequired}/month</p>
      <p><strong>Your Income:</strong> £${income}/month</p>
      <p><strong>Status:</strong> ${qualifies ? "✅ Eligible" : "❌ Income shortfall"}</p>
      <p><strong>Tax:</strong> ${data.tax}</p>
      <p><strong>Healthcare:</strong> ${data.healthcare}</p>
    </div>
  `;
}
