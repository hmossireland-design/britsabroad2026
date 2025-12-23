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
  { name: "Italy", flag: "🇮🇹" }
];

function populateCountries() {
  const select = document.getElementById("countrySelect");
  countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c.name;
    option.textContent = `${c.flag} ${c.name}`;
    select.appendChild(option);
  });
}

// Track completed phases
const phases = document.querySelectorAll(".phase select, .phase input");
phases.forEach(el => {
  el.addEventListener("change", updateProgress);
});

function updateProgress() {
  let completed = 0;
  phases.forEach(el => {
    if (el.value) completed++;
  });
  const percent = (completed / phases.length) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("progress-text").textContent = `${completed} / ${phases.length} completed`;
}

function generateSummary() {
  const country = document.getElementById("countrySelect").value;
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
    <p>Banking: ${banking}</p>
    <p>Transport: ${transport}</p>
    <p>Residency Route: ${visa}</p>
    <p>Lifestyle Preference: ${lifestyle}</p>
    <p>Risk Tolerance: ${risk}</p>
  `;
  document.getElementById("output").innerHTML = output;
}

// Initialize countries on page load
populateCountries();
updateProgress();
