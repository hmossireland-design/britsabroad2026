// List of countries
const countries = [
  "Portugal", "Spain", "Ireland", "Australia", "Cyprus", "Malta", "France", 
  "UAE", "Thailand", "Italy", "Greece", "Canada", "New Zealand", "Malaysia", 
  "Panama", "Mexico", "Costa Rica", "Hungary", "Poland", "Slovenia", "Slovakia", 
  "Bulgaria", "Indonesia", "Colombia", "Mauritius", "Belize", "Ecuador", "Uruguay", 
  "Chile", "Latvia"
];

// Inject countries into dropdown
const countrySelect = document.getElementById("countrySelect");
countries.forEach(c => {
  const option = document.createElement("option");
  option.value = c;
  option.textContent = c;
  countrySelect.appendChild(option);
});

// Track answered phases
const totalPhases = 11;
let completedPhases = new Set();

function updateProgress(phaseNum) {
  completedPhases.add(phaseNum);
  const progress = Math.round((completedPhases.size / totalPhases) * 100);
  document.getElementById("progressBar").style.width = progress + "%";
  document.getElementById("progressText").textContent = `${completedPhases.size}/${totalPhases} completed`;
}

// Add event listeners for all inputs/selects
document.querySelectorAll("#app input, #app select").forEach(el => {
  el.addEventListener("change", () => {
    const phaseNum = parseInt(el.dataset.phase);
    if (!isNaN(phaseNum)) updateProgress(phaseNum);
  });
});

// Summary generator
function generateSummary() {
  const country = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visa = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  const output = `
    <h3>Relocation Summary</h3>
    <p>Destination: <strong>${country}</strong></p>
    <p>Age: ${age}</p>
    <p>Monthly Income: £${income}</p>
    <p>Healthcare: ${healthcare}</p>
    <p>Housing Plan: ${housing}</p>
    <p>Banking: ${banking}</p>
    <p>Transport: ${transport}</p>
    <p>Residency Route: ${visa}</p>
    <p>Lifestyle: ${lifestyle}</p>
    <p>Risk Tolerance: ${risk}</p>
    <p>Next steps will include visa rules, tax exposure, and healthcare setup specific to ${country}.</p>
  `;

  document.getElementById("output").innerHTML = output;
}
