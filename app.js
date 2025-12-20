// --- Country Data ---
const countries = [
  { name: "Portugal", flag: "🇵🇹", visa: "D7: €870/mo passive income", tax: "10% pension tax" },
  { name: "Spain", flag: "🇪🇸", visa: "Non-Lucrative: €2,400/mo", tax: "Variable by region" },
  { name: "Ireland", flag: "🇮🇪", visa: "No visa required", tax: "Standard Irish rates" },
  { name: "Australia", flag: "🇦🇺", visa: "Family/Skilled Visa", tax: "Standard Australian rates" },
  { name: "Cyprus", flag: "🇨🇾", visa: "Category F / €300k property", tax: "Low tax on foreign income" },
  { name: "Malta", flag: "🇲🇹", visa: "Retirement Programme: €10k/yr", tax: "Low foreign income tax" },
  { name: "France", flag: "🇫🇷", visa: "Long-Stay Visitor: €1,800/mo", tax: "S1 healthcare available" },
  { name: "UAE", flag: "🇦🇪", visa: "Retirement Visa: £4,200/mo or property", tax: "0% income tax" },
  { name: "Thailand", flag: "🇹🇭", visa: "Retirement/Elite Visa", tax: "Variable" },
  { name: "Italy", flag: "🇮🇹", visa: "Elective Residence: €31k/yr", tax: "7% south Italy flat tax option" },
  { name: "Greece", flag: "🇬🇷", visa: "Financially Independent: €3,500/mo", tax: "Golden Visa possible" },
  { name: "Canada", flag: "🇨🇦", visa: "Points/Family Sponsorship", tax: "Canadian rates" },
  { name: "New Zealand", flag: "🇳🇿", visa: "Investment or Family", tax: "Standard NZ tax" },
  { name: "Malaysia", flag: "🇲🇾", visa: "MM2H: $1,500/mo", tax: "Low foreign income tax" },
  { name: "Panama", flag: "🇵🇦", visa: "Pensionado: $1,000/mo", tax: "No foreign income tax" },
  { name: "Mexico", flag: "🇲🇽", visa: "Temporary Resident: $2,500/mo", tax: "Variable" },
  { name: "Costa Rica", flag: "🇨🇷", visa: "Pensionado: $1,000/mo", tax: "Senior discounts apply" },
  { name: "Hungary", flag: "🇭🇺", visa: "Residence Permit: €1,700/yr proof", tax: "Low-cost EU taxes" },
  { name: "Poland", flag: "🇵🇱", visa: "Temporary Residence: £160/mo", tax: "Low EU taxes" },
  { name: "Slovenia", flag: "🇸🇮", visa: "Long-term Residence: €1,000/mo proof", tax: "Standard EU taxes" },
  { name: "Slovakia", flag: "🇸🇰", visa: "Temporary Residence: €800/mo", tax: "Low EU taxes" },
  { name: "Bulgaria", flag: "🇧🇬", visa: "D Visa: €1,000/mo", tax: "Low EU taxes" },
  { name: "Indonesia", flag: "🇮🇩", visa: "Retirement KITAS: $1,500/mo, 55+", tax: "Low cost living" },
  { name: "Colombia", flag: "🇨🇴", visa: "Pension Visa: $900/mo", tax: "Affordable" },
  { name: "Mauritius", flag: "🇲🇺", visa: "Retired Non-Citizen: $1,500/mo", tax: "Low tax island" },
  { name: "Belize", flag: "🇧🇿", visa: "QRP: $2,000/mo, 45+", tax: "Tax-free pension" },
  { name: "Ecuador", flag: "🇪🇨", visa: "Pensioner Visa: $800/mo", tax: "Very low cost" },
  { name: "Uruguay", flag: "🇺🇾", visa: "Residency: income proof", tax: "Stable Latin America" },
  { name: "Chile", flag: "🇨🇱", visa: "Retirement Visa: pension proof", tax: "South America safe" },
  { name: "Latvia", flag: "🇱🇻", visa: "Temporary Residence: €1,101/mo", tax: "Low Baltic EU rates" }
];

// --- Populate countries in dropdown ---
const countrySelect = document.getElementById("countrySelect");
countries.forEach(country => {
  const option = document.createElement("option");
  option.value = country.name;
  option.text = `${country.flag} ${country.name}`;
  countrySelect.add(option);
});

// --- Track user inputs ---
const userData = {
  country: "",
  age: "",
  income: "",
  healthcare: "",
  housing: "",
  banking: "",
  transport: "",
  visa: "",
  lifestyle: "",
  risk: ""
};

// --- Input listeners ---
countrySelect.addEventListener("change", () => {
  userData.country = countrySelect.value;
  updateProgress();
});

document.getElementById("age").addEventListener("input", e => {
  userData.age = e.target.value;
  updateProgress();
});

document.getElementById("income").addEventListener("input", e => {
  userData.income = e.target.value;
  updateProgress();
});

document.getElementById("healthcare").addEventListener("change", e => {
  userData.healthcare = e.target.value;
  updateProgress();
});

document.getElementById("housing").addEventListener("change", e => {
  userData.housing = e.target.value;
  updateProgress();
});

document.getElementById("banking").addEventListener("change", e => {
  userData.banking = e.target.value;
  updateProgress();
});

document.getElementById("transport").addEventListener("change", e => {
  userData.transport = e.target.value;
  updateProgress();
});

document.getElementById("visa").addEventListener("change", e => {
  userData.visa = e.target.value;
  updateProgress();
});

document.getElementById("lifestyle").addEventListener("change", e => {
  userData.lifestyle = e.target.value;
  updateProgress();
});

document.getElementById("risk").addEventListener("change", e => {
  userData.risk = e.target.value;
  updateProgress();
});

// --- Progress Bar ---
function updateProgress() {
  const totalPhases = 11;
  let completed = 0;
  for (let key in userData) {
    if (userData[key] !== "") completed++;
  }
  const percent = Math.floor((completed / totalPhases) * 100);
  document.getElementById("progressBar").style.width = `${percent}%`;
}

// --- Generate Summary ---
function generateSummary() {
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (!userData.country) {
    output.innerHTML = "<p>Please select your destination country first.</p>";
    return;
  }

  const selectedCountry = countries.find(c => c.name === userData.country);

  const summaryCard = document.createElement("div");
  summaryCard.className = "country-card";

  summaryCard.innerHTML = `
    <h3>${selectedCountry.flag} ${selectedCountry.name}</h3>
    <p><strong>Visa/Residency:</strong> ${selectedCountry.visa}</p>
    <p><strong>Tax Info:</strong> ${selectedCountry.tax}</p>
    <p><strong>Age:</strong> ${userData.age || "N/A"}</p>
    <p><strong>Income:</strong> £${userData.income || "N/A"}</p>
    <p><strong>Healthcare:</strong> ${userData.healthcare || "N/A"}</p>
    <p><strong>Housing:</strong> ${userData.housing || "N/A"}</p>
    <p><strong>Banking:</strong> ${userData.banking || "N/A"}</p>
    <p><strong>Transport:</strong> ${userData.transport || "N/A"}</p>
    <p><strong>Residency Route:</strong> ${userData.visa || "N/A"}</p>
    <p><strong>Lifestyle Preference:</strong> ${userData.lifestyle || "N/A"}</p>
    <p><strong>Risk Tolerance:</strong> ${userData.risk || "N/A"}</p>
  `;

  output.appendChild(summaryCard);
}
