let selectedCountry = null;

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

const countryGrid = document.getElementById("country-grid");

countries.forEach(country => {
  const card = document.createElement("div");
  card.className = "country-card";
  card.innerHTML = `
    <img src="https://flagcdn.com/w40/${country.code}.png">
    <div>${country.name}</div>
  `;

  card.onclick = () => {
    document.querySelectorAll(".country-card").forEach(c => c.classList.remove("selected"));
    card.classList.add("selected");
    selectedCountry = country.name;
    updateProgress();
  };

  countryGrid.appendChild(card);
});

function updateProgress() {
  let completed = 0;
  if (selectedCountry) completed++;
  if (document.getElementById("age").value) completed++;
  if (document.getElementById("income").value) completed++;
  if (document.getElementById("healthcare").value) completed++;
  if (document.getElementById("housing").value) completed++;

  const percent = (completed / 11) * 100;
  document.getElementById("progress-fill").style.width = percent + "%";
  document.getElementById("progress-text").innerText = `Completed ${completed} of 11 phases`;
}

document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("change", updateProgress);
});

function generateSummary() {
  if (!selectedCountry) {
    alert("Please select a destination country.");
    return;
  }

  document.getElementById("output").innerHTML = `
    <p><strong>Destination:</strong> ${selectedCountry}</p>
    <p>This plan will next include visa rules, tax exposure, healthcare access and banking guidance specific to ${selectedCountry}.</p>
  `;
}
