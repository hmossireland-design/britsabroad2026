const countries = [
  { name: "Portugal", flag: "🇵🇹", tax: "10%", visa: "D7 Visa", minIncome: 870 },
  { name: "Spain", flag: "🇪🇸", tax: "15%", visa: "Non-Lucrative Visa", minIncome: 2400 },
  { name: "France", flag: "🇫🇷", tax: "15%", visa: "Visitor Visa", minIncome: 1800 },
  { name: "Italy", flag: "🇮🇹", tax: "7%", visa: "Elective Residence", minIncome: 31000 },
  { name: "Greece", flag: "🇬🇷", tax: "10%", visa: "FIP Visa", minIncome: 3500 },
  { name: "Cyprus", flag: "🇨🇾", tax: "10%", visa: "Pink Slip", minIncome: 300 },
  { name: "UAE", flag: "🇦🇪", tax: "0%", visa: "Retirement Visa", minIncome: 4200 },
  { name: "Thailand", flag: "🇹🇭", tax: "5%", visa: "Retirement Visa", minIncome: 1500 },
  { name: "Malaysia", flag: "🇲🇾", tax: "5%", visa: "MM2H", minIncome: 1500 },
  { name: "Mexico", flag: "🇲🇽", tax: "5%", visa: "Temporary Resident", minIncome: 2500 },
  { name: "Panama", flag: "🇵🇦", tax: "0%", visa: "Pensionado", minIncome: 1000 },
  { name: "Costa Rica", flag: "🇨🇷", tax: "5%", visa: "Pensionado", minIncome: 1000 },
  { name: "Colombia", flag: "🇨🇴", tax: "5%", visa: "Pension Visa", minIncome: 900 },
  { name: "Ecuador", flag: "🇪🇨", tax: "5%", visa: "Pension Visa", minIncome: 800 },
  { name: "Mauritius", flag: "🇲🇺", tax: "5%", visa: "Retired Permit", minIncome: 1500 }
];

const countrySelect = document.getElementById("countrySelect");

countrySelect.innerHTML = `<option value="">Select country</option>`;
countries.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.name;
  opt.textContent = `${c.flag} ${c.name}`;
  countrySelect.appendChild(opt);
});

function generateSummary() {
  const selected = countries.find(c => c.name === countrySelect.value);
  if (!selected) {
    alert("Please select a country");
    return;
  }

  const income = document.getElementById("income").value || "N/A";
  const age = document.getElementById("age").value || "N/A";

  document.getElementById("output").innerHTML = `
    <h3>${selected.flag} ${selected.name}</h3>
    <p><strong>Visa:</strong> ${selected.visa}</p>
    <p><strong>Tax rate:</strong> ${selected.tax}</p>
    <p><strong>Minimum income:</strong> £${selected.minIncome}</p>
    <p><strong>Your income:</strong> £${income}</p>
    <p><strong>Your age:</strong> ${age}</p>
    <p class="note">Next steps include tax optimisation, healthcare setup, and residency paperwork.</p>
  `;
}
