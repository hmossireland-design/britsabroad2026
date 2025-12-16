const app = document.getElementById("app");
let currentPhase = 0;
let userData = {};

const phases = [
  {title: "🌍 Dream Destination", id: "destination", type: "select", options: ["Portugal","Spain","UAE","Thailand","Cyprus","Greece","Italy","France","Poland","Malta","Malaysia","Panama","Mexico","Ecuador","Costa Rica","Hungary","Slovakia","Slovenia","Bulgaria","Indonesia","Colombia","Mauritius","Belize","Uruguay","Chile","Latvia"], result: "Chosen destination: <strong>{val}</strong>"},
  {title: "💰 Financial Freedom", id: "income", type: "range", min:500, max:10000, step:500, label:"Monthly Pension (£)", result: "Pension: <strong>£{val}</strong>/month"},
  {title: "📊 Budget Blueprint", id: "property", type: "range", min:0, max:3000000, step:10000, label:"UK Property Value (£)", result: "Property: <strong>£{val}</strong>"},
  {title: "🏥 Healthcare & Age", id: "age", type: "range", min:50, max:85, value:65, label:"Your Age", result: "Age: <strong>{val}</strong>"},
  {title: "🚚 Move Mastery", id: "move-type", type: "select", options: ["Rent first","Buy property","Minimal belongings"], result: "Move type: <strong>{val}</strong>"},
  {title: "👥 Community Connections", id: "community", type: "select", options: ["Large Brit expat area","Local immersion","Remote/digital"], result: "Community preference: <strong>{val}</strong>"},
  {title: "💼 Tax Triumph", id: "tax", type: "select", options: ["Low tax priority","0% tax ideal","Happy with UK tax"], result: "Tax preference: <strong>{val}</strong>"},
  {title: "🎉 Final Recommendations", type: "final"}
];

function startApp() {
  currentPhase = 0;
  renderPhase();
}

function renderPhase() {
  app.innerHTML = "";
  if (currentPhase >= phases.length) {
    showFinal();
    return;
  }
  const phase = phases[currentPhase];
  const card = document.createElement("div");
  card.className = "phase-card";
  let html = `<h2>${phase.title}</h2>`;
  if (phase.type === "select") {
    html += `<label>\( {phase.label || "Choose"}</label><select id=" \){phase.id}">`;
    phase.options.forEach(o => html += `<option>${o}</option>`);
    html += `</select>`;
  } else if (phase.type === "range") {
    html += `<label>\( {phase.label}</label><input type="range" min=" \){phase.min}" max="\( {phase.max}" step=" \){phase.step || 100}" value="\( {phase.value || phase.min}" id=" \){phase.id}" oninput="this.nextElementSibling.innerText=this.value"><span>${phase.value || phase.min}</span>`;
  }
  html += `<div class="phase-result" id="${phase.id}-result"></div><button onclick="savePhase()">Continue</button>`;
  card.innerHTML = html;
  app.appendChild(card);
  updateProgress();
}

function savePhase() {
  const phase = phases[currentPhase];
  const val = document.getElementById(phase.id).value;
  if (!val) return alert("Please complete the question");
  userData[phase.id] = val;
  const resultDiv = document.getElementById(phase.id + "-result");
  resultDiv.innerHTML = phase.result.replace("{val}", val);
  resultDiv.style.display = "block";
  setTimeout(() => {
    currentPhase++;
    renderPhase();
  }, 1000);
}

function updateProgress() {
  document.getElementById("progress-text").innerText = `Phase \( {currentPhase + 1} of \){phases.length}`;
  document.getElementById("progress-fill").style.width = ((currentPhase + 1) / phases.length * 100) + "%";
}

function showFinal() {
  const destination = userData.destination || "Portugal";
  const pension = parseInt(userData.income) || 2000;
  const property = parseInt(userData.property) || 500000;
  const savings = Math.round(pension * 12 * 0.35 + property * 0.0025);
  app.innerHTML = `
    <div class="phase-card">
      <h2>🎉 Your Personalised Relocation Report</h2>
      <div class="result">You could save <strong>£\( {savings.toLocaleString()}</strong>/year in \){destination}!</div>
      <p>Top matches: ${destination}, Spain, Portugal (based on your answers)</p>
      <h2>Phase 11 – Visa Comparison (30 Countries)</h2>
      <table>${generateVisaTable()}</table>
      <button class="buy" onclick="window.location.href='https://buy.stripe.com/your-link'">UNLOCK FULL PACK – ONLY £9.97</button>
      <p>30-page PDF • Templates • Lawyers • Checklists</p>
    </div>
  `;
}

function generateVisaTable() {
  const countries = [
    ["Portugal","D7","€870/mo","None","5 yrs","10% pension tax • EU access"],
    ["Spain","Non-Lucrative","€2,400/mo","None","5 yrs","S1 healthcare • Golden ended"],
    ["UAE","Retirement","£4,200/mo","55+","No","0% tax • Luxury"],
    ["Thailand","O-A/Elite","£1,500/mo","50+","No","Elite perks"],
    ["Malaysia","MM2H","$1,500/mo","None","No","English • Tropical"],
    // Add all 30 from our list – shortened for space
    // ... (full list in final code)
  ];
  let table = `<tr><th>Country</th><th>Visa</th><th>Min Income</th><th>Age</th><th>PR Path</th><th>Notes</th></tr>`;
  countries.forEach(c => {
    table += `<tr onclick="this.nextElementSibling.classList.toggle('show')"><td>\( {c[0]}</td><td> \){c[1]}</td><td>\( {c[2]}</td><td> \){c[3]}</td><td>${c[4]}</td></tr>`;
    table += `<tr class="detail"><td colspan="5">${c[5]}</td></tr>`;
  });
  return table;
}

document.getElementById("start-btn").addEventListener("click", startApp);
