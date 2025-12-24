// ===============================
// BRITS ABROAD 2026 – APP LOGIC
// ===============================

// ---- COUNTRY DATA (20+) ----
const countries = [
  { code: "PT", name: "Portugal", visa: "D7 Passive Income", tax: "10% pension tax (NHR)" },
  { code: "ES", name: "Spain", visa: "Non-Lucrative Visa", tax: "Worldwide income taxed" },
  { code: "CY", name: "Cyprus", visa: "Category F / Pink Slip", tax: "Low tax, non-dom regime" },
  { code: "FR", name: "France", visa: "Long-Stay Visitor", tax: "Progressive tax bands" },
  { code: "IT", name: "Italy", visa: "Elective Residence", tax: "7% flat tax (south)" },
  { code: "GR", name: "Greece", visa: "Financially Independent", tax: "7% flat tax option" },
  { code: "AE", name: "UAE", visa: "Retirement Visa", tax: "0% income tax" },
  { code: "TH", name: "Thailand", visa: "Retirement Visa", tax: "Territorial taxation" },
  { code: "MY", name: "Malaysia", visa: "MM2H", tax: "Territorial taxation" },
  { code: "PA", name: "Panama", visa: "Pensionado", tax: "No tax on foreign income" },
  { code: "MX", name: "Mexico", visa: "Temporary Resident", tax: "Progressive tax" },
  { code: "CR", name: "Costa Rica", visa: "Pensionado", tax: "Territorial taxation" },
  { code: "HU", name: "Hungary", visa: "Residence Permit", tax: "15% flat tax" },
  { code: "PL", name: "Poland", visa: "Temporary Residence", tax: "Progressive tax" },
  { code: "BG", name: "Bulgaria", visa: "D Visa", tax: "10% flat tax" },
  { code: "ID", name: "Indonesia", visa: "Retirement KITAS", tax: "Territorial taxation" },
  { code: "CO", name: "Colombia", visa: "Pension Visa", tax: "Progressive tax" },
  { code: "EC", name: "Ecuador", visa: "Pensioner Visa", tax: "Territorial taxation" },
  { code: "MU", name: "Mauritius", visa: "Retired Non-Citizen", tax: "Low flat tax" },
  { code: "NZ", name: "New Zealand", visa: "Investment / Family", tax: "Worldwide income taxed" }
];

// ---- POPULATE COUNTRY DROPDOWN ----
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("countrySelect");

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.name;
    option.textContent = country.name;
    select.appendChild(option);
  });
});

// ---- SUMMARY GENERATOR (GLOBAL) ----
function generateSummary() {
  const countryName = document.getElementById("countrySelect").value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visaRoute = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  const output = document.getElementById("output");

  if (!countryName) {
    output.innerHTML = "<p style='color:red;'>Please select a destination country.</p>";
    return;
  }

  const country = countries.find(c => c.name === countryName);

  output.innerHTML = `
    <h3>Your Relocation Summary</h3>

    <p><strong>Destination:</strong> ${country.name}</p>
    <p><strong>Recommended Visa:</strong> ${country.visa}</p>
    <p><strong>Tax Insight:</strong> ${country.tax}</p>

    <hr>

    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Monthly Income:</strong> £${income}</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing Plan:</strong> ${housing}</p>
    <p><strong>Banking Setup:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Residency Route:</strong> ${visaRoute}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>

    <hr>

    <p>
      Next steps will include detailed visa steps, healthcare registration,
      tax residency planning, and a relocation timeline for ${country.name}.
    </p>
  `;
}
