const app = document.getElementById("app");

const countries = [
  { name:"Portugal", tax:10, pension:true, cost:2200, visa:"D7" },
  { name:"Spain", tax:20, pension:true, cost:2500, visa:"Non-Lucrative" },
  { name:"Ireland", tax:20, pension:true, cost:3000, visa:"None" },
  { name:"Australia", tax:25, pension:false, cost:3500, visa:"Parent/Skilled" },
  { name:"Cyprus", tax:12.5, pension:true, cost:2200, visa:"Category F" },
  { name:"Malta", tax:15, pension:true, cost:2500, visa:"Retirement" },
  { name:"France", tax:20, pension:true, cost:2700, visa:"Long-Stay" },
  { name:"UAE", tax:0, pension:false, cost:3500, visa:"Retirement" },
  { name:"Thailand", tax:10, pension:true, cost:1800, visa:"Retirement/Elite" },
  { name:"Italy", tax:15, pension:true, cost:2500, visa:"Elective" },
  { name:"Greece", tax:10, pension:true, cost:2000, visa:"FIP" },
  { name:"Canada", tax:20, pension:false, cost:3000, visa:"Family/Points" },
  { name:"New Zealand", tax:20, pension:false, cost:3500, visa:"Investment/Family" },
  { name:"Malaysia", tax:0, pension:true, cost:1500, visa:"MM2H" },
  { name:"Panama", tax:0, pension:true, cost:1800, visa:"Pensionado" },
  { name:"Mexico", tax:0, pension:true, cost:1800, visa:"Temporary Resident" },
  { name:"Costa Rica", tax:0, pension:true, cost:2200, visa:"Pensionado" },
  { name:"Hungary", tax:10, pension:true, cost:1700, visa:"Residence" },
  { name:"Poland", tax:10, pension:true, cost:1500, visa:"Temporary Residence" },
  { name:"Slovenia", tax:10, pension:true, cost:1800, visa:"Long-term" },
  { name:"Slovakia", tax:10, pension:true, cost:1600, visa:"Temporary" },
  { name:"Bulgaria", tax:10, pension:true, cost:1500, visa:"D Visa" },
  { name:"Indonesia", tax:0, pension:true, cost:1800, visa:"KITAS" },
  { name:"Colombia", tax:0, pension:true, cost:1600, visa:"Pension Visa" },
  { name:"Mauritius", tax:0, pension:true, cost:2200, visa:"Retired Non-Citizen" },
  { name:"Belize", tax:0, pension:true, cost:2000, visa:"QRP" },
  { name:"Ecuador", tax:0, pension:true, cost:1500, visa:"Pensioner" },
  { name:"Uruguay", tax:10, pension:true, cost:2200, visa:"Residency" },
  { name:"Chile", tax:10, pension:true, cost:2000, visa:"Retirement" },
  { name:"Latvia", tax:10, pension:true, cost:1800, visa:"Temporary" }
];

const phases = [
  { id:1, title:"Destination", html:`<label data-tooltip="Choose where you want to live">Choose country:</label>
  <select id="destination"><option value="">--Select--</option>${countries.map(c=>`<option value="${c.name}">${c.name}</option>`).join('')}</select>
  <div class="country-info" id="country-info"></div>
  <div class="phase-result" id="destination-result"></div>`},
  { id:2, title:"Residency", html:`<label data-tooltip="Your passport type">Passport held:</label><select id="passport"><option value="">--Select--</option><option value="UK">UK</option><option value="EU">EU</option></select><div class="phase-result" id="residency-result"></div>`},
  { id:3, title:"Income/Budget", html:`<label data-tooltip="Monthly income">Monthly income (£):</label><input type="range" id="income" min="500" max="5000" value="1500" oninput="document.getElementById('incomeValue').innerText=this.value"><p>£<span id="incomeValue">1500</span>/month</p>
  <label data-tooltip="Your spending flexibility">Budget sensitivity:</label><select id="budget"><option value="">--Select--</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select><div class="phase-result" id="budget-result"></div>`},
  { id:4, title:"Healthcare", html:`<label data-tooltip="Health status">Health status:</label><select id="health-status"><option value="">--Select--</option><option value="working">Working</option><option value="retired">Retired</option></select>
  <label data-tooltip="State pension">Receive UK state pension?</label><select id="state-pension"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="healthcare-result"></div>`},
  { id:5, title:"Housing", html:`<label data-tooltip="Rent or Buy?">Rent or Buy?</label><select id="housing-type"><option value="">--Select--</option><option value="rent">Rent</option><option value="buy">Buy</option></select>
  <label data-tooltip="Monthly budget for housing">Monthly budget (£):</label><input type="range" id="housing-budget" min="300" max="3000" value="800" oninput="document.getElementById('housingValue').innerText=this.value"><p>£<span id="housingValue">800</span>/month</p>
  <label data-tooltip="Preferred area">Preferred location:</label><select id="location-style"><option value="">--Select--</option><option value="city">City</option><option value="town">Town</option><option value="rural">Rural</option></select><div class="phase-result" id="housing-result"></div>`},
  { id:6, title:"Banking", html:`<label data-tooltip="Do you need local accounts?">Need local bank accounts?</label><select id="banking"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="banking-result"></div>`},
  { id:7, title:"Taxes", html:`<label data-tooltip="Select tax preference">Tax preference:</label><select id="tax"><option value="">--Select--</option><option value="low">Low-tax</option><option value="medium">Medium-tax</option><option value="high">High-tax</option></select><div class="phase-result" id="tax-result"></div>`},
  { id:8, title:"Visas", html:`<label data-tooltip="Visa knowledge">Visa requirements known?</label><select id="visa"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="visa-result"></div>`},
  { id:9, title:"Transport", html:`<label data-tooltip="Transport preference">Transportation needs:</label><select id="transport"><option value="">--Select--</option><option value="car">Car</option><option value="public">Public Transport</option><option value="mixed">Mixed</option></select><div class="phase-result" id="transport-result"></div>`},
  { id:10, title:"Moving", html:`<label data-tooltip="Moving method">Moving method:</label><select id="moving"><option value="">--Select--</option><option value="air">Air</option><option value="sea">Sea</option><option value="land">Land</option></select><div class="phase-result" id="moving-result"></div>`},
  { id:11, title:"Recommendation", html:`<div class="phase-result" id="final-result"></div><button onclick="showRecommendation()">Show Recommendation</button>`}
];

function startApp(){
  app.innerHTML="";
  phases.forEach(p=>{
    const card=document.createElement("div");
    card.className="phase-card";
    card.id=`phase-${p.id}`;
    card.innerHTML=`<h2>${p.title}</h2>${p.html}<button onclick="savePhase(${p.id})">Save</button>`;
    app.appendChild(card);
  });

  // Live country info update
  const destSelect=document.getElementById("destination");
  const infoBox=document.getElementById("country-info");
  destSelect.addEventListener("change",()=>{
    const country=countries.find(c=>c.name===destSelect.value);
    if(country){
      infoBox.innerHTML=`Tax: ${country.tax}%, Pension perks: ${country.pension?"Yes":"No"}, Monthly cost: £${country.cost}, Visa: ${country.visa}`;
      infoBox.style.display="block";
    } else { infoBox.style.display="none"; }
  });
}

// Save phase as before
function savePhase(id){ /* ...use previous savePhase code... */ }

// Final recommendation as before
function showRecommendation(){ /* ...use previous showRecommendation code... */ }
