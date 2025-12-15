document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  let currentPhase = 1;

  // ========= COUNTRY DATA =========
  const countries = [
    { name: "Portugal", tax: 10, cost: 2200 },
    { name: "Spain", tax: 15, cost: 2500 },
    { name: "Ireland", tax: 20, cost: 3000 },
    { name: "Australia", tax: 25, cost: 3500 },
    { name: "Cyprus", tax: 12, cost: 2200 },
    { name: "Malta", tax: 15, cost: 2500 },
    { name: "France", tax: 20, cost: 2600 },
    { name: "UAE", tax: 0, cost: 3000 },
    { name: "Thailand", tax: 10, cost: 1800 },
    { name: "Italy", tax: 15, cost: 2500 },
    { name: "Greece", tax: 12, cost: 2000 },
    { name: "Canada", tax: 20, cost: 2800 },
    { name: "New Zealand", tax: 25, cost: 3000 },
    { name: "Malaysia", tax: 10, cost: 1800 },
    { name: "Panama", tax: 0, cost: 2000 },
    { name: "Mexico", tax: 10, cost: 2000 },
    { name: "Costa Rica", tax: 10, cost: 2200 },
    { name: "Hungary", tax: 9, cost: 1800 },
    { name: "Poland", tax: 10, cost: 1500 },
    { name: "Slovenia", tax: 12, cost: 1800 },
    { name: "Slovakia", tax: 10, cost: 1600 },
    { name: "Bulgaria", tax: 10, cost: 1500 },
    { name: "Indonesia", tax: 10, cost: 1800 },
    { name: "Colombia", tax: 10, cost: 1600 },
    { name: "Mauritius", tax: 5, cost: 2000 },
    { name: "Belize", tax: 0, cost: 1800 },
    { name: "Ecuador", tax: 0, cost: 1500 },
    { name: "Uruguay", tax: 10, cost: 2000 },
    { name: "Chile", tax: 10, cost: 1800 },
    { name: "Latvia", tax: 10, cost: 1500 }
  ];

  // ========= PHASES =========
  const phases = [
    {
      id: 1,
      html: `
        <h2>🌍 Destination</h2>
        <label>Where are you considering moving?</label>
        <select id="destination">
          <option value="">-- Select --</option>
          ${countries.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
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
        <label>What best describes you?</label>
        <select id="health-status">
          <option value="">-- Select --</option>
          <option value="working">Working / Self-employed</option>
          <option value="retired">Retired / State Pension</option>
        </select>

        <label>Do you receive the UK State Pension?</label>
        <select id="state-pension">
          <option value="">-- Select --</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <div class="phase-result" id="healthcare-result"></div>
        <button onclick="savePhase4()">Continue</button>
      `
    },
    {
      id: 5,
      html: `<h2>✅ Recommended Countries</h2>
             <div id="recommendation"></div>
             <button onclick="finishApp()">Finish</button>`
    }
  ];

  // ========= RENDER & PROGRESS =========
  function startApp() {
    app.innerHTML = "";
    currentPhase = 1;
    renderPhase();
  }

  function renderPhase() {
    const phase = phases[currentPhase - 1];
    const card = document.createElement("div");
    card.className = "phase-card";
    card.id = `phase-${phase.id}`;
    card.innerHTML = phase.html;
    app.appendChild(card);
    updateProgress();
  }

  function nextPhase() {
    if (currentPhase < phases.length) {
      currentPhase++;
      renderPhase();
      const el = document.getElementById(`phase-${currentPhase}`);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }

  function updateProgress() {
    document.getElementById("progress-text").innerText = `Phase ${currentPhase} of ${phases.length}`;
    const percent = (currentPhase / phases.length) * 100;
    document.getElementById("progress-fill").style.width = percent + "%";
  }

  // ========= SAVE PHASE FUNCTIONS =========
  window.savePhase1 = function() {
    const dest = document.getElementById("destination").value;
    const box = document.getElementById("destination-result");
    if (!dest) return alert("Please select a destination");
    box.innerHTML = `🌍 You selected <strong>${dest}</strong>`;
    box.style.display = "block";
    nextPhase();
  }

  window.savePhase2 = function() {
    const pass = document.getElementById("passport").value;
    const box = document.getElementById("residency-result");
    if (!pass) return alert("Please select passport type");
    box.innerHTML = pass === "UK"
      ? `🛂 UK passport — post-Brexit residency rules apply.`
      : `🛂 EU passport — easier residency.`;
    box.style.display = "block";
    nextPhase();
  }

  window.savePhase3 = function() {
    const income = parseInt(document.getElementById("income").value);
    const budget = document.getElementById("budget").value;
    const box = document.getElementById("budget-result");
    if (!income || !budget) return alert("Please set both income and budget");
    box.innerHTML = `💰 Monthly income: £${income}, Budget sensitivity: <strong>${budget}</strong>`;
    box.style.display = "block";
    nextPhase();
  }

  window.savePhase4 = function() {
    const health = document.getElementById("health-status").value;
    const pension = document.getElementById("state-pension").value;
    const box = document.getElementById("healthcare-result");
    if (!health || !pension) return alert("Please answer both healthcare questions");

    let msg = "";
    if (health === "retired" && pension === "yes") {
      msg = `✅ Eligible for S1 healthcare in EU countries.`;
    } else if (health === "working") {
      msg = `💼 You may need local contributions or private insurance.`;
    } else {
      msg = `🏥 Private health insurance recommended initially.`;
    }

    box.innerHTML = msg;
    box.style.display = "block";
    nextPhase();
  }

  window.finishApp = function() {
    const destination = document.getElementById("destination").value;
    const income = parseInt(document.getElementById("income").value);
    const recommended = countries
      .filter(c => income - c.cost >= 0) // affordable
      .sort((a, b) => a.tax - b.tax)   // low tax first
      .slice(0, 5)                      // top 5
      .map(c => c.name)
      .join(", ");

    document.getElementById("recommendation").innerHTML =
      `<h3>Top recommended countries for you:</h3><p>${recommended}</p>`;
  }

  // ========= START =========
  window.startApp = startApp;
});
