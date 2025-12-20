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

const countryCardsContainer = document.getElementById("countryCards");
let selectedCountry = null;

// Create country cards
countries.forEach(c => {
  const card = document.createElement("div");
  card.classList.add("countryCard");
  card.innerHTML = `${c.flag}<br>${c.name}`;
  card.onclick = () => {
    selectedCountry = c;
    document.querySelectorAll(".countryCard").forEach(d => d.style.opacity = 0.5);
    card.style.opacity = 1;
    updateProgress();
  };
  countryCardsContainer.appendChild(card);
});

// Update progress bar
function updateProgress() {
  let total = 10; // Phases 2-10
  let filled = 0;
  if(document.getElementById("age").value) filled++;
  if(document.getElementById("income").value) filled++;
  if(document.getElementById("healthcare").value) filled++;
  if(document.getElementById("housing").value) filled++;
  if(document.getElementById("banking").value) filled++;
  if(document.getElementById("transport").value) filled++;
  if(document.getElementById("visa").value) filled++;
  if(document.getElementById("lifestyle").value) filled++;
  if(document.getElementById("risk").value) filled++;
  if(selectedCountry) filled++;
  const percent = (filled / total) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// Generate summary
function generateSummary() {
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visa = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  let outputText = `<h3>Relocation Summary</h3>`;
  if(selectedCountry) {
    outputText += `<p>Primary destination: ${selectedCountry.flag} ${selectedCountry.name} (Visa: ${selectedCountry.visa}, Tax: ${selectedCountry.tax}%)</p>`;
  } else {
    outputText += `<p>No primary destination selected.</p>`;
  }

  outputText += `<p>Age: ${age || "N/A"}, Monthly Income: £${income || "N/A"}</p>`;
  outputText += `<p>Healthcare: ${healthcare || "N/A"}, Housing: ${housing || "N/A"}</p>`;
  outputText += `<p>Banking: ${banking || "N/A"}, Transport: ${transport || "N/A"}</p>`;
  outputText += `<p>Residency Route: ${visa || "N/A"}, Lifestyle: ${lifestyle || "N/A"}, Risk: ${risk || "N/A"}</p>`;

  // Recommend 3 other countries
  const recommendations = countries.filter(c => c !== selectedCountry).slice(0,3).map(c => `${c.flag} ${c.name}`);
  outputText += `<p>Recommended countries: ${recommendations.join(", ")}</p>`;

  document.getElementById("output").innerHTML = outputText;
}
