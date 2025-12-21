let selectedCountry = "";

const totalPhases = 11;

const countries = [
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "France", flag: "🇫🇷" },
  { name: "Italy", flag: "🇮🇹" },
  { name: "Greece", flag: "🇬🇷" },
  { name: "Cyprus", flag: "🇨🇾" },
  { name: "Serbia", flag: "🇷🇸" },
  { name: "Poland", flag: "🇵🇱" },
  { name: "Czech Republic", flag: "🇨🇿" },
  { name: "Hungary", flag: "🇭🇺" },
  { name: "USA", flag: "🇺🇸" },
  { name: "Argentina", flag: "🇦🇷" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "New Zealand", flag: "🇳🇿" },
  { name: "Mauritius", flag: "🇲🇺" },
  { name: "UAE", flag: "🇦🇪" }
];

const grid = document.getElementById("countryGrid");

countries.forEach(country => {
  const card = document.createElement("div");
  card.className = "country-card";
  card.innerHTML = `<span>${country.flag}</span>${country.name}`;

  card.onclick = () => {
    document.querySelectorAll(".country-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedCountry = country.name;
    document.getElementById("selectedCountry").innerText =
      `Selected destination: ${country.name}`;
    updateProgress();
  };

  grid.appendChild(card);
});

function updateProgress() {
  let completed = 0;

  if (selectedCountry) completed++;
  if (document.getElementById("age").value) completed++;
  if (document.getElementById("income").value) completed++;
  if (document.getElementById("healthcare").value) completed++;
  if (document.getElementById("housing").value) completed++;
  if (document.getElementById("banking").value) completed++;
  if (document.getElementById("transport").value) completed++;
  if (document.getElementById("visa").value) completed++;
  if (document.getElementById("lifestyle").value) completed++;
  if (document.getElementById("risk").value) completed++;

  document.getElementById("progressText").innerText =
    `${completed} / ${totalPhases} completed`;

  document.getElementById("progressFill").style.width =
    `${(completed / totalPhases) * 100}%`;
}

document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("change", updateProgress);
  el.addEventListener("input", updateProgress);
});

function generateSummary() {
  if (!selectedCountry) {
    alert("Please select a destination country.");
    return;
  }

  document.getElementById("output").innerHTML = `
    <h3>Your Relocation Plan</h3>
    <p><strong>Destination:</strong> ${selectedCountry}</p>
    <p><em>Next steps will include visa rules, tax exposure, and healthcare setup specific to ${selectedCountry}.</em></p>
  `;
}
