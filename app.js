const app = document.getElementById("app");

const countries = [
  "Portugal","Spain","Ireland","Australia","Cyprus","Malta","France","UAE",
  "Thailand","Italy","Greece","Canada","New Zealand","Malaysia","Panama",
  "Mexico","Costa Rica","Hungary","Poland","Slovenia","Slovakia","Bulgaria",
  "Indonesia","Colombia","Mauritius","Belize","Ecuador","Uruguay","Chile","Latvia"
];

function renderApp() {
  app.innerHTML = `
    <section class="card">
      <h2>🌍 Phase 1: Destination</h2>
      <select id="country">
        ${countries.map(c => `<option value="${c}">${c}</option>`).join("")}
      </select>
    </section>

    <section class="card">
      <h2>🛂 Phase 2: Passport</h2>
      <select id="passport">
        <option>UK Passport</option>
        <option>EU Passport</option>
        <option>Dual Citizen</option>
      </select>
    </section>

    <section class="card">
      <h2>💰 Phase 3: Monthly Income (£)</h2>
      <input id="income" type="number" placeholder="e.g. 2500">
    </section>

    <section class="card">
      <h2>🏥 Phase 4: Healthcare</h2>
      <select id="health">
        <option>Private Insurance</option>
        <option>State + Private</option>
        <option>State Only</option>
      </select>
    </section>

    <section class="card">
      <h2>🏠 Phase 5: Housing Plan</h2>
      <select id="housing">
        <option>Rent</option>
        <option>Buy</option>
      </select>
    </section>

    <section class="card">
      <h2>💸 Phase 6: Tax Awareness</h2>
      <select id="tax">
        <option>UK Tax Resident</option>
        <option>Foreign Tax Resident</option>
        <option>Unsure</option>
      </select>
    </section>

    <section class="card">
      <h2>🏦 Phase 7: Banking</h2>
      <select id="banking">
        <option>UK Bank Only</option>
        <option>International Bank</option>
        <option>Local Bank</option>
      </select>
    </section>

    <section class="card">
      <h2>📑 Phase 8: Visa Knowledge</h2>
      <select id="visa">
        <option>None</option>
        <option>Basic Research</option>
        <option>Already Applied</option>
      </select>
    </section>

    <section class="card">
      <h2>🚗 Phase 9: Transport</h2>
      <select id="transport">
        <option>No Car</option>
        <option>Buy Locally</option>
        <option>Import Vehicle</option>
      </select>
    </section>

    <section class="card">
      <h2>📦 Phase 10: Moving Complexity</h2>
      <select id="moving">
        <option>Minimal</option>
        <option>Moderate</option>
        <option>Complex (pets, shipping)</option>
      </select>
    </section>

    <section class="card final">
      <h2>✅ Phase 11: Your Result</h2>
      <button onclick="generateResult()">Generate My Relocation Plan</button>
      <div id="result"></div>
    </section>
  `;
}

function generateResult() {
  const country = document.getElementById("country").value;
  const income = document.getElementById("income").value;

  document.getElementById("result").innerHTML = `
    <h3>Your Plan for ${country}</h3>
    <p>Based on your inputs, ${country} is viable with a monthly income of £${income || "?"}.</p>
    <p>Next steps: visa planning, tax positioning, and healthcare setup.</p>
  `;
}

renderApp();
