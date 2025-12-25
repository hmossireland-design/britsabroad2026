// Countries list
const countries = [
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Cyprus", flag: "🇨🇾" },
  { name: "Malta", flag: "🇲🇹" },
  { name: "France", flag: "🇫🇷" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Panama", flag: "🇵🇦" },
  { name: "Mexico", flag: "🇲🇽" },
  { name: "Costa Rica", flag: "🇨🇷" },
  { name: "Hungary", flag: "🇭🇺" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Slovakia", flag: "🇸🇰" }
];

// Populate country dropdown
const countrySelect = document.getElementById("countrySelect");
countries.forEach(c => {
  const option = document.createElement("option");
  option.value = c.name;
  option.textContent = `${c.flag} ${c.name}`;
  countrySelect.appendChild(option);
});

// Track progress
const totalPhases = 11;

function updateProgress() {
  let completed = 0;
  for (let i = 1; i <= totalPhases; i++) {
    const el = document.querySelector(`#phase-${i}`) || document.querySelector(`#phase-country`);
    if (el && el.querySelector("input, select")?.value) {
      el.classList.add("completed");
      completed++;
    }
  }
  const percent = (completed / totalPhases) * 100;
  document.getElementById("progress-bar").style.width = `${percent}%`;
  document.getElementById("progress-text").textContent = `${completed} / ${totalPhases} completed`;
}

// Add event listeners to update progress
document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("change", updateProgress);
});

// Generate relocation summary
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
    <h3>Relocation Summary for ${country}</h3>
    <p>Age: ${age}</p>
    <p>Monthly Income: £${income}</p>
    <p>Healthcare Preference: ${healthcare}</p>
    <p>Housing Plan: ${housing}</p>
    <p>Banking Setup: ${banking}</p>
    <p>Transport: ${transport}</p>
    <p>Residency Route: ${visa}</p>
    <p>Lifestyle Preference: ${lifestyle}</p>
    <p>Risk Tolerance: ${risk}</p>
  `;

  document.getElementById("output").innerHTML = output;
}
