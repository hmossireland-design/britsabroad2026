// Countries list with placeholder data
const countries = [
  { name: "Portugal", tax: 10, visa: "D7", flag: "🇵🇹" },
  { name: "Spain", tax: 10, visa: "Non-Lucrative", flag: "🇪🇸" },
  { name: "Ireland", tax: 20, visa: "None", flag: "🇮🇪" },
  { name: "Australia", tax: 25, visa: "Parent/Contributory", flag: "🇦🇺" },
  { name: "Cyprus", tax: 10, visa: "Category F", flag: "🇨🇾" },
  { name: "Malta", tax: 15, visa: "Retirement Programme", flag: "🇲🇹" },
  { name: "France", tax: 20, visa: "Long-Stay Visitor", flag: "🇫🇷" },
  { name: "UAE", tax: 0, visa: "Retirement", flag: "🇦🇪" },
  { name: "Thailand", tax: 0, visa: "Retirement/Elite", flag: "🇹🇭" },
  { name: "Italy", tax: 7, visa: "Elective Residence", flag: "🇮🇹" },
  { name: "Greece", tax: 10, visa: "FIP/Golden Visa", flag: "🇬🇷" },
  { name: "Canada", tax: 25, visa: "Points/Family", flag: "🇨🇦" },
  { name: "New Zealand", tax: 25, visa: "Investment/Family", flag: "🇳🇿" },
  { name: "Malaysia", tax: 5, visa: "MM2H", flag: "🇲🇾" },
  { name: "Panama", tax: 0, visa: "Pensionado", flag: "🇵🇦" },
  { name: "Mexico", tax: 10, visa: "Temporary Resident", flag: "🇲🇽" },
  { name: "Costa Rica", tax: 0, visa: "Pensionado", flag: "🇨🇷" },
  { name: "Hungary", tax: 9, visa: "Residence Permit", flag: "🇭🇺" },
  { name: "Poland", tax: 10, visa: "Temporary Residence", flag: "🇵🇱" },
  { name: "Slovenia", tax: 10, visa: "Long-term Residence", flag: "🇸🇮" },
  { name: "Slovakia", tax: 10, visa: "Temporary Residence", flag: "🇸🇰" },
  { name: "Bulgaria", tax: 10, visa: "D Visa", flag: "🇧🇬" },
  { name: "Indonesia", tax: 5, visa: "Retirement KITAS", flag: "🇮🇩" },
  { name: "Colombia", tax: 5, visa: "Pension Visa", flag: "🇨🇴" },
  { name: "Mauritius", tax: 0, visa: "Retired Non-Citizen", flag: "🇲🇺" },
  { name: "Belize", tax: 0, visa: "QRP", flag: "🇧🇿" },
  { name: "Ecuador", tax: 0, visa: "Pensioner Visa", flag: "🇪🇨" },
  { name: "Uruguay", tax: 10, visa: "Residency", flag: "🇺🇾" },
  { name: "Chile", tax: 10, visa: "Retirement Visa", flag: "🇨🇱" },
  { name: "Latvia", tax: 10, visa: "Temporary Residence", flag: "🇱🇻" }
];

// Populate Phase 1 dropdown
const countrySelect = document.getElementById("countrySelect");
countries.forEach(c => {
  const option = document.createElement("option");
  option.value = c.name;
  option.textContent = `${c.flag} ${c.name}`;
  countrySelect.appendChild(option);
});

// Generate summary based on phases
function generateSummary() {
  const selectedCountry = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visa = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  let primary = selectedCountry ? countries.find(c => c.name === selectedCountry) : null;

  // Recommend 3 countries based on placeholder logic (expand later)
  let recommendations = countries
    .filter(c => c.name !== selectedCountry)
    .slice(0,3)
    .map(c => `${c.flag} ${c.name}`);

  let outputText = `<h3>Relocation Summary</h3>`;
  if(primary) {
    outputText += `<p>Your primary destination: ${primary.flag} ${primary.name} (Visa: ${primary.visa}, Tax: ${primary.tax}%)</p>`;
  } else {
    outputText += `<p>No primary destination selected yet.</p>`;
  }
  outputText += `<p>Age: ${age || "N/A"}, Monthly Income: £${income || "N/A"}</p>`;
  outputText += `<p>Healthcare: ${healthcare || "N/A"}, Housing: ${housing || "N/A"}</p>`;
  outputText += `<p>Banking: ${banking || "N/A"}, Transport: ${transport || "N/A"}</p>`;
  outputText += `<p>Residency Route: ${visa || "N/A"}, Lifestyle: ${lifestyle || "N/A"}, Risk: ${risk || "N/A"}</p>`;
  outputText += `<p>Recommended countries: ${recommendations.join(", ")}</p>`;

  document.getElementById("output").innerHTML = outputText;
}
