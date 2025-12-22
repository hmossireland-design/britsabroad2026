let currentPhase = 0;
let selectedCountry = null;

const phases = document.querySelectorAll(".phase");

/* ======================
   COUNTRY DATABASE (30)
   ====================== */
const countries = [
  { name: "Portugal", code: "pt" },
  { name: "Spain", code: "es" },
  { name: "Ireland", code: "ie" },
  { name: "Australia", code: "au" },
  { name: "Cyprus", code: "cy" },
  { name: "Malta", code: "mt" },
  { name: "France", code: "fr" },
  { name: "UAE", code: "ae" },
  { name: "Thailand", code: "th" },
  { name: "Italy", code: "it" },
  { name: "Greece", code: "gr" },
  { name: "Canada", code: "ca" },
  { name: "New Zealand", code: "nz" },
  { name: "Malaysia", code: "my" },
  { name: "Panama", code: "pa" },
  { name: "Mexico", code: "mx" },
  { name: "Costa Rica", code: "cr" },
  { name: "Hungary", code: "hu" },
  { name: "Poland", code: "pl" },
  { name: "Slovenia", code: "si" },
  { name: "Slovakia", code: "sk" },
  { name: "Bulgaria", code: "bg" },
  { name: "Indonesia", code: "id" },
  { name: "Colombia", code: "co" },
  { name: "Mauritius", code: "mu" },
  { name: "Belize", code: "bz" },
  { name: "Ecuador", code: "ec" },
  { name: "Uruguay", code: "uy" },
  { name: "Chile", code: "cl" },
  { name: "Latvia", code: "lv" }
];

/* ======================
   RENDER COUNTRY FLAGS
   ====================== */
const grid = document.getElementById("country-grid");
grid.innerHTML = "";

countries.forEach(country => {
  const card = document.createElement("div");
  card.className = "country-card";
  card.innerHTML = `
    <img src="https://flagcdn.com/w40/${country.code}.png" alt="${country.name}">
    <div>${country.name}</div>
  `;

  card.onclick = () => {
    document.querySelectorAll(".country-card").forEach(c =>
      c.classList.remove("selected")
    );
    card.classList.add("selected");
    selectedCountry = country.name;
    updateProgress();
  };

  grid.appendChild(card);
});

/* ======================
   PHASE NAVIGATION
   ====================== */
function showPhase(index) {
  phases.forEach(p => p.classList.remove("active"));
  phases[index].classList.add("active");

  document.getElementById("progress-text").innerText =
    `Phase ${index + 1} of 11`;

  document.getElementById("progress-fill").style.width =
    ((index + 1) / 11) * 100 + "%";
}

function nextPhase() {
  if (currentPhase < phases.length - 1) {
    currentPhase++;
    showPhase(currentPhase);
  }
}

function prevPhase() {
  if (currentPhase > 0) {
    currentPhase--;
    showPhase(currentPhase);
  }
}

/* ======================
   PROGRESS TRACKING
   ====================== */
function updateProgress() {
  // placeholder – expanded later
}

/* ======================
   SUMMARY GENERATION
   ====================== */
function generateSummary() {
  if (!selectedCountry) {
    alert("Please select a destination country.");
    return;
  }

  const age = document.getElementById("age").value || "Not specified";
  const income = document.getElementById("income").value || "Not specified";
  const healthcare = document.getElementById("healthcare").value || "Not specified";
  const housing = document.getElementById("housing").value || "Not specified";
  const banking = document.getElementById("banking").value || "Not specified";
  const transport = document.getElementById("transport").value || "Not specified";
  const visa = document.getElementById("visa").value || "Not specified";
  const lifestyle = document.getElementById("lifestyle").value || "Not specified";
  const risk = document.getElementById("risk").value || "Not specified";

  document.getElementById("output").innerHTML = `
    <h3>Your Relocation Summary</h3>
    <p><strong>Destination:</strong> ${selectedCountry}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Monthly Income:</strong> £${income}</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Residency Route:</strong> ${visa}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>
    <p><em>Next step: country-specific visa, tax & healthcare guidance.</em></p>
  `;
}

/* ======================
   INIT
   ====================== */
showPhase(0);
