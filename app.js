/* =========================
   COUNTRY DATABASE
   ========================= */

const countryData = {
  Portugal: { cost: 2, lifestyle: "coastal", risk: "low", healthcare: "public", tax: "10%", visa: "D7 Visa" },
  Spain: { cost: 2, lifestyle: "coastal", risk: "low", healthcare: "public", tax: "progressive", visa: "Non-Lucrative" },
  Ireland: { cost: 3, lifestyle: "city", risk: "low", healthcare: "public", tax: "high", visa: "None" },
  Cyprus: { cost: 2, lifestyle: "coastal", risk: "low", healthcare: "mixed", tax: "low", visa: "Category F" },
  France: { cost: 3, lifestyle: "city", risk: "low", healthcare: "public", tax: "high", visa: "Visitor Visa" },
  UAE: { cost: 3, lifestyle: "city", risk: "medium", healthcare: "private", tax: "0%", visa: "Retirement Visa" },
  Thailand: { cost: 1, lifestyle: "coastal", risk: "medium", healthcare: "private", tax: "territorial", visa: "Retirement Visa" },
  Italy: { cost: 2, lifestyle: "rural", risk: "medium", healthcare: "public", tax: "7% south", visa: "Elective" },
  Greece: { cost: 2, lifestyle: "coastal", risk: "medium", healthcare: "public", tax: "progressive", visa: "FIP" },
  Malaysia: { cost: 1, lifestyle: "city", risk: "medium", healthcare: "private", tax: "territorial", visa: "MM2H" },
  Panama: { cost: 1, lifestyle: "coastal", risk: "medium", healthcare: "mixed", tax: "0% foreign", visa: "Pensionado" },
  Mexico: { cost: 1, lifestyle: "city", risk: "medium", healthcare: "private", tax: "progressive", visa: "Temp Resident" },
  Hungary: { cost: 1, lifestyle: "city", risk: "low", healthcare: "public", tax: "15%", visa: "Residence Permit" },
  Poland: { cost: 1, lifestyle: "city", risk: "low", healthcare: "public", tax: "low", visa: "Temporary Residence" },
  Bulgaria: { cost: 1, lifestyle: "coastal", risk: "medium", healthcare: "public", tax: "10%", visa: "D Visa" }
};

/* =========================
   POPULATE COUNTRY SELECT
   ========================= */

const countrySelect = document.getElementById("countrySelect");

Object.keys(countryData).forEach(c => {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = c;
  countrySelect.appendChild(opt);
});

/* =========================
   RECOMMENDATION ENGINE
   ========================= */

function scoreCountry(country, user) {
  let score = 0;
  const c = countryData[country];

  if (user.income < 2000 && c.cost === 1) score += 3;
  if (user.income >= 2000 && c.cost <= 2) score += 2;

  if (user.lifestyle && c.lifestyle === user.lifestyle) score += 3;
  if (user.risk && c.risk === user.risk) score += 2;
  if (user.healthcare && c.healthcare === user.healthcare.toLowerCase()) score += 2;

  return score;
}

/* =========================
   GENERATE SUMMARY
   ========================= */

function generateSummary() {
  const user = {
    country: countrySelect.value,
    income: Number(document.getElementById("income").value || 0),
    lifestyle: document.getElementById("lifestyle").value?.toLowerCase(),
    risk: document.getElementById("risk").value?.toLowerCase(),
    healthcare: document.getElementById("healthcare").value
  };

  const output = document.getElementById("output");

  if (!user.country) {
    output.innerHTML = "<p>Please select a country.</p>";
    return;
  }

  const rankings = Object.keys(countryData)
    .map(c => ({ country: c, score: scoreCountry(c, user) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  output.innerHTML = `
    <h3>Your Selected Country: ${user.country}</h3>
    <p><strong>Visa:</strong> ${countryData[user.country].visa}</p>
    <p><strong>Tax:</strong> ${countryData[user.country].tax}</p>

    <hr>

    <h3>Top 3 Recommended Alternatives</h3>
    <ol>
      ${rankings.map(r => `<li>${r.country}</li>`).join("")}
    </ol>

    <p><em>Recommendations are based on income, lifestyle, risk tolerance and healthcare preference.</em></p>
  `;
}
