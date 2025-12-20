// --- COUNTRY DATA ---
const countries = [
  { name: "Portugal", taxRate: 0.10, visaType: "D7 Visa", minIncome: 870 },
  { name: "Spain", taxRate: 0.15, visaType: "Non-Lucrative Visa", minIncome: 2400 },
  { name: "Ireland", taxRate: 0.20, visaType: "No visa required", minIncome: 0 },
  { name: "UAE", taxRate: 0, visaType: "Retirement Visa", minIncome: 4200 },
  { name: "Thailand", taxRate: 0.05, visaType: "Retirement/Elite Visa", minIncome: 1500 },
  { name: "Australia", taxRate: 0.20, visaType: "Parent/Contributory Visa", minIncome: 30000 },
  { name: "Cyprus", taxRate: 0.10, visaType: "Category F/Pink Slip", minIncome: 300 },
  { name: "Malta", taxRate: 0.15, visaType: "Retirement Programme", minIncome: 10000 },
  { name: "France", taxRate: 0.15, visaType: "Long-Stay Visitor", minIncome: 1800 },
  { name: "Italy", taxRate: 0.07, visaType: "Elective Residence", minIncome: 31000 },
  { name: "Greece", taxRate: 0.10, visaType: "Financially Independent (FIP)", minIncome: 3500 },
  { name: "Canada", taxRate: 0.20, visaType: "Family/Points-based", minIncome: 2200 },
  { name: "New Zealand", taxRate: 0.20, visaType: "Investment/Family", minIncome: 2500 },
  { name: "Malaysia", taxRate: 0.05, visaType: "MM2H", minIncome: 1500 },
  { name: "Panama", taxRate: 0, visaType: "Pensionado", minIncome: 1000 },
  { name: "Mexico", taxRate: 0.05, visaType: "Temporary Resident", minIncome: 2500 },
  { name: "Costa Rica", taxRate: 0.05, visaType: "Pensionado", minIncome: 1000 },
  { name: "Hungary", taxRate: 0.10, visaType: "Residence Permit", minIncome: 1700 },
  { name: "Poland", taxRate: 0.10, visaType: "Temporary Residence", minIncome: 160 },
  { name: "Slovenia", taxRate: 0.10, visaType: "Long-term Residence", minIncome: 1000 },
  { name: "Slovakia", taxRate: 0.10, visaType: "Temporary Residence", minIncome: 800 },
  { name: "Bulgaria", taxRate: 0.10, visaType: "D Visa", minIncome: 1000 },
  { name: "Indonesia", taxRate: 0.05, visaType: "Retirement KITAS", minIncome: 1500 },
  { name: "Colombia", taxRate: 0.05, visaType: "Pension Visa", minIncome: 900 },
  { name: "Mauritius", taxRate: 0.05, visaType: "Retired Non-Citizen", minIncome: 1500 },
  { name: "Belize", taxRate: 0, visaType: "QRP", minIncome: 2000 },
  { name: "Ecuador", taxRate: 0.05, visaType: "Pensioner Visa", minIncome: 800 },
  { name: "Uruguay", taxRate: 0.05, visaType: "Residency", minIncome: 1500 },
  { name: "Chile", taxRate: 0.05, visaType: "Retirement Visa", minIncome: 1500 },
  { name: "Latvia", taxRate: 0.10, visaType: "Temporary Residence (Financial)", minIncome: 1101 },
];

// --- POPULATE PHASE 1 DROPDOWN ---
const countrySelect = document.getElementById("countrySelect");
countries.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.name;
  opt.textContent = c.name;
  countrySelect.appendChild(opt);
});

// --- SUMMARY GENERATION ---
function generateSummary() {
  const selectedCountryName = countrySelect.value;
  if (!selectedCountryName) {
    alert("Please select a country first!");
    return;
  }

  const country = countries.find(c => c.name === selectedCountryName);
  const age = document.getElementById("age").value || "N/A";
  const income = document.getElementById("income").value || "N/A";
  const healthcare = document.getElementById("healthcare").value || "N/A";
  const housing = document.getElementById("housing").value || "N/A";

  let summary = `<h3>Relocation Summary for ${country.name}</h3>`;
  summary += `<p><strong>Visa type:</strong> ${country.visaType}</p>`;
  summary += `<p><strong>Tax rate:</strong> ${(country.taxRate*100).toFixed(0)}%</p>`;
  summary += `<p><strong>Minimum income required:</strong> £${country.minIncome}</p>`;
  summary += `<p><strong>Your age:</strong> ${age}</p>`;
  summary += `<p><strong>Your monthly income:</strong> £${income}</p>`;
  summary += `<p><strong>Healthcare preference:</strong> ${healthcare}</p>`;
  summary += `<p><strong>Housing plan:</strong> ${housing}</p>`;

  document.getElementById("output").innerHTML = summary;
}
