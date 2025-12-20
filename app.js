/* ============================
   COUNTRY DATA (STABLE)
============================ */
const countries = [
  { name: "Portugal", flag: "🇵🇹", visa: "D7 Passive Income", tax: "10%", income: "€870/mo" },
  { name: "Spain", flag: "🇪🇸", visa: "Non-Lucrative", tax: "10–24%", income: "€2,400/mo" },
  { name: "France", flag: "🇫🇷", visa: "Long-Stay Visitor", tax: "20%", income: "€1,800/mo" },
  { name: "Italy", flag: "🇮🇹", visa: "Elective Residence", tax: "7% (South)", income: "€2,500/mo" },
  { name: "Cyprus", flag: "🇨🇾", visa: "Category F / Pink Slip", tax: "10%", income: "€2,000/mo" },
  { name: "UAE", flag: "🇦🇪", visa: "Retirement Visa", tax: "0%", income: "£4,200/mo" },
  { name: "Thailand", flag: "🇹🇭", visa: "Retirement", tax: "0%", income: "£1,500/mo" }
];

/* ============================
   POPULATE DROPDOWN
============================ */
const countrySelect = document.getElementById("countrySelect");

countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country.name;
  option.textContent = `${country.flag} ${country.name}`;
  countrySelect.appendChild(option);
});

/* ============================
   GENERATE SUMMARY
============================ */
function generateSummary() {
  const selected = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const output = document.getElementById("output");

  if (!selected) {
    alert("Please select a country first");
    return;
  }

  const country = countries.find(c => c.name === selected);

  output.innerHTML = `
    <h3>${country.flag} ${country.name}</h3>
    <p><strong>Visa Route:</strong> ${country.visa}</p>
    <p><strong>Estimated Tax:</strong> ${country.tax}</p>
    <p><strong>Minimum Income:</strong> ${country.income}</p>
    <hr>
    <p><strong>Your Profile:</strong></p>
    <p>Age: ${age || "Not specified"}</p>
    <p>Income: £${income || "Not specified"}/month</p>
    <p>Healthcare: ${healthcare || "Not specified"}</p>
    <p>Housing Plan: ${housing || "Not specified"}</p>
    <p><em>This is your base relocation profile. Further planning will refine tax, visa timelines, and healthcare setup.</em></p>
  `;
}
