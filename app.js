const app = document.getElementById("app");

// 30 countries with data
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

// PHASES
const phases = [
  { id:1, title:"Destination", html:`<label>Choose country:</label><select id="destination"><option value="">--Select--</option>${countries.map(c=>`<option value="${c.name}">${c.name}</option>`).join('')}</select><div class="phase-result" id="destination-result"></div>`},
  { id:2, title:"Residency", html:`<label>Passport held:</label><select id="passport"><option value="">--Select--</option><option value="UK">UK</option><option value="EU">EU</option></select><div class="phase-result" id="residency-result"></div>`},
  { id:3, title:"Income/Budget", html:`<label>Monthly income (£):</label><input type="range" id="income" min="500" max="5000" value="1500" oninput="document.getElementById('incomeValue').innerText=this.value"><p>£<span id="incomeValue">1500</span>/month</p><label>Budget sensitivity:</label><select id="budget"><option value="">--Select--</option><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select><div class="phase-result" id="budget-result"></div>`},
  { id:4, title:"Healthcare", html:`<label>Health status:</label><select id="health-status"><option value="">--Select--</option><option value="working">Working</option><option value="retired">Retired</option></select><label>Receive UK state pension?</label><select id="state-pension"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="healthcare-result"></div>`},
  { id:5, title:"Housing", html:`<label>Rent or Buy?</label><select id="housing-type"><option value="">--Select--</option><option value="rent">Rent</option><option value="buy">Buy</option></select><label>Monthly budget (£):</label><input type="range" id="housing-budget" min="300" max="3000" value="800" oninput="document.getElementById('housingValue').innerText=this.value"><p>£<span id="housingValue">800</span>/month</p><label>Preferred location:</label><select id="location-style"><option value="">--Select--</option><option value="city">City</option><option value="town">Town</option><option value="rural">Rural</option></select><div class="phase-result" id="housing-result"></div>`},
  { id:6, title:"Banking", html:`<label>Need local bank accounts?</label><select id="banking"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="banking-result"></div>`},
  { id:7, title:"Taxes", html:`<label>Tax preference:</label><select id="tax"><option value="">--Select--</option><option value="low">Low-tax</option><option value="medium">Medium-tax</option><option value="high">High-tax</option></select><div class="phase-result" id="tax-result"></div>`},
  { id:8, title:"Visas", html:`<label>Visa requirements known?</label><select id="visa"><option value="">--Select--</option><option value="yes">Yes</option><option value="no">No</option></select><div class="phase-result" id="visa-result"></div>`},
  { id:9, title:"Transport", html:`<label>Transportation needs:</label><select id="transport"><option value="">--Select--</option><option value="car">Car</option><option value="public">Public Transport</option><option value="mixed">Mixed</option></select><div class="phase-result" id="transport-result"></div>`},
  { id:10, title:"Moving", html:`<label>Moving method:</label><select id="moving"><option value="">--Select--</option><option value="air">Air</option><option value="sea">Sea</option><option value="land">Land</option></select><div class="phase-result" id="moving-result"></div>`},
  { id:11, title:"Recommendation", html:`<div class="phase-result" id="final-result"></div><button onclick="showRecommendation()">Show Recommendation</button>`}
];

// RENDER
function startApp(){
  app.innerHTML="";
  phases.forEach(p=>{
    const card=document.createElement("div");
    card.className="phase-card";
    card.id=`phase-${p.id}`;
    card.innerHTML=`<h2>${p.title}</h2>${p.html}<button onclick="savePhase(${p.id})">Save</button>`;
    app.appendChild(card);
  });
}

// SAVE LOGIC
function savePhase(id){
  switch(id){
    case 1: {
      const val=document.getElementById("destination").value;
      if(!val) return alert("Select destination");
      const box=document.getElementById("destination-result");
      box.innerHTML=`🌍 Destination: ${val}`;
      box.style.display="block"; break;
    }
    case 2: {
      const val=document.getElementById("passport").value;
      if(!val) return alert("Select passport");
      const box=document.getElementById("residency-result");
      box.innerHTML=val==="UK"?"UK passport considerations post-Brexit":"EU passport easier residency";
      box.style.display="block"; break;
    }
    case 3: {
      const income=document.getElementById("income").value;
      const budget=document.getElementById("budget").value;
      if(!income || !budget) return alert("Complete income & budget");
      const box=document.getElementById("budget-result");
      box.innerHTML=`Income: £${income}/month, Budget: ${budget}`; box.style.display="block"; break;
    }
    case 4: {
      const health=document.getElementById("health-status").value;
      const pension=document.getElementById("state-pension").value;
      if(!health || !pension) return alert("Complete healthcare fields");
      const box=document.getElementById("healthcare-result");
      box.innerHTML=health==="retired"&&pension==="yes"?"Eligible for S1":"Private/local insurance needed"; box.style.display="block"; break;
    }
    case 5: {
      const type=document.getElementById("housing-type").value;
      const budget=document.getElementById("housing-budget").value;
      const loc=document.getElementById("location-style").value;
      if(!type || !budget || !loc) return alert("Complete housing info");
      const box=document.getElementById("housing-result");
      box.innerHTML=`${type} with £${budget}/month in a ${loc} location`; box.style.display="block"; break;
    }
    case 6: {
      const val=document.getElementById("banking").value;
      if(!val) return alert("Select banking");
      const box=document.getElementById("banking-result");
      box.innerHTML=val==="yes"?"Need local bank accounts":"No local accounts needed"; box.style.display="block"; break;
    }
    case 7: {
      const val=document.getElementById("tax").value;
      if(!val) return alert("Select tax preference");
      const box=document.getElementById("tax-result");
      box.innerHTML=`Tax preference: ${val}`; box.style.display="block"; break;
    }
    case 8: {
      const val=document.getElementById("visa").value;
      if(!val) return alert("Select visa info");
      const box=document.getElementById("visa-result");
      box.innerHTML=val==="yes"?"Visa requirements known":"Need visa guidance"; box.style.display="block"; break;
    }
    case 9: {
      const val=document.getElementById("transport").value;
      if(!val) return alert("Select transport");
      const box=document.getElementById("transport-result");
      box.innerHTML=`Transport choice: ${val}`; box.style.display="block"; break;
    }
    case 10: {
      const val=document.getElementById("moving").value;
      if(!val) return alert("Select moving method");
      const box=document.getElementById("moving-result");
      box.innerHTML=`Moving via ${val}`; box.style.display="block"; break;
    }
  }
}

// FINAL RECOMMENDATION
function showRecommendation(){
  const dest=document.getElementById("destination").value;
  const income=parseInt(document.getElementById("income").value);
  const budget=document.getElementById("budget").value;
  const health=document.getElementById("health-status").value;
  const pension=document.getElementById("state-pension").value;

  if(!dest || !income || !budget || !health || !pension) return alert("Complete all mandatory phases");

  // Simple scoring based on income vs cost, pension perks, tax preference
  const scored=countries.map(c=>{
    let score=100;
    score -= Math.abs(c.cost - income)/50; // cost difference
    if(health==="retired" && pension==="yes" && c.pension) score+=20;
    if(budget==="low" && c.tax<=10) score+=15;
    if(budget==="medium" && c.tax<=15) score+=10;
    return {...c, score};
  });

  const top=scored.sort((a,b)=>b.score-a.score).slice(0,3);
  const box=document.getElementById("final-result");
  box.innerHTML=`<h3>🏆 Top 3 Recommended Countries</h3>${top.map(c=>`<p>${c.name} - Score: ${Math.round(c.score)}</p>`).join('')}`;
  box.style.display="block";
}
