/*************************************
 BRITS ABROAD 2026 – CORE LOGIC
*************************************/

const countries = [
  { name: "Portugal", flag: "🇵🇹", tax: "10% pension tax (NHR legacy)", visa: "D7 Passive Income", vibe: "Coastal", cost: 1800 },
  { name: "Spain", flag: "🇪🇸", tax: "Worldwide income taxed", visa: "Non-Lucrative", vibe: "Coastal", cost: 1900 },
  { name: "Cyprus", flag: "🇨🇾", tax: "Low pension tax", visa: "Category F / Pink Slip", vibe: "Island", cost: 1700 },
  { name: "UAE", flag: "🇦🇪", tax: "0% income tax", visa: "Retirement / Property", vibe: "City", cost: 2800 },
  { name: "Thailand", flag: "🇹🇭", tax: "Foreign income rules evolving", visa: "Retirement Visa", vibe: "Tropical", cost: 1400 },
  { name: "Malaysia", flag: "🇲🇾", tax: "Territorial tax system", visa: "MM2H", vibe: "Tropical", cost: 1300 },
  { name: "Poland", flag: "🇵🇱", tax: "Progressive EU tax", visa: "Temporary Residence", vibe: "City", cost: 1200 },
  { name: "Hungary", flag: "🇭🇺", tax: "Flat tax system", visa: "Residence Permit", vibe: "City", cost: 1100 },
  { name: "Ecuador", flag: "🇪🇨", tax: "Low pension thresholds", visa: "Pensioner Visa", vibe: "Relaxed", cost: 1000 }
];

const fields = [
  "countrySelect","age","income","healthcare","housing",
  "banking","transport","visa","lifestyle","risk"
];

document.addEventListener("DOMContentLoaded", () => {
  populateCountries();
  attachProgressListeners();
});

/* =========================
   COUNTRY DROPDOWN
========================= */
function populateCountries() {
  const select = document.getElementById("countrySelect");
  select.innerHTML = `<option value="">Select country</option>`;
  countries.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.name;
    opt.textContent = `${c.flag} ${c.name}`;
    select.appendChild(opt);
  });
}

/* =========================
   PROGRESS BAR
========================= */
function attachProgressListeners() {
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", updateProgress);
  });
}

function updateProgress() {
  let filled = 0;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value) filled++;
  });

  const percent = Math.round((filled / fields.length) * 100);
  document.getElementById("progress-fill").style.width = percent + "%";
}

/* =========================
   SUMMARY GENERATOR
========================= */
function generateSummary() {
  const countryName = document.getElementById("countrySelect").value;
  const income = Number(document.getElementById("income").value);
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  if (!countryName) {
    alert("Please select a destination country.");
    return;
  }

  const country = countries.find(c => c.name === countryName);

  const alternatives = countries
    .filter(c => c.name !== country.name && c.cost <= income)
    .slice(0, 3);

  document.getElementById("output").innerHTML = `
    <div class="summary-card">
      <h3>${country.flag} ${country.name}</h3>
      <p><strong>Visa Route:</strong> ${country.visa}</p>
      <p><strong>Tax Position:</strong> ${country.tax}</p>
      <p><strong>Typical Monthly Cost:</strong> £${country.cost}</p>

      <hr>

      <h4>Recommended Alternatives</h4>
      <ul>
        ${alternatives.map(a =>
          `<li>${a.flag} ${a.name} — £${a.cost}/month</li>`
        ).join("")}
      </ul>

      <hr>

      <p class="note">
        This plan is indicative only. Always verify visa, tax and healthcare
        rules with official sources or a professional adviser.
      </p>
    </div>
  `;
}
