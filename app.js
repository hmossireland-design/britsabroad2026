const countries = [
  { name: "Portugal", flag: "🇵🇹", visa: "D7 (Passive Income)", minIncome: "€870/mo", pensionTax: "10%" },
  { name: "Spain", flag: "🇪🇸", visa: "Non-Lucrative Visa", minIncome: "€2,400/mo", pensionTax: "10%" },
  { name: "Ireland", flag: "🇮🇪", visa: "No visa required", minIncome: "N/A", pensionTax: "Standard" },
  { name: "Australia", flag: "🇦🇺", visa: "Parent/Family Visa", minIncome: "High Contribution (~£30k+)", pensionTax: "Standard" },
  { name: "Cyprus", flag: "🇨🇾", visa: "Category F / PR", minIncome: "€300k property or proof", pensionTax: "Low" },
  { name: "Malta", flag: "🇲🇹", visa: "Retirement Programme", minIncome: "€10k/yr", pensionTax: "Low" },
  { name: "France", flag: "🇫🇷", visa: "Long-Stay Visitor", minIncome: "€1,800/mo", pensionTax: "Standard" },
  { name: "UAE", flag: "🇦🇪", visa: "Retirement Visa", minIncome: "£4,200/mo or property", pensionTax: "0%" },
  { name: "Thailand", flag: "🇹🇭", visa: "Retirement/Elite", minIncome: "£1,500/mo", pensionTax: "Low" },
  { name: "Italy", flag: "🇮🇹", visa: "Elective Residence", minIncome: "€31k/yr", pensionTax: "7% South" }
];

// Populate country dropdown
function populateCountries() {
  const select = document.getElementById("countrySelect");
  countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c.name;
    option.textContent = `${c.flag} ${c.name}`;
    select.appendChild(option);
  });
}

// Track progress
const phases = document.querySelectorAll(".phase select, .phase input");
phases.forEach(el => el.addEventListener("change", updateProgress));

function updateProgress() {
  let completed = 0;
  phases.forEach(el => { if(el.value) completed++; });
  const percent = (completed / phases.length) * 100;
  document.getElementById("progress-bar").style.width = percent + "%";
  document.getElementById("progress-text").textContent = `${completed} / ${phases.length} completed`;
}

// Generate Summary with icons & country info
function generateSummary() {
  const countryName = document.getElementById("countrySelect").value;
  const country = countries.find(c => c.name === countryName);
  
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visa = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  const outputHTML = `
    <div class="summary-card">
      <h3>${country ? country.flag + " " + country.name : "No country selected"}</h3>
      <p>Age: ${age}</p>
      <p>Monthly Income: £${income}</p>
      <p>Healthcare: 🏥 ${healthcare}</p>
      <p>Housing: 🏠 ${housing}</p>
      <p>Banking: 💰 ${banking}</p>
      <p>Transport: 🚗 ${transport}</p>
      <p>Residency Route: ✈️ ${visa}</p>
      <p>Lifestyle: 🌴 ${lifestyle}</p>
      <p>Risk Tolerance: ⚠️ ${risk}</p>
      ${country ? `<p><strong>Visa:</strong> ${country.visa}</p>
      <p><strong>Minimum Income Required:</strong> ${country.minIncome}</p>
      <p><strong>Pension Tax Rate:</strong> ${country.pensionTax}</p>` : ''}
    </div>
  `;
  document.getElementById("output").innerHTML = outputHTML;
}

// Initialize
populateCountries();
updateProgress();
