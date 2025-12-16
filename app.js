/*************************************************
 BRITS ABROAD 2026 – CORE APP LOGIC
 Clean rebuild – all phases visible
 Beginner-safe / No frameworks
*************************************************/

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  /* =========================
     PHASE DATA
  ========================= */
  const phases = [
    {
      title: "🌍 Destination",
      html: `
        <label>Where are you considering moving?</label>
        <select id="destination">
          <option value="">-- Select Country --</option>
          <option>Portugal</option>
          <option>Spain</option>
          <option>France</option>
          <option>Cyprus</option>
          <option>Italy</option>
          <option>Greece</option>
          <option>Poland</option>
          <option>Hungary</option>
          <option>Thailand</option>
          <option>Malaysia</option>
          <option>Mexico</option>
          <option>Panama</option>
          <option>New Zealand</option>
          <option>UAE</option>
        </select>
      `
    },
    {
      title: "🛂 Passport & Residency",
      html: `
        <label>Passport held</label>
        <select id="passport">
          <option value="">-- Select --</option>
          <option>UK Passport</option>
          <option>EU Passport</option>
        </select>
      `
    },
    {
      title: "💰 Income",
      html: `
        <label>Monthly Income (£)</label>
        <input type="range" min="500" max="6000" step="100" value="1500"
          oninput="document.getElementById('incomeValue').innerText=this.value">
        <p>£<span id="incomeValue">1500</span> / month</p>
      `
    },
    {
      title: "🏥 Healthcare Status",
      html: `
        <label>Your situation</label>
        <select id="health-status">
          <option value="">-- Select --</option>
          <option>Working / Self-employed</option>
          <option>Retired</option>
          <option>State Pension Only</option>
        </select>
      `
    },
    {
      title: "🏠 Housing",
      html: `
        <label>Rent or Buy?</label>
        <select id="housing">
          <option value="">-- Select --</option>
          <option>Rent</option>
          <option>Buy</option>
        </select>

        <label>Monthly Housing Budget (£)</label>
        <input type="range" min="300" max="3000" step="50" value="800"
          oninput="document.getElementById('housingValue').innerText=this.value">
        <p>£<span id="housingValue">800</span> / month</p>

        <label>Preferred Area</label>
        <select id="area">
          <option value="">-- Select --</option>
          <option>City</option>
          <option>Town</option>
          <option>Rural</option>
        </select>
      `
    },
    {
      title: "💸 Tax Reality",
      html: `
        <p>
          Your tax position depends on <strong>residency, income source, and destination</strong>.
          Some countries offer low or zero tax on pensions or foreign income.
        </p>
      `
    },
    {
      title: "🏦 Banking",
      html: `
        <label>Preferred banking setup</label>
        <select>
          <option>UK Bank Only</option>
          <option>Local Bank Abroad</option>
          <option>International / Offshore</option>
        </select>
      `
    },
    {
      title: "📑 Visa Type",
      html: `
        <label>Expected visa route</label>
        <select>
          <option>Passive Income / Retirement</option>
          <option>Work / Digital Nomad</option>
          <option>Family / Ancestry</option>
          <option>Property Investment</option>
        </select>
      `
    },
    {
      title: "🚗 Transport",
      html: `
        <label>Main transport</label>
        <select>
          <option>Public Transport</option>
          <option>Own Car</option>
          <option>No Car</option>
        </select>
      `
    },
    {
      title: "📦 Moving Logistics",
      html: `
        <label>What are you relocating?</label>
        <select>
          <option>Suitcases only</option>
          <option>Small shipment</option>
          <option>Full household</option>
          <option>Including pets</option>
        </select>
      `
    },
    {
      title: "✅ Relocation Snapshot",
      html: `
        <p>
          Based on your answers, this app will soon generate:
        </p>
        <ul>
          <li>Best country matches</li>
          <li>Visa difficulty score</li>
          <li>Tax exposure risk</li>
          <li>Monthly affordability rating</li>
        </ul>
      `
    }
  ];

  /* =========================
     RENDER ALL PHASES
  ========================= */
  phases.forEach((phase, index) => {
    const card = document.createElement("div");
    card.className = "phase-card";

    card.innerHTML = `
      <h2>Phase ${index + 1}: ${phase.title}</h2>
      ${phase.html}
    `;

    app.appendChild(card);
  });
});
