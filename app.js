const app = document.getElementById("app");

const phases = [
  {
    title: "🌍 Destination Preferences",
    content: `
      <label>Preferred climate</label>
      <select>
        <option value="">Select</option>
        <option>Warm & Sunny</option>
        <option>Seasonal</option>
        <option>Cool</option>
      </select>
    `
  },
  {
    title: "🛂 Passport & Residency",
    content: `
      <label>Passport held</label>
      <select>
        <option>UK Passport</option>
        <option>EU Passport</option>
        <option>Dual Nationality</option>
      </select>
    `
  },
  {
    title: "💰 Monthly Income / Pension",
    content: `
      <label>Estimated monthly income (£)</label>
      <input type="number" placeholder="e.g. 1800">
    `
  },
  {
    title: "🏥 Healthcare Situation",
    content: `
      <select>
        <option>Working / Private Insurance</option>
        <option>UK State Pension (S1 eligible)</option>
        <option>Private International Insurance</option>
      </select>
    `
  },
  {
    title: "🏠 Housing Plan",
    content: `
      <select>
        <option>Rent long-term</option>
        <option>Buy property</option>
        <option>Undecided</option>
      </select>
    `
  },
  {
    title: "💸 Tax Awareness",
    content: `
      <p>
        Tax residency rules vary by country. Many destinations tax worldwide
        income after 183 days. Planning ahead is essential.
      </p>
    `
  },
  {
    title: "🏦 Banking & Finance",
    content: `
      <p>
        Consider access to EU banks, local accounts, and international fintech
        options like Wise or Revolut.
      </p>
    `
  },
  {
    title: "📑 Visas & Renewals",
    content: `
      <p>
        Visa conditions can change. Always confirm minimum income,
        renewal timelines, and health insurance rules.
      </p>
    `
  },
  {
    title: "🚗 Transport & Mobility",
    content: `
      <p>
        Driving licence exchanges, vehicle imports, and public transport
        quality vary significantly.
      </p>
    `
  },
  {
    title: "📦 Relocation Practicalities",
    content: `
      <p>
        Shipping, pets, customs, and downsizing are often underestimated.
        Early planning reduces stress and cost.
      </p>
    `
  },
  {
    title: "✅ Relocation Readiness",
    content: `
      <p>
        Your final score and recommended countries will appear here once
        calculations are added.
      </p>
    `
  }
];

function renderAllPhases() {
  app.innerHTML = "";

  phases.forEach(phase => {
    const card = document.createElement("div");
    card.className = "phase-card";
    card.innerHTML = `
      <h2>${phase.title}</h2>
      ${phase.content}
    `;
    app.appendChild(card);
  });
}

renderAllPhases();
