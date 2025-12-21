const app = document.getElementById("app");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

let currentPhase = 0;

const data = {};

const countries = [
  "Portugal","Spain","France","Ireland","Cyprus","Malta","Italy","Greece",
  "UAE","Thailand","Malaysia","Panama","Mexico","Costa Rica","Hungary",
  "Poland","Bulgaria","Slovakia","Slovenia","Indonesia","Colombia",
  "Mauritius","Belize","Ecuador","Uruguay","Chile","Latvia",
  "Australia","New Zealand","Canada"
];

const phases = [
  {
    title: "Choose Destination Country",
    content: () => `
      <select id="country">
        <option value="">Select a country</option>
        ${countries.map(c => `<option>${c}</option>`).join("")}
      </select>
    `,
    save: () => data.country = document.getElementById("country").value
  },
  {
    title: "Your Age",
    content: () => `<input type="number" id="age" placeholder="Your age">`,
    save: () => data.age = document.getElementById("age").value
  },
  {
    title: "Monthly Income (£)",
    content: () => `<input type="number" id="income" placeholder="Monthly income">`,
    save: () => data.income = document.getElementById("income").value
  },
  {
    title: "Healthcare Preference",
    content: () => `
      <select id="healthcare">
        <option value="">Select</option>
        <option>Private</option>
        <option>Public</option>
        <option>Mixed</option>
      </select>
    `,
    save: () => data.healthcare = document.getElementById("healthcare").value
  },
  {
    title: "Housing Plan",
    content: () => `
      <select id="housing">
        <option value="">Select</option>
        <option>Rent</option>
        <option>Buy</option>
        <option>Undecided</option>
      </select>
    `,
    save: () => data.housing = document.getElementById("housing").value
  },
  {
    title: "Banking Setup",
    content: () => `
      <select id="banking">
        <option value="">Select</option>
        <option>UK bank only</option>
        <option>Local bank</option>
        <option>Wise / Revolut</option>
      </select>
    `,
    save: () => data.banking = document.getElementById("banking").value
  },
  {
    title: "Transport",
    content: () => `
      <select id="transport">
        <option value="">Select</option>
        <option>No car</option>
        <option>Buy locally</option>
        <option>Import UK vehicle</option>
      </select>
    `,
    save: () => data.transport = document.getElementById("transport").value
  },
  {
    title: "Residency Route",
    content: () => `
      <select id="visa">
        <option value="">Select</option>
        <option>Passive income / Retirement</option>
        <option>Work / Self-employed</option>
        <option>Investment</option>
      </select>
    `,
    save: () => data.visa = document.getElementById("visa").value
  },
  {
    title: "Lifestyle Preference",
    content: () => `
      <select id="lifestyle">
        <option value="">Select</option>
        <option>Quiet / Rural</option>
        <option>City</option>
        <option>Coastal / Island</option>
      </select>
    `,
    save: () => data.lifestyle = document.getElementById("lifestyle").value
  },
  {
    title: "Risk Tolerance",
    content: () => `
      <select id="risk">
        <option value="">Select</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    `,
    save: () => data.risk = document.getElementById("risk").value
  },
  {
    title: "Your Relocation Summary",
    content: () => `
      <p><strong>Destination:</strong> ${data.country}</p>
      <p><strong>Age:</strong> ${data.age}</p>
      <p><strong>Income:</strong> £${data.income}</p>
      <p><strong>Healthcare:</strong> ${data.healthcare}</p>
      <p><strong>Housing:</strong> ${data.housing}</p>
      <p><strong>Banking:</strong> ${data.banking}</p>
      <p><strong>Transport:</strong> ${data.transport}</p>
      <p><strong>Visa Route:</strong> ${data.visa}</p>
      <p><strong>Lifestyle:</strong> ${data.lifestyle}</p>
      <p><strong>Risk:</strong> ${data.risk}</p>
      <p><em>Your next steps will include visa rules, tax exposure, and healthcare setup specific to ${data.country}.</em></p>
    `,
    save: () => {}
  }
];

function renderPhase() {
  const phase = phases[currentPhase];

  progressText.textContent = `Phase ${currentPhase + 1} of ${phases.length}`;
  progressFill.style.width = `${((currentPhase + 1) / phases.length) * 100}%`;

  app.innerHTML = `
    <div class="phase">
      <h2>Phase ${currentPhase + 1}: ${phase.title}</h2>
      ${phase.content()}
      <div class="nav-buttons">
        ${currentPhase > 0 ? `<button class="secondary" onclick="prevPhase()">Back</button>` : `<span></span>`}
        ${currentPhase < phases.length - 1
          ? `<button class="primary" onclick="nextPhase()">Next</button>`
          : `<span></span>`}
      </div>
    </div>
  `;
}

function nextPhase() {
  phases[currentPhase].save();
  currentPhase++;
  renderPhase();
}

function prevPhase() {
  currentPhase--;
  renderPhase();
}

renderPhase();
