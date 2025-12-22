const app = document.getElementById("app");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

let currentPhase = 1;

const data = {
  country: "",
  age: "",
  income: "",
  healthcare: "",
  housing: ""
};

const countries = [
  "Portugal","Spain","France","Cyprus","Italy","Greece","Ireland",
  "UAE","Thailand","Malaysia","Panama","Mexico","Costa Rica",
  "Bulgaria","Poland","Hungary","Slovakia","Slovenia",
  "Mauritius","Ecuador","Colombia","Indonesia","New Zealand",
  "Australia","Canada","USA","Argentina","Chile","Uruguay","Latvia"
];

function render() {
  updateProgress();

  let html = "";

  if (currentPhase === 1) {
    html = `
      <div class="phase-card">
        <h2>Phase 1: Choose Destination</h2>
        <select id="country">
          <option value="">Select country</option>
          ${countries.map(c => `<option>${c}</option>`).join("")}
        </select>
        <button onclick="saveAndNext('country')">Continue</button>
      </div>`;
  }

  if (currentPhase === 2) {
    html = `
      <div class="phase-card">
        <h2>Phase 2: Your Age</h2>
        <input id="age" type="number" placeholder="Your age">
        <button onclick="saveAndNext('age')">Continue</button>
      </div>`;
  }

  if (currentPhase === 3) {
    html = `
      <div class="phase-card">
        <h2>Phase 3: Monthly Income (£)</h2>
        <input id="income" type="number" placeholder="Monthly income">
        <button onclick="saveAndNext('income')">Continue</button>
      </div>`;
  }

  if (currentPhase === 4) {
    html = `
      <div class="phase-card">
        <h2>Phase 4: Healthcare Preference</h2>
        <select id="healthcare">
          <option value="">Select</option>
          <option>Private</option>
          <option>Public</option>
          <option>Mixed</option>
        </select>
        <button onclick="saveAndNext('healthcare')">Continue</button>
      </div>`;
  }

  if (currentPhase === 5) {
    html = `
      <div class="phase-card">
        <h2>Phase 5: Housing Plan</h2>
        <select id="housing">
          <option value="">Select</option>
          <option>Rent</option>
          <option>Buy</option>
          <option>Undecided</option>
        </select>
        <button onclick="saveAndNext('housing')">Continue</button>
      </div>`;
  }

  if (currentPhase === 11) {
    html = `
      <div class="phase-card">
        <h2>Your Relocation Summary</h2>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Income:</strong> £${data.income}</p>
        <p><strong>Healthcare:</strong> ${data.healthcare}</p>
        <p><strong>Housing:</strong> ${data.housing}</p>
        <p><em>Next steps will include visa rules, tax exposure and healthcare setup.</em></p>
      </div>`;
  }

  app.innerHTML = html;
}

function saveAndNext(field) {
  const el = document.getElementById(field);
  if (!el || !el.value) return alert("Please complete this step");
  data[field] = el.value;
  currentPhase++;
  if (currentPhase > 11) currentPhase = 11;
  render();
}

function updateProgress() {
  progressText.textContent = `Phase ${currentPhase} of 11`;
  progressFill.style.width = `${(currentPhase / 11) * 100}%`;
}

render();
