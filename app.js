// Country list with flag emojis
const countries = [
  {name: "Portugal", flag: "🇵🇹"},
  {name: "Spain", flag: "🇪🇸"},
  {name: "Ireland", flag: "🇮🇪"},
  {name: "Australia", flag: "🇦🇺"},
  {name: "Cyprus", flag: "🇨🇾"},
  {name: "Malta", flag: "🇲🇹"},
  {name: "France", flag: "🇫🇷"},
  {name: "UAE", flag: "🇦🇪"},
  {name: "Thailand", flag: "🇹🇭"},
  {name: "Italy", flag: "🇮🇹"},
  {name: "Greece", flag: "🇬🇷"},
  {name: "Canada", flag: "🇨🇦"},
  {name: "New Zealand", flag: "🇳🇿"},
  {name: "Malaysia", flag: "🇲🇾"},
  {name: "Panama", flag: "🇵🇦"},
  {name: "Mexico", flag: "🇲🇽"},
  {name: "Costa Rica", flag: "🇨🇷"},
  {name: "Hungary", flag: "🇭🇺"},
  {name: "Poland", flag: "🇵🇱"},
  {name: "Slovenia", flag: "🇸🇮"},
  {name: "Slovakia", flag: "🇸🇰"},
  {name: "Bulgaria", flag: "🇧🇬"},
  {name: "Indonesia", flag: "🇮🇩"},
  {name: "Colombia", flag: "🇨🇴"},
  {name: "Mauritius", flag: "🇲🇺"},
  {name: "Belize", flag: "🇧🇿"},
  {name: "Ecuador", flag: "🇪🇨"},
  {name: "Uruguay", flag: "🇺🇾"},
  {name: "Chile", flag: "🇨🇱"},
  {name: "Latvia", flag: "🇱🇻"}
];

// Populate country select
const countrySelect = document.getElementById("countrySelect");
countries.forEach(c => {
  const option = document.createElement("option");
  option.value = c.name;
  option.textContent = `${c.flag} ${c.name}`;
  countrySelect.appendChild(option);
});

// Track completed phases
const totalPhases = 11;
let completedPhases = new Set();

function updateProgress(phaseNum) {
  completedPhases.add(phaseNum);
  const progress = Math.round((completedPhases.size / totalPhases) * 100);
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressText").textContent = `${completedPhases.size}/${totalPhases} completed`;
}

// Add change listeners
document.querySelectorAll("#app input, #app select").forEach(el => {
  el.addEventListener("change", () => {
    const phaseNum = parseInt(el.dataset.phase);
    if (!isNaN(phaseNum)) updateProgress(phaseNum);
  });
});

// Summary generator
function generateSummary() {
  const getValue = id => document.getElementById(id).value || "Not selected";

  const output = `
    <h3>Relocation Summary</h3>
    <p>Destination: <strong>${getValue("countrySelect")}</strong></p>
    <p>Age: ${getValue("age")}</p>
    <p>Monthly Income: £${getValue("income")}</p>
    <p>Healthcare: ${getValue("healthcare")}</p>
    <p>Housing Plan: ${getValue("housing")}</p>
    <p>Banking: ${getValue("banking")}</p>
    <p>Transport: ${getValue("transport")}</p>
    <p>Residency Route: ${getValue("visa")}</p>
    <p>Lifestyle: ${getValue("lifestyle")}</p>
    <p>Risk Tolerance: ${getValue("risk")}</p>
    <p>Next steps will include visa rules, tax exposure, and healthcare setup specific to ${getValue("countrySelect")}.</p>
  `;

  document.getElementById("output").innerHTML = output;
}
