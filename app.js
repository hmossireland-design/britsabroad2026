// Countries list with flags
const countries = [
  {name:"Portugal", flag:"🇵🇹"}, {name:"Spain", flag:"🇪🇸"},
  {name:"Ireland", flag:"🇮🇪"}, {name:"Australia", flag:"🇦🇺"},
  {name:"Cyprus", flag:"🇨🇾"}, {name:"Malta", flag:"🇲🇹"},
  {name:"France", flag:"🇫🇷"}, {name:"UAE", flag:"🇦🇪"},
  {name:"Thailand", flag:"🇹🇭"}, {name:"Italy", flag:"🇮🇹"},
  {name:"Greece", flag:"🇬🇷"}, {name:"Canada", flag:"🇨🇦"},
  {name:"New Zealand", flag:"🇳🇿"}, {name:"Malaysia", flag:"🇲🇾"},
  {name:"Panama", flag:"🇵🇦"}, {name:"Mexico", flag:"🇲🇽"},
  {name:"Costa Rica", flag:"🇨🇷"}, {name:"Hungary", flag:"🇭🇺"},
  {name:"Poland", flag:"🇵🇱"}, {name:"Slovenia", flag:"🇸🇮"},
  {name:"Slovakia", flag:"🇸🇰"}, {name:"Bulgaria", flag:"🇧🇬"},
  {name:"Indonesia", flag:"🇮🇩"}, {name:"Colombia", flag:"🇨🇴"},
  {name:"Mauritius", flag:"🇲🇺"}, {name:"Belize", flag:"🇧🇿"},
  {name:"Ecuador", flag:"🇪🇨"}, {name:"Uruguay", flag:"🇺🇾"},
  {name:"Chile", flag:"🇨🇱"}, {name:"Latvia", flag:"🇱🇻"}
];

// Inject countries into dropdown
const countrySelect = document.getElementById("countrySelect");
countries.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c.name;
  opt.textContent = `${c.flag} ${c.name}`;
  countrySelect.appendChild(opt);
});

// Progress Bar
const totalPhases = 10;
function updateProgressBar() {
  let completed = 0;
  const phaseIds = ["countrySelect","age","income","healthcare","housing","banking","transport","visa","lifestyle","risk"];
  phaseIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if ((el.tagName==="SELECT" || el.tagName==="INPUT") && el.value) completed++;
  });
  const percent = (completed / totalPhases) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").textContent = `${completed} / ${totalPhases} phases completed`;
}
phaseIds = ["countrySelect","age","income","healthcare","housing","banking","transport","visa","lifestyle","risk"];
phaseIds.forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("change", updateProgressBar);
    el.addEventListener("input", updateProgressBar);
  }
});
updateProgressBar();

// Generate Summary
function generateSummary() {
  const country = document.getElementById("countrySelect").value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visa = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  const outputDiv = document.getElementById("output");

  outputDiv.innerHTML = `
    <h3>Your Relocation Summary</h3>
    <p><strong>Destination:</strong> ${country}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Income:</strong> £${income}</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Residency:</strong> ${visa}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>
    <p>Next steps will include visa rules, tax exposure, and healthcare setup specific to ${country}.</p>
  `;
}
