document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     COUNTRY INTELLIGENCE DATA
     ========================== */

  const countries = {
    Portugal: { visa: "D7", taxFreePension: false, lowCost: false, retireFriendly: true },
    Spain: { visa: "NLV", taxFreePension: false, lowCost: false, retireFriendly: true },
    Ireland: { visa: "CTA", taxFreePension: false, lowCost: false, retireFriendly: false },
    Cyprus: { visa: "Category F", taxFreePension: true, lowCost: true, retireFriendly: true },
    Malta: { visa: "MRP", taxFreePension: true, lowCost: false, retireFriendly: true },
    France: { visa: "Visitor", taxFreePension: false, lowCost: false, retireFriendly: true },
    UAE: { visa: "Retirement", taxFreePension: true, lowCost: false, retireFriendly: true },
    Italy: { visa: "Elective", taxFreePension: true, lowCost: true, retireFriendly: true },
    Greece: { visa: "FIP", taxFreePension: true, lowCost: true, retireFriendly: true },
    Thailand: { visa: "Retirement", taxFreePension: true, lowCost: true, retireFriendly: true },
    Malaysia: { visa: "MM2H", taxFreePension: true, lowCost: true, retireFriendly: true },
    Panama: { visa: "Pensionado", taxFreePension: true, lowCost: true, retireFriendly: true },
    Mexico: { visa: "Temp Resident", taxFreePension: false, lowCost: true, retireFriendly: true },
    CostaRica: { visa: "Pensionado", taxFreePension: true, lowCost: false, retireFriendly: true },
    Hungary: { visa: "Residence", taxFreePension: false, lowCost: true, retireFriendly: false },
    Poland: { visa: "Temporary", taxFreePension: false, lowCost: true, retireFriendly: false },
    Slovenia: { visa: "Residence", taxFreePension: false, lowCost: false, retireFriendly: false },
    Slovakia: { visa: "Temporary", taxFreePension: false, lowCost: true, retireFriendly: false },
    Bulgaria: { visa: "D Visa", taxFreePension: true, lowCost: true, retireFriendly: true },
    Indonesia: { visa: "KITAS", taxFreePension: true, lowCost: true, retireFriendly: true },
    Colombia: { visa: "Pension", taxFreePension: false, lowCost: true, retireFriendly: true },
    Mauritius: { visa: "Retired", taxFreePension: true, lowCost: false, retireFriendly: true },
    Belize: { visa: "QRP", taxFreePension: true, lowCost: true, retireFriendly: true },
    Ecuador: { visa: "Pensioner", taxFreePension: true, lowCost: true, retireFriendly: true },
    Uruguay: { visa: "Residency", taxFreePension: true, lowCost: false, retireFriendly: true },
    Chile: { visa: "Retirement", taxFreePension: false, lowCost: false, retireFriendly: true },
    Latvia: { visa: "Temporary", taxFreePension: false, lowCost: true, retireFriendly: false }
  };

  /* ==========================
     POPULATE COUNTRY SELECT
     ========================== */

  const countrySelect = document.getElementById("countrySelect");
  Object.keys(countries).forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    countrySelect.appendChild(opt);
  });

  /* ==========================
     RECOMMENDATION ENGINE
     ========================== */

  window.generateRecommendations = function () {
    const income = parseInt(document.getElementById("income").value || 0);
    const age = parseInt(document.getElementById("age").value || 0);
    const hasPension = document.getElementById("pension").checked;

    let scores = [];

    Object.entries(countries).forEach(([name, data]) => {
      let score = 0;

      // Income logic
      if (income < 2000 && data.lowCost) score += 3;
      if (income >= 2000 && !data.lowCost) score += 2;

      // Age logic
      if (age >= 50 && data.retireFriendly) score += 3;
      if (age < 50 && !data.retireFriendly) score += 2;

      // Pension logic
      if (hasPension && data.taxFreePension) score += 3;

      scores.push({ name, score });
    });

    scores.sort((a, b) => b.score - a.score);
    const top3 = scores.slice(0, 3);

    const output = document.getElementById("output");
    output.innerHTML = `
      <h2>🏆 Best 3 Countries For You</h2>
      <ol>
        <li><strong>${top3[0].name}</strong> — Visa: ${countries[top3[0].name].visa}</li>
        <li><strong>${top3[1].name}</strong> — Visa: ${countries[top3[1].name].visa}</li>
        <li><strong>${top3[2].name}</strong> — Visa: ${countries[top3[2].name].visa}</li>
      </ol>

      <p><em>Based on income, age, and pension profile.</em></p>
    `;
  };

});
