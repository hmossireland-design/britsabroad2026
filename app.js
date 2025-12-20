/* ===============================
   DATA: COUNTRIES
================================ */
const countries = [
  { name:"Portugal", flag:"🇵🇹", visa:"D7", tax:10, minIncome:870, lifestyle:["Coastal","City"], risk:"Low", retire:true },
  { name:"Spain", flag:"🇪🇸", visa:"Non-Lucrative", tax:10, minIncome:2400, lifestyle:["Coastal","City"], risk:"Low", retire:true },
  { name:"France", flag:"🇫🇷", visa:"Visitor", tax:20, minIncome:1800, lifestyle:["City","Rural"], risk:"Low", retire:true },
  { name:"Italy", flag:"🇮🇹", visa:"Elective Residence", tax:7, minIncome:2500, lifestyle:["Rural","Coastal"], risk:"Medium", retire:true },
  { name:"Greece", flag:"🇬🇷", visa:"FIP", tax:10, minIncome:3500, lifestyle:["Coastal"], risk:"Medium", retire:true },
  { name:"Cyprus", flag:"🇨🇾", visa:"Category F", tax:10, minIncome:2000, lifestyle:["Coastal"], risk:"Low", retire:true },
  { name:"UAE", flag:"🇦🇪", visa:"Retirement", tax:0, minIncome:4200, lifestyle:["City"], risk:"Low", retire:false },
  { name:"Thailand", flag:"🇹🇭", visa:"Retirement", tax:0, minIncome:1500, lifestyle:["Coastal"], risk:"High", retire:true },
  { name:"Malaysia", flag:"🇲🇾", visa:"MM2H", tax:5, minIncome:1500, lifestyle:["City","Coastal"], risk:"Medium", retire:true },
  { name:"Panama", flag:"🇵🇦", visa:"Pensionado", tax:0, minIncome:1000, lifestyle:["Coastal"], risk:"Medium", retire:true },
  { name:"Mexico", flag:"🇲🇽", visa:"Temporary", tax:10, minIncome:2500, lifestyle:["City","Coastal"], risk:"High", retire:false },
  { name:"Costa Rica", flag:"🇨🇷", visa:"Pensionado", tax:0, minIncome:1000, lifestyle:["Rural","Coastal"], risk:"Medium", retire:true },
  { name:"Bulgaria", flag:"🇧🇬", visa:"D Visa", tax:10, minIncome:1000, lifestyle:["Rural","City"], risk:"Medium", retire:true },
  { name:"Poland", flag:"🇵🇱", visa:"Temporary", tax:10, minIncome:800, lifestyle:["City"], risk:"Medium", retire:false },
  { name:"Hungary", flag:"🇭🇺", visa:"Residence", tax:9, minIncome:900, lifestyle:["City"], risk:"Medium", retire:true }
];

/* ===============================
   PHASE 1 – COUNTRY DROPDOWN
================================ */
const countrySelect = document.getElementById("countrySelect");

countries.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.name;
  opt.textContent = `${c.flag} ${c.name}`;
  countrySelect.appendChild(opt);
});

/* ===============================
   SCORING ENGINE
================================ */
function scoreCountry(country, inputs) {
  let score = 0;
  if (inputs.income >= country.minIncome) score += 2;
  if (country.tax <= 10) score += 2;
  if (country.lifestyle.includes(inputs.lifestyle)) score += 2;
  if (country.risk === inputs.risk) score += 1;
  if (inputs.age >= 50 && country.retire) score += 2;
  return score;
}

/* ===============================
   FINAL SUMMARY (NO BLOCKING)
================================ */
function generateSummary() {
  const age = Number(document.getElementById("age").value || 0);
  const income = Number(document.getElementById("income").value || 0);
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;
  const selectedName = countrySelect.value;

  const output = document.getElementById("output");
  output.innerHTML = "";

  /* CASE 1: COUNTRY SELECTED */
  if (selectedName) {
    const c = countries.find(x => x.name === selectedName);
    output.innerHTML = `
      <h3>${c.flag} ${c.name}</h3>
      <p><strong>Visa Route:</strong> ${c.visa}</p>
      <p><strong>Estimated Tax:</strong> ${c.tax}%</p>
      <p><strong>Minimum Income:</strong> £${c.minIncome}/month</p>
      <p>This destination matches your inputs. Next steps include visa prep, tax residency planning, and healthcare setup.</p>
    `;
    return;
  }

  /* CASE 2: NO COUNTRY → RECOMMEND 3 */
  const inputs = { age, income, lifestyle, risk };

  const ranked = countries
    .map(c => ({ ...c, score: scoreCountry(c, inputs) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  output.innerHTML = `<h3>🌍 Your Top 3 Recommended Countries</h3>`;
  ranked.forEach(c => {
    output.innerHTML += `
      <p>
        <strong>${c.flag} ${c.name}</strong><br>
        Visa: ${c.visa}<br>
        Tax: ${c.tax}%<br>
        Min Income: £${c.minIncome}/month
      </p>
    `;
  });
}
