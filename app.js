const app = document.getElementById("app");

// 30 countries
const countries = [
  "Portugal","Spain","Ireland","Australia","Cyprus","Malta","France",
  "UAE","Thailand","Italy","Greece","Canada","New Zealand","Malaysia",
  "Panama","Mexico","Costa Rica","Hungary","Poland","Slovenia","Slovakia",
  "Bulgaria","Indonesia","Colombia","Mauritius","Belize","Ecuador",
  "Uruguay","Chile","Latvia"
];

// PHASES 1-11
const phases = [
  { id: 1, title: "Destination", html: `<label>Choose a country:</label><select id="destination"><option value="">--Select--</option>${countries.map(c=>`<option value="${c}">${c}</option>`).join('')}</select><div class="phase-result" id="destination-result"></div><button onclick="savePhase1()">Save</button>` },
  
  { id: 2, title: "Residency", html: `<label>Passport held:</label><select id="passport"><option value="">--Select--</option><option value="UK">UK</option><option value="EU">EU</option></select><div class="phase-result" id="residency-result"></div><button onclick="savePhase2()">Save</button>` },
  
  { id: 3, title: "Income & Budget", html: `<label>Monthly Income (£):</label><input type="range" min="500" max="5000" value="1500" id="income" oninput="document.getElementById('incomeValue').innerText=this.value"><p>£<span id="incomeValue">1500</span>/month</p><label>Budget sensitivity:</label><select id="budget"><option value="">--Select--</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select><div class="phase-result" id="budget-result"></div><button onclick="savePhase3()">Save</button>` },

  { id: 4, title: "Healthcare", html: `<label>Health status:</label><select id="health-status"><option value="">--Select--</option><option value="working">Working</option><option value="retired">Retired</option></select><label>Receive UK state pension?</label><select id="state-pension"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="healthcare-result"></div><button onclick="savePhase4()">Save</button>` },

  { id: 5, title: "Housing", html: `<label>Rent or Buy?</label><select id="housing-type"><option value="">--Select--</option><option value="rent">Rent</option><option value="buy">Buy</option></select><label>Monthly budget (£):</label><input type="range" min="300" max="3000" value="800" id="housing-budget" oninput="document.getElementById('housingValue').innerText=this.value"><p>£<span id="housingValue">800</span>/month</p><label>Preferred location:</label><select id="location-style"><option value="">--Select--</option><option value="city">City</option><option value="town">Town</option><option value="rural">Rural</option></select><div class="phase-result" id="housing-result"></div><button onclick="savePhase5()">Save</button>` },

  { id: 6, title: "Banking", html: `<label>Do you need local bank accounts?</label><select id="banking"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="banking-result"></div><button onclick="savePhase6()">Save</button>` },

  { id: 7, title: "Taxes", html: `<label>Tax preference:</label><select id="tax"><option value="">--Select--</option><option value="low">Low-tax</option><option value="medium">Medium-tax</option><option value="high">High-tax</option></select><div class="phase-result" id="tax-result"></div><button onclick="savePhase7()">Save</button>` },

  { id: 8, title: "Visas", html: `<label>Visa requirements known?</label><select id="visa"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="visa-result"></div><button onclick="savePhase8()">Save</button>` },

  { id: 9, title: "Transport", html: `<label>Transportation needs:</label><select id="transport"><option value="">--Select--</option><option value="car">Car</option><option value="public">Public Transport</option><option value="mixed">Mixed</option></select><div class="phase-result" id="transport-result"></div><button onclick="savePhase9()">Save</button>` },

  { id: 10, title: "Moving", html: `<label>Moving method:</label><select id="moving"><option value="">--Select--</option><option value="air">Air</option><option value="sea">Sea</option><option value="land">Land</option></select><div class="phase-result" id="moving-result"></div><button onclick="savePhase10()">Save</button>` },

  { id: 11, title: "Recommendation", html: `<div class="phase-result" id="final-result"></div><button onclick="savePhase11()">Show Recommendation</button>` }
];

// RENDER ALL PHASES
function startApp() {
  app.innerHTML = "";
  phases.forEach(p => {
    const card = document.createElement("div");
    card.className = "phase-card";
    card.id = `phase-${p.id}`;
    card.innerHTML = `<h2>${p.title}</h2>${p.html}`;
    app.appendChild(card);
  });
}

// ========= SAVE FUNCTIONS =========
window.savePhase1 = () => {
  const val = document.getElementById("destination").value;
  const box = document.getElementById("destination-result");
  if (!val) return alert("Select a destination");
  box.innerHTML = `🌍 Destination: <strong>${val}</strong>`;
  box.style.display = "block";
};

window.savePhase2 = () => {
  const val = document.getElementById("passport").value;
  const box = document.getElementById("residency-result");
  if (!val) return alert("Select passport");
  box.innerHTML = val==="UK" ? "UK passport considerations post-Brexit." : "EU passport offers easier residency.";
  box.style.display = "block";
};

window.savePhase3 = () => {
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  const box = document.getElementById("budget-result");
  if (!income || !budget) return alert("Complete income & budget");
  box.innerHTML = `Income: £${income}/month, Budget: ${budget}`;
  box.style.display = "block";
};

window.savePhase4 = () => {
  const health = document.getElementById("health-status").value;
  const pension = document.getElementById("state-pension").value;
  const box = document.getElementById("healthcare-result");
  if (!health || !pension) return alert("Complete healthcare fields");
  box.innerHTML = health==="retired" && pension==="yes" ? "Eligible for S1 healthcare form." : "Private/local insurance needed.";
  box.style.display = "block";
};

window.savePhase5 = () => {
  const type = document.getElementById("housing-type").value;
  const budget = document.getElementById("housing-budget").value;
  const loc = document.getElementById("location-style").value;
  const box = document.getElementById("housing-result");
  if(!type || !budget || !loc) return alert("Complete housing info");
  box.innerHTML = `${type} with £${budget}/month in a ${loc} location.`;
  box.style.display = "block";
};

window.savePhase6 = () => {
  const val = document.getElementById("banking").value;
  const box = document.getElementById("banking-result");
  if(!val) return alert("Select banking option");
  box.innerHTML = val==="yes"?"Will need local accounts":"No local accounts needed";
  box.style.display = "block";
};

window.savePhase7 = () => {
  const val = document.getElementById("tax").value;
  const box = document.getElementById("tax-result");
  if(!val) return alert("Select tax preference");
  box.innerHTML = `Tax preference: ${val}`;
  box.style.display = "block";
};

window.savePhase8 = () => {
  const val = document.getElementById("visa").value;
  const box = document.getElementById("visa-result");
  if(!val) return alert("Select visa info");
  box.innerHTML = val==="yes"?"Visa requirements known":"Need visa guidance";
  box.style.display = "block";
};

window.savePhase9 = () => {
  const val = document.getElementById("transport").value;
  const box = document.getElementById("transport-result");
  if(!val) return alert("Select transport");
  box.innerHTML = `Transport choice: ${val}`;
  box.style.display = "block";
};

window.savePhase10 = () => {
  const val = document.getElementById("moving").value;
  const box = document.getElementById("moving-result");
  if(!val) return alert("Select moving method");
  box.innerHTML = `Moving via ${val}`;
  box.style.display = "block";
};

window.savePhase11 = () => {
  const dest = document.getElementById("destination").value;
  const income = document.getElementById("income").value;
  const budget = document.getElementById("budget").value;
  const health = document.getElementById("health-status").value;
  const pension = document.getElementById("state-pension").value;
  const housing = document.getElementById("housing-type").value;
  const housingBudget = document.getElementById("housing-budget").value;
  const box = document.getElementById("final-result");

  if(!dest || !income || !budget || !health || !pension || !housing || !housingBudget) return alert("Complete all previous phases first");

  box.innerHTML = `
    <h3>🏆 Your Personalized Recommendation</h3>
    <p>Destination: <strong>${dest}</strong></p>
    <p>Income: £${income}/month, Budget sensitivity: ${budget}</p>
    <p>Healthcare: ${health==="retired"&&pension==="yes"?"Eligible for S1":"Private/local insurance needed"}</p>
    <p>Housing: ${housing} with £${housingBudget}/month</p>
    <p>✅ Recommendation: Review visa, tax, and banking options for <strong>${dest}</strong> based on your inputs.</p>
  `;
  box.style.display = "block";
};
