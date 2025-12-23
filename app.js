/* =========================
   BRITS ABROAD 2026 – APP.JS
   ========================= */

console.log("App.js loaded correctly");

/* -------------------------
   COUNTRY DATA (FULL LIST)
-------------------------- */

const countries = [
  { name: "Portugal", flag: "🇵🇹", visa: "D7 Passive Income Visa", tax: "10% pension tax (NHR)" },
  { name: "Spain", flag: "🇪🇸", visa: "Non-Lucrative Visa", tax: "Progressive up to ~47%" },
  { name: "France", flag: "🇫🇷", visa: "Long-Stay Visitor Visa", tax: "Progressive, social charges apply" },
  { name: "Italy", flag: "🇮🇹", visa: "Elective Residence Visa", tax: "7% flat tax (south)" },
  { name: "Greece", flag: "🇬🇷", visa: "Financially Independent Visa", tax: "7% flat tax" },
  { name: "Cyprus", flag: "🇨🇾", visa: "Pink Slip / Category F", tax: "Low tax, non-dom benefits" },
  { name: "Malta", flag: "🇲🇹", visa: "Malta Retirement Programme", tax: "Remittance-based" },
  { name: "Ireland", flag: "🇮🇪", visa: "No visa required (CTA)", tax: "High income tax" },
  { name: "UAE", flag: "🇦🇪", visa: "Retirement / Property Visa", tax: "0% income tax" },
  { name: "Thailand", flag: "🇹🇭", visa: "Retirement Visa (50+)", tax: "Territorial system" },
  { name: "Malaysia", flag: "🇲🇾", visa: "MM2H", tax: "Territorial system" },
  { name: "Mexico", flag: "🇲🇽", visa: "Temporary Resident Visa", tax: "Worldwide if resident" },
  { name: "Panama", flag: "🇵🇦", visa: "Pensionado Visa", tax: "No foreign income tax" },
  { name: "Portugal (Madeira)", flag: "🇵🇹", visa: "D7 (Madeira)", tax: "NHR benefits" }
];

/* -------------------------
   POPULATE COUNTRY DROPDOWN
-------------------------- */

const countrySelect = document.getElementById("countrySelect");

function loadCountries() {
  countrySelect.innerHTML = `<option value="">Select country</option>`;
  countries.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.name;
    opt.textContent = `${c.flag} ${c.name}`;
    countrySelect.appendChild(opt);
  });
}

/* -------------------------
   PROGRESS BAR LOGIC
-------------------------- */

function updateProgress() {
  const fields = document.querySelectorAll(
    "#countrySelect, #age, #income, #healthcare, #housing, #banking, #transport, #visa, #lifestyle, #risk"
  );

  let completed = 0;

  fields.forEach(field => {
    if (field.value && field.value !== "") completed++;
  });

  const progressText = document.getElementById("progressText");
  const progressFill = document.getElementById("progressFill");

  if (progressText && progressFill) {
    progressText.textContent = `${completed} / 10 completed`;
    progressFill.style.width = `${(completed / 10) * 100}%`;
  }
}

/* -------------------------
   SUMMARY GENERATION
-------------------------- */

function generateSummary() {
  const countryName = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visaRoute = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  if (!countryName) {
    alert("Please select a destination country.");
    return;
  }

  const country = countries.find(c => c.name === countryName);

  const output = document.getElementById("output");
  output.innerHTML = `
    <h3>${country.flag} ${country.name} Relocation Summary</h3>
    <p><strong>Visa Route:</strong> ${country.visa}</p>
    <p><strong>Tax System:</strong> ${country.tax}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Monthly Income:</strong> £${income}</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>

    <hr>
    <p><strong>Next Steps:</strong>  
    Prepare visa documents, private health insurance, proof of income, and housing strategy for ${country.name}.</p>
  `;
}

/* -------------------------
   EVENT LISTENERS (IMPORTANT)
-------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  loadCountries();
  updateProgress();

  document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("change", updateProgress);
    el.addEventListener("input", updateProgress); // ✅ FIXES AGE BUG
  });
});
