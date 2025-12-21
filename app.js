let selectedCountry = "";

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
  };

  grid.appendChild(card);
});

function generateSummary() {
  if (!selectedCountry) {
    alert("Please select a destination country.");
    return;
  }

  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visa = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  document.getElementById("output").innerHTML = `
    <h3>Your Relocation Plan</h3>
    <p><strong>Destination:</strong> ${selectedCountry}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Income:</strong> £${income} / month</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Residency Route:</strong> ${visa}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>
    <p><em>Next steps will include visa rules, tax exposure, and healthcare setup specific to ${selectedCountry}.</em></p>
  `;
}
