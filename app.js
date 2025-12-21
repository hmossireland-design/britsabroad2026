/**********************
  COUNTRY DATABASE
***********************/

const countries = [
  { name: "Portugal", flag: "🇵🇹", visa: "D7 Passive Income Visa", tax: "10% pensions", min: 870 },
  { name: "Spain", flag: "🇪🇸", visa: "Non-Lucrative Visa", tax: "15–24%", min: 2400 },
  { name: "Ireland", flag: "🇮🇪", visa: "No visa required", tax: "Progressive", min: 0 },
  { name: "Australia", flag: "🇦🇺", visa: "Family / Skilled", tax: "Progressive", min: 2500 },
  { name: "Cyprus", flag: "🇨🇾", visa: "Pink Slip / Category F", tax: "10%", min: 300 },
  { name: "Malta", flag: "🇲🇹", visa: "Retirement Programme", tax: "Low foreign tax", min: 830 },
  { name: "France", flag: "🇫🇷", visa: "Long-Stay Visitor", tax: "Progressive", min: 1800 },
  { name: "UAE", flag: "🇦🇪", visa: "Retirement Visa", tax: "0%", min: 4200 },
  { name: "Thailand", flag: "🇹🇭", visa: "Retirement / Elite", tax: "5–15%", min: 1500 },
  { name: "Italy", flag: "🇮🇹", visa: "Elective Residence", tax: "7% (south)", min: 2600 },
  { name: "Greece", flag: "🇬🇷", visa: "FIP / Golden Visa", tax: "10%", min: 3500 },
  { name: "Canada", flag: "🇨🇦", visa: "Family / Skilled", tax: "Progressive", min: 2200 },
  { name: "New Zealand", flag: "🇳🇿", visa: "Investment / Family", tax: "Progressive", min: 2500 },
  { name: "Malaysia", flag: "🇲🇾", visa: "MM2H", tax: "Territorial", min: 1200 },
  { name: "Panama", flag: "🇵🇦", visa: "Pensionado", tax: "0% foreign", min: 1000 },
  { name: "Mexico", flag: "🇲🇽", visa: "Temporary Resident", tax: "Progressive", min: 2500 },
  { name: "Costa Rica", flag: "🇨🇷", visa: "Pensionado", tax: "Territorial", min: 1000 },
  { name: "Hungary", flag: "🇭🇺", visa: "Residence Permit", tax: "15%", min: 150 },
  { name: "Poland", flag: "🇵🇱", visa: "Temporary Residence", tax: "12–32%", min: 160 },
  { name: "Slovenia", flag: "🇸🇮", visa: "Long-Term Residence", tax: "Progressive", min: 1000 },
  { name: "Slovakia", flag: "🇸🇰", visa: "Temporary Residence", tax: "19%", min: 800 },
  { name: "Bulgaria", flag: "🇧🇬", visa: "D Visa", tax: "10%", min: 1000 },
  { name: "Indonesia", flag: "🇮🇩", visa: "Retirement KITAS", tax: "Territorial", min: 1500 },
  { name: "Colombia", flag: "🇨🇴", visa: "Pension Visa", tax: "Territorial", min: 900 },
  { name: "Mauritius", flag: "🇲🇺", visa: "Retired Non-Citizen", tax: "15%", min: 1500 },
  { name: "Belize", flag: "🇧🇿", visa: "QRP", tax: "0% foreign", min: 2000 },
  { name: "Ecuador", flag: "🇪🇨", visa: "Pensioner Visa", tax: "Territorial", min: 800 },
  { name: "Uruguay", flag: "🇺🇾", visa: "Residency", tax: "Progressive", min: 1500 },
  { name: "Chile", flag: "🇨🇱", visa: "Retirement Visa", tax: "Progressive", min: 1500 },
  { name: "Latvia", flag: "🇱🇻", visa: "Temporary Residence", tax: "20%", min: 1100 }
];

/**********************
  APP STATE
***********************/

let selectedCountry = null;

/**********************
  INIT
***********************/

const grid = document.getElementById("countryGrid");

countries.forEach(country => {
  const card = document.createElement("div");
  card.className = "country-card";
  card.innerHTML = `
    <span class="flag">${country.flag}</span>
    <span>${country.name}</span>
  `;
  card.onclick = () => selectCountry(country);
  grid.appendChild(card);
});

/**********************
  FUNCTIONS
***********************/

function selectCountry(country) {
  selectedCountry = country;
  document.getElementById("selectedCountry").textContent =
    `Destination locked: ${country.flag} ${country.name}`;
}

function generateSummary() {
  if (!selectedCountry) {
    alert("Please choose a destination country first.");
    return;
  }

  const age = document.getElementById("age").value || "Not provided";
  const income = document.getElementById("income").value || "Not provided";
  const healthcare = document.getElementById("healthcare").value || "Not selected";
  const housing = document.getElementById("housing")?.value || "Not selected";

  document.getElementById("output").innerHTML = `
    <h3>${selectedCountry.flag} ${selectedCountry.name}</h3>
    <p><strong>Visa Route:</strong> ${selectedCountry.visa}</p>
    <p><strong>Tax Reality:</strong> ${selectedCountry.tax}</p>
    <p><strong>Minimum Income Requirement:</strong> £${selectedCountry.min}</p>
    <hr>
    <p><strong>Your Age:</strong> ${age}</p>
    <p><strong>Your Monthly Income:</strong> £${income}</p>
    <p><strong>Healthcare Preference:</strong> ${healthcare}</p>
    <p><strong>Housing Plan:</strong> ${housing}</p>
    <hr>
    <p>Next steps include visa preparation, tax residency planning, and healthcare registration specific to ${selectedCountry.name}.</p>
  `;
}
// =========================
// PROGRESS BAR LOGIC
// =========================
const inputs = document.querySelectorAll(
  "input, select"
);

function updateProgress() {
  let completed = 0;

  inputs.forEach(input => {
    if (input.value && input.value !== "") {
      completed++;
    }
  });

  // Cap at 11 phases
  const phasesCompleted = Math.min(completed, 11);
  const percent = (phasesCompleted / 11) * 100;

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").innerText =
    `Progress: ${phasesCompleted} of 11 completed`;
}

// Listen for changes
inputs.forEach(input => {
  input.addEventListener("change", updateProgress);
});
