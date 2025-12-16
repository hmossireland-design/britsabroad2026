const app = document.getElementById("app");
const startBtn = document.getElementById("startBtn");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

let currentPhase = 0;

const phases = [
  {
    title: "🌍 Destination",
    content: `
      <label>Select a country</label>
      <select id="country">
        <option value="">-- Choose --</option>
        <option>Portugal</option>
        <option>Spain</option>
        <option>France</option>
        <option>Cyprus</option>
        <option>Italy</option>
        <option>Greece</option>
        <option>UAE</option>
        <option>Thailand</option>
        <option>Malaysia</option>
        <option>Panama</option>
        <option>Mexico</option>
        <option>Costa Rica</option>
        <option>Hungary</option>
        <option>Poland</option>
        <option>Bulgaria</option>
        <option>Serbia</option>
        <option>Argentina</option>
        <option>Vietnam</option>
        <option>New Zealand</option>
        <option>Mauritius</option>
        <option>Ecuador</option>
      </select>
    `
  },
  {
    title: "🛂 Passport",
    content: `
      <label>Passport held</label>
      <select>
        <option>UK Passport</option>
        <option>EU Passport</option>
      </select>
    `
  },
  {
    title: "💰 Monthly Income (£)",
    content: `
      <input type="number" placeholder="e.g. 2000" />
    `
  },
  {
    title: "🏥 Health Status",
    content: `
      <select>
        <option>Working</option>
        <option>Retired</option>
      </select>
    `
  },
  {
    title: "🏠 Housing Plan",
    content: `
      <select>
        <option>Rent</option>
        <option>Buy</option>
      </select>
    `
  },
  {
    title: "💸 Tax Awareness",
    content: `<p>Understand tax residency & double taxation rules.</p>`
  },
  {
    title: "🏦 Banking",
    content: `<p>Local vs international banking considerations.</p>`
  },
  {
    title: "📑 Visas",
    content: `<p>Visa types, renewals, and risks.</p>`
  },
  {
    title: "🚗 Transport",
    content: `<p>Driving licences, car imports, transport costs.</p>`
  },
  {
    title: "📦 Moving",
    content: `<p>Shipping, pets, relocation logistics.</p>`
  },
  {
    title: "✅ Summary",
    content: `<p>Your relocation planning is complete.</p>`
  }
];

startBtn.addEventListener("click", () => {
  currentPhase = 0;
  app.innerHTML = "";
  renderNextPhase();
});

function renderNextPhase() {
  if (currentPhase >= phases.length) return;

  const phase = phases[currentPhase];
  const div = document.createElement("div");
  div.className = "phase";

  div.innerHTML = `
    <h2>${phase.title}</h2>
    ${phase.content}
    <button>Continue</button>
  `;

  div.querySelector("button").addEventListener("click", () => {
    currentPhase++;
    updateProgress();
    renderNextPhase();
  });

  app.appendChild(div);
}

function updateProgress() {
  progressText.textContent = `Phase ${currentPhase} of ${phases.length}`;
  progressFill.style.width = `${(currentPhase / phases.length) * 100}%`;
}
