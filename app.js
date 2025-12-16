document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  let currentPhase = 1;
  let userData = {
    destination: "",
    passport: "",
    income: 1500,
    budget: "medium",
    housingType: "",
    housingBudget: 800,
    locationStyle: ""
  };

  const countries = [
    "Portugal","Spain","Ireland","Australia","Cyprus","Malta","France","UAE","Thailand","Italy",
    "Greece","Canada","New Zealand","Malaysia","Panama","Mexico","Costa Rica","Hungary","Poland","Slovenia",
    "Slovakia","Bulgaria","Indonesia","Colombia","Mauritius","Belize","Ecuador","Uruguay","Chile","Latvia"
  ];

  const phases = [
    {
      id: 1,
      html: `
        <h2>🌍 Destination</h2>
        <label>Where are you considering moving?</label>
        <select id="destination">
          <option value="">-- Select --</option>
          ${countries.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
        <div class="phase-result" id="destination-result"></div>
        <button onclick="savePhase1()">Continue</button>
      `
    },
    {
      id: 2,
      html: `
        <h2>🛂 Residency</h2>
        <label>Passport held</label>
        <select id="passport">
          <option value="">-- Select --</option>
          <option value="UK">UK Passport</option>
          <option value="EU">EU Passport</option>
        </select>
        <div class="phase-result" id="residency-result"></div>
        <button onclick="savePhase2()">Continue</button>
      `
    },
    {
      id: 3,
      html: `
        <h2>💰 Income & Budget</h2>
        <label>Monthly Income (£)</label>
        <input type="range" min="500" max="5000" value="1500" id="income"
          oninput="document.getElementById('incomeValue').innerText=this.value">
        <p>£<span id="incomeValue">1500</span>/month</p>

        <label>Budget sensitivity</label>
        <select id="budget">
          <option value="">-- Select --</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <div class="phase-result" id="budget-result"></div>
        <button onclick="savePhase3()">Continue</button>
      `
    },
    {
      id: 4,
      html: `
        <h2>🏥 Healthcare</h2>
        <p>No inputs needed here, just notes based on your data.</p>
        <button onclick="nextPhase()">Continue</button>
      `
    },
    {
      id: 5,
      html: `
        <h2>🏠 Housing</h2>
        <label>Rent or Buy?</label>
        <select id="housing-type">
          <option value="">-- Select --</option>
          <option value="rent">Rent</option>
          <option value="buy">Buy</option>
        </select>

        <label>Monthly housing budget (£)</label>
        <input type="range" min="300" max="3000" value="800" id="housing-budget"
          oninput="document.getElementById('housingValue').innerText=this.value">
        <p>£<span id="housingValue">800</span>/month</p>

        <label>Preferred location style</label>
        <select id="location-style">
          <option value="">-- Select --</option>
          <option value="city">City</option>
          <option value="town">Town</option>
          <option value="rural">Rural</option>
        </select>

        <div class="phase-result" id="housing-result"></div>
        <button onclick="savePhase5()">Continue</button>
      `
    },
    { id: 6, html: `<h2>💸 Tax Reality</h2><p>Understanding tax rates based on your selected country.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 7, html: `<h2>🏦 Banking</h2><p>Local vs international banking options explained.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 8, html: `<h2>📑 Visas</h2><p>Visa types and renewal risks overview.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 9, html: `<h2>🚗 Transport</h2><p>Driving licences, car imports, and local transport info.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 10, html: `<h2>📦 Moving</h2><p>Shipping, pets, personal items guidance.</p><button onclick="nextPhase()">Continue</button>` },
    { id: 11, html: `<h2>✅ Final Score</h2><div id="final-output"></div>` }
  ];

  // ========= RENDER =========
  function startApp() {
    app.innerHTML = "";
    currentPhase = 1;
    renderAllPhases();
  }

  function renderAllPhases() {
    phases.forEach(phase => {
      const card = document.createElement("div");
      card.className = "phase-card";
      card.id = `phase-${phase.id}`;
      card.innerHTML = phase.html;
      app.appendChild(card);
    });
    updateProgress();
  }

  function nextPhase() {
    if (currentPhase < phases.length) currentPhase++;
    updateProgress();
  }

  function updateProgress() {
    document.getElementById("progress-text").innerText = `Phase ${currentPhase} of ${phases.length}`;
    const percent = (currentPhase / phases.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
  }

  // ========= SAVE PHASE =========
  window.savePhase1 = function() {
    const dest = document.getElementById("destination").value;
    if(!dest) return alert("Please select a destination");
    userData.destination = dest;
    document.getElementById("destination-result").innerHTML = `🌍 You selected <strong>${dest}</strong>`;
    document.getElementById("destination-result").style.display = "block";
    nextPhase();
  }

  window.savePhase2 = function() {
    const pass = document.getElementById("passport").value;
    if(!pass) return alert("Please select passport type");
    userData.passport = pass;
    document.getElementById("residency-result").innerHTML = pass === "UK"
      ? `🛂 UK passport: post-Brexit rules apply.`
      : `🛂 EU passport: easier residency options.`;
    document.getElementById("residency-result").style.display = "block";
    nextPhase();
  }

  window.savePhase3 = function() {
    const income = document.getElementById("income").value;
    const budget = document.getElementById("budget").value;
    if(!income || !budget) return alert("Please set both income and budget");
    userData.income = income;
    userData.budget = budget;
    document.getElementById("budget-result").innerHTML = `💰 Income: £${income}/month, Budget: <strong>${budget}</strong>`;
    document.getElementById("budget-result").style.display = "block";
    nextPhase();
  }

  window.savePhase5 = function() {
    const type = document.getElementById("housing-type").value;
    const budget = document.getElementById("housing-budget").value;
    const loc = document.getElementById("location-style").value;
    if(!type || !budget || !loc) return alert("Please complete all housing questions");
    userData.housingType = type;
    userData.housingBudget = budget;
    userData.locationStyle = loc;
    document.getElementById("housing-result").innerHTML = `🏠 ${type} with £${budget}/month in a <strong>${loc}</strong> area.`;
    document.getElementById("housing-result").style.display = "block";
    nextPhase();
  }

  // ========= FINAL OUTPUT =========
  function generateFinalOutput() {
    const finalDiv = document.getElementById("final-output");
    finalDiv.innerHTML = `
      🎯 Your selected country: <strong>${userData.destination}</strong><br>
      💼 Passport: ${userData.passport}<br>
      💰 Income: £${userData.income}/month<br>
      🏠 Housing: ${userData.housingType} in a ${userData.locationStyle} area, £${userData.housingBudget}/month
    `;
  }

  // Update final output when user reaches phase 11
  const observer = new MutationObserver(() => {
    if(document.getElementById("final-output")) generateFinalOutput();
  });
  observer.observe(app, { childList: true, subtree: true });

});
