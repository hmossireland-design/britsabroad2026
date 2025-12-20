/* =========================
   BRITS ABROAD 2026 – APP.JS
   Country Logic v1
========================= */

// -------------------------
// COUNTRY DATABASE (30)
// -------------------------
const countryData = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    minIncome: 870,
    tax: "10% on pensions (NHR-style)",
    healthcare: "Public + S1 for UK pensioners",
    notes: "Very popular with Brits, rising costs"
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    minIncome: 2400,
    tax: "Worldwide income taxable",
    healthcare: "Private required initially",
    notes: "Sunny, but strict income rules"
  },
  Ireland: {
    visa: "No visa required",
    minIncome: 0,
    tax: "Irish income tax applies",
    healthcare: "Public system available",
    notes: "High cost of living"
  },
  Cyprus: {
    visa: "Pink Slip / Category F",
    minIncome: 1000,
    tax: "Low tax, pension advantages",
    healthcare: "GESY + private",
    notes: "English widely spoken"
  },
  France: {
    visa: "Long Stay Visitor Visa",
    minIncome: 1800,
    tax: "Progressive income tax",
    healthcare: "S1 available for pensioners",
    notes: "Excellent healthcare"
  },
  Italy: {
    visa: "Elective Residence",
    minIncome: 2600,
    tax: "7% flat tax in south",
    healthcare: "Public system",
    notes: "Bureaucratic"
  },
  Greece: {
    visa: "Financially Independent",
    minIncome: 3500,
    tax: "Flat tax options available",
    healthcare: "Public + private",
    notes: "Golden Visa option"
  },
  Malta: {
    visa: "Retirement Programme",
    minIncome: 833,
    tax: "Foreign income basis",
    healthcare: "Public + private",
    notes: "English official language"
  },
  UAE: {
    visa: "Retirement / Property Visa",
    minIncome: 4200,
    tax: "0% income tax",
    healthcare: "Private only",
    notes: "No permanent residency"
  },
  Thailand: {
    visa: "Retirement Visa (50+)",
    minIncome: 1500,
    tax: "Territorial tax system",
    healthcare: "Private",
    notes: "Very affordable"
  },
  Malaysia: {
    visa: "MM2H",
    minIncome: 1500,
    tax: "Territorial",
    healthcare: "Private",
    notes: "English widely spoken"
  },
  Panama: {
    visa: "Pensionado",
    minIncome: 1000,
    tax: "No tax on foreign income",
    healthcare: "Private",
    notes: "Senior discounts"
  },
  Mexico: {
    visa: "Temporary Resident",
    minIncome: 2500,
    tax: "Worldwide income",
    healthcare: "Private",
    notes: "Huge expat scene"
  },
  CostaRica: {
    visa: "Pensionado",
    minIncome: 1000,
    tax: "Territorial",
    healthcare: "Public + private",
    notes: "Pura Vida lifestyle"
  },
  Hungary: {
    visa: "Residence Permit",
    minIncome: 150,
    tax: "Flat 15%",
    healthcare: "Private initially",
    notes: "Low cost EU"
  },
  Poland: {
    visa: "Temporary Residence",
    minIncome: 160,
    tax: "Progressive",
    healthcare: "Public",
    notes: "Very affordable EU"
  },
  Bulgaria: {
    visa: "D Visa",
    minIncome: 1000,
    tax: "Flat 10%",
    healthcare: "Private",
    notes: "Cheapest EU"
  },
  Slovenia: {
    visa: "Long-term Residence",
    minIncome: 1000,
    tax: "Progressive",
    healthcare: "Public",
    notes: "Safe & scenic"
  },
  Slovakia: {
    visa: "Temporary Residence",
    minIncome: 800,
    tax: "Flat 19%",
    healthcare: "Public",
    notes: "Low cost EU"
  },
  Latvia: {
    visa: "Temporary Residence",
    minIncome: 1100,
    tax: "Progressive",
    healthcare: "Public",
    notes: "Cold winters"
  },
  Indonesia: {
    visa: "Retirement KITAS",
    minIncome: 1500,
    tax: "Territorial",
    healthcare: "Private",
    notes: "Bali popular"
  },
  Colombia: {
    visa: "Pension Visa",
    minIncome: 900,
    tax: "Worldwide",
    healthcare: "Private",
    notes: "Emerging expat hub"
  },
  Mauritius: {
    visa: "Retired Non-Citizen",
    minIncome: 1500,
    tax: "Low tax regime",
    healthcare: "Private",
    notes: "Island lifestyle"
  },
  Belize: {
    visa: "QRP",
    minIncome: 2000,
    tax: "Tax-free pension",
    healthcare: "Private",
    notes: "English speaking"
  },
  Ecuador: {
    visa: "Pensioner Visa",
    minIncome: 800,
    tax: "Territorial",
    healthcare: "Public + private",
    notes: "Very low cost"
  },
  Uruguay: {
    visa: "Residency",
    minIncome: 1500,
    tax: "Progressive",
    healthcare: "Public",
    notes: "Stable & safe"
  },
  Chile: {
    visa: "Retirement Visa",
    minIncome: 1200,
    tax: "Worldwide",
    healthcare: "Public",
    notes: "Good healthcare"
  },
  NewZealand: {
    visa: "Investor / Family",
    minIncome: 3000,
    tax: "Worldwide",
    healthcare: "Public",
    notes: "Isolated but safe"
  },
  Australia: {
    visa: "Parent / Family Visa",
    minIncome: 3000,
    tax: "Worldwide",
    healthcare: "Public",
    notes: "Very expensive visas"
  }
};

// -------------------------
// USER STATE
// -------------------------
const user = {};

// -------------------------
// INIT
// -------------------------
document.addEventListener("DOMContentLoaded", () => {
  populateCountries();
});

// -------------------------
// POPULATE COUNTRY SELECT
// -------------------------
function populateCountries() {
  const select = document.getElementById("countrySelect");
  if (!select) return;

  Object.keys(countryData).forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
  });
}

// -------------------------
// SUMMARY GENERATOR
// -------------------------
function generateSummary() {
  user.country = document.getElementById("countrySelect").value;
  user.age = document.getElementById("age").value;
  user.income = document.getElementById("income").value;
  user.healthcare = document.getElementById("healthcare").value;
  user.housing = document.getElementById("housing").value;
  user.banking = document.getElementById("banking").value;
  user.transport = document.getElementById("transport").value;
  user.visaRoute = document.getElementById("visa").value;
  user.lifestyle = document.getElementById("lifestyle").value;
  user.risk = document.getElementById("risk").value;

  if (!user.country) {
    alert("Please select a destination country");
    return;
  }

  const data = countryData[user.country];
  const output = document.getElementById("output");

  output.innerHTML = `
    <h3>Your Relocation Summary: ${user.country}</h3>
    <p><strong>Visa Route:</strong> ${data.visa}</p>
    <p><strong>Minimum Income:</strong> £${data.minIncome}/month</p>
    <p><strong>Tax Treatment:</strong> ${data.tax}</p>
    <p><strong>Healthcare:</strong> ${data.healthcare}</p>
    <p><strong>Notes:</strong> ${data.notes}</p>
    <hr>
    <p><strong>Your Income:</strong> £${user.income}/month</p>
    <p><strong>Housing Plan:</strong> ${user.housing}</p>
    <p><strong>Lifestyle Preference:</strong> ${user.lifestyle}</p>
  `;
}
