const countries = [
  { name: "Portugal", flag: "🇵🇹", tax: "10%", visa: "D7 Visa", min: 870 },
  { name: "Spain", flag: "🇪🇸", tax: "15%", visa: "Non-Lucrative Visa", min: 2400 },
  { name: "France", flag: "🇫🇷", tax: "15%", visa: "Visitor Visa", min: 1800 },
  { name: "Italy", flag: "🇮🇹", tax: "7%", visa: "Elective Residence", min: 31000 },
  { name: "Greece", flag: "🇬🇷", tax: "10%", visa: "FIP Visa", min: 3500 },
  { name: "Cyprus", flag: "🇨🇾", tax: "10%", visa: "Pink Slip", min: 300 },
  { name: "UAE", flag: "🇦🇪", tax: "0%", visa: "Retirement Visa", min: 4200 },
  { name: "Thailand", flag: "🇹🇭", tax: "5%", visa: "Retirement Visa", min: 1500 }
];

let selectedCountry = null;

const grid = document.getElementById("countryGrid");

countries.forEach(c => {
  const card = document.createElement("div");
  card.className = "country-card";
  card.innerHTML = `<span class="flag">${c.flag}</span><span>${c.name}</span>`;
  card.onclick = () => selectCountry(c);
  grid.appendChild(card);
});

function selectCountry(country) {
  selectedCountry = country;
  document.getElementById("selectedCountry").textContent =
    `Destination locked: ${country.flag} ${country.name}`;
}

function generateSummary() {
  if (!selectedCountry) {
    alert("Please choose a country first");
    return;
  }

  const income = document.getElementById("income").value || "N/A";
  const age = document.getElementById("age").value || "N/A";

  document.getElementById("output").innerHTML = `
    <h3>${selectedCountry.flag} ${selectedCountry.name}</h3>
    <p><strong>Visa:</strong> ${selectedCountry.visa}</p>
    <p><strong>Tax:</strong> ${selectedCountry.tax}</p>
    <p><strong>Minimum Income:</strong> £${selectedCountry.min}</p>
    <p><strong>Your Income:</strong> £${income}</p>
    <p><strong>Your Age:</strong> ${age}</p>
  `;
}
