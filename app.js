let currentPhase = 0;
let selectedCountry = null;

const phases = document.querySelectorAll(".phase");

const countries = [
  { name: "Portugal", code: "pt" },
  { name: "Spain", code: "es" },
  { name: "France", code: "fr" },
  { name: "Italy", code: "it" },
  { name: "Cyprus", code: "cy" },
  { name: "Greece", code: "gr" },
  { name: "UAE", code: "ae" },
  { name: "Thailand", code: "th" },
  { name: "Malaysia", code: "my" }
];

const grid = document.getElementById("country-grid");

countries.forEach(c => {
  const div = document.createElement("div");
  div.className = "country-card";
  div.innerHTML = `<img src="https://flagcdn.com/w40/${c.code}.png"><br>${c.name}`;
  div.onclick = () => {
    document.querySelectorAll(".country-card").forEach(x => x.classList.remove("selected"));
    div.classList.add("selected");
    selectedCountry = c.name;
    updateProgress();
  };
  grid.appendChild(div);
});

function showPhase(n) {
  phases.forEach(p => p.classList.remove("active"));
  phases[n].classList.add("active");
  document.getElementById("progress-text").innerText = `Phase ${n + 1} of 11`;
  document.getElementById("progress-fill").style.width = ((n + 1) / 11 * 100) + "%";
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

function updateProgress() {}

function generateSummary() {
  document.getElementById("output").innerHTML =
    `<p><strong>Destination:</strong> ${selectedCountry}</p>
     <p>Your personalised relocation roadmap will now be built.</p>`;
}

showPhase(0);
