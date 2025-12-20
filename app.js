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

let selectedCountry = null;
const container = document.getElementById("countryCards");

/* ---------- COUNTRY SELECTION UI ---------- */
countries.forEach(c => {
  const div = document.createElement("div");
  div.className = "countryCard";
  div.innerHTML = `<div style="font-size:2rem">${c.flag}</div><strong>${c.name}</strong>`;
  div.onclick = () => {
    document.querySelectorAll(".countryCard").forEach(d => d.classList.remove("selected"));
    div.classList.add("selected");
    selectedCountry = c;
    updateProgress();
  };
  container.appendChild(div);
});

/* ---------- PROGRESS BAR ---------- */
function updateProgress() {
  const fields = ["age","income","healthcare","housing","banking","transport","visa","lifestyle","risk"];
  let filled = fields.filter(id => document.getElementById(id).value).length;
  if(selectedCountry) filled++;
  document.getElementById("progressBar").style.width = ((filled/10)*100)+"%";
}

/* ---------- SMART SCORING ENGINE ---------- */
function scoreCountry(country, inputs) {
  let score = 0;

  if(inputs.income >= country.minIncome) score += 2;
  if(country.tax <= 10) score += 2;
  if(country.lifestyle.includes(inputs.lifestyle)) score += 2;
  if(country.risk === inputs.risk) score += 1;
  if(inputs.age >= 50 && country.retire) score += 2;

  return score;
}

/* ---------- FINAL SUMMARY ---------- */
function generateSummary() {
  const age = Number(document.getElementById("age").value);
  const income = Number(document.getElementById("income").value);
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  const inputs = { age, income, lifestyle, risk };
  const output = document.getElementById("output");

  /* If user picked a country */
  if(selectedCountry) {
    output.innerHTML = `
      <h3>${selectedCountry.flag} ${selectedCountry.name}</h3>
      <p><strong>Visa:</strong> ${selectedCountry.visa}</p>
      <p><strong>Tax Exposure:</strong> ${selectedCountry.tax}%</p>
      <p>This destination aligns with your profile.</p>
    `;
    return;
  }

  /* Otherwise recommend top 3 */
  const ranked = countries
    .map(c => ({ ...c, score: scoreCountry(c, inputs) }))
    .sort((a,b) => b.score - a.score)
    .slice(0,3);

  output.innerHTML = `<h3>🌍 Recommended Countries for You</h3>`;
  ranked.forEach(c => {
    output.innerHTML += `
      <p><strong>${c.flag} ${c.name}</strong><br>
      Visa: ${c.visa} | Tax: ${c.tax}%</p>
    `;
  });
}
