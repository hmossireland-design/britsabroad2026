// ===============================
// COUNTRY DATA (30 COUNTRIES)
// ===============================
const countries = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    incomeRequired: 870,
    tax: "10% pension tax (NHR)",
    healthcare: "Public + private mix",
    notes: "Large UK expat community, warm climate, EU access"
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    incomeRequired: 2400,
    tax: "Progressive (19–47%)",
    healthcare: "Excellent public healthcare",
    notes: "Sunny lifestyle, no work allowed on NLV"
  },
  Ireland: {
    visa: "No visa required",
    incomeRequired: 0,
    tax: "Progressive (20–40%)",
    healthcare: "Public + private",
    notes: "English-speaking, high cost of living"
  },
  France: {
    visa: "Long-Stay Visitor",
    incomeRequired: 1800,
    tax: "Progressive",
    healthcare: "S1 access for pensioners",
    notes: "Excellent healthcare, language barrier"
  },
  Italy: {
    visa: "Elective Residence",
    incomeRequired: 2600,
    tax: "7% flat tax (southern regions)",
    healthcare: "Public system available",
    notes: "Bureaucracy but excellent lifestyle"
  },
  Greece: {
    visa: "Financially Independent",
    incomeRequired: 3500,
    tax: "7% flat tax option",
    healthcare: "Public & private",
    notes: "Islands, climate, slower admin"
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    incomeRequired: 2000,
    tax: "Low tax, pension exemptions",
    healthcare: "GESY system",
    notes: "English widely spoken"
  },
  Malta: {
    visa: "Retirement Programme",
    incomeRequired: 830,
    tax: "Foreign income remittance basis",
    healthcare: "Strong private sector",
    notes: "English official language"
  },
  UAE: {
    visa: "Retirement Visa",
    incomeRequired: 4200,
    tax: "0% income tax",
    healthcare: "Private only",
    notes: "No permanent residency path"
  },
  Thailand: {
    visa: "Retirement Visa (50+)",
    incomeRequired: 1500,
    tax: "Territorial",
    healthcare: "Excellent private hospitals",
    notes: "Low cost tropical living"
  },
  Malaysia: {
    visa: "MM2H",
    incomeRequired: 1500,
    tax: "Territorial",
    healthcare: "Affordable private care",
    notes: "English spoken"
  },
  Panama: {
    visa: "Pensionado",
    incomeRequired: 1000,
    tax: "No tax on foreign income",
    healthcare: "Private recommended",
    notes: "Major senior discounts"
  },
  Mexico: {
    visa: "Temporary Resident",
    incomeRequired: 2500,
    tax: "Territorial",
    healthcare: "Private popular",
    notes: "Culture, affordability"
  },
  CostaRica: {
    visa: "Pensionado",
    incomeRequired: 1000,
    tax: "Territorial",
    healthcare: "Caja + private",
    notes: "Nature-focused lifestyle"
  },
  Hungary: {
    visa: "Residence Permit",
    incomeRequired: 150,
    tax: "Flat 15%",
    healthcare: "Private recommended",
    notes: "Very low cost EU"
  },
  Poland: {
    visa: "Temporary Residence",
    incomeRequired: 160,
    tax: "Progressive",
    healthcare: "Private faster",
    notes: "Very affordable EU"
  },
  Bulgaria: {
    visa: "D Visa",
    incomeRequired: 1000,
    tax: "Flat 10%",
    healthcare: "Private preferred",
    notes: "Cheapest EU country"
  },
  Slovenia: {
    visa: "Long-term Residence",
    incomeRequired: 1000,
    tax: "Progressive",
    healthcare: "Public system",
    notes: "Safe, scenic"
  },
  Slovakia: {
    visa: "Temporary Residence",
    incomeRequired: 800,
    tax: "Flat 19%",
    healthcare: "Public & private",
    notes: "Low cost, colder winters"
  },
  Indonesia: {
    visa: "Retirement KITAS",
    incomeRequired: 1500,
    tax: "Territorial",
    healthcare: "Private essential",
    notes: "Bali lifestyle"
  },
  Colombia: {
    visa: "Pension Visa",
    incomeRequired: 900,
    tax: "Territorial",
    healthcare: "Private popular",
    notes: "Great cities, affordability"
  },
  Mauritius: {
    visa: "Retired Non-Citizen",
    incomeRequired: 1500,
    tax: "Low tax",
    healthcare: "Private",
    notes: "Island living"
  },
  Ecuador: {
    visa: "Pensioner Visa",
    incomeRequired: 800,
    tax: "Territorial",
    healthcare: "Very affordable",
    notes: "Extremely low cost"
  },
  Uruguay: {
    visa: "Residency",
    incomeRequired: 1500,
    tax: "Territorial option",
    healthcare: "Good quality",
    notes: "Stable, safe"
  },
  Chile: {
    visa: "Retirement Visa",
    incomeRequired: 1200,
    tax: "Territorial",
    healthcare: "Excellent private",
    notes: "High quality of life"
  },
  Latvia: {
    visa: "Temporary Residence",
    incomeRequired: 1100,
    tax: "Progressive",
    healthcare: "Private faster",
    notes: "Low cost EU capital"
  },
  Canada: {
    visa: "Family / Skilled",
    incomeRequired: 0,
    tax: "High progressive",
    healthcare: "Public",
    notes: "No retirement visa"
  },
  Australia: {
    visa: "Parent / Family Visa",
    incomeRequired: 0,
    tax: "Progressive",
    healthcare: "Medicare access",
    notes: "Very expensive entry"
  },
  NewZealand: {
    visa: "Investor / Family",
    incomeRequired: 0,
    tax: "Progressive",
    healthcare: "Public & private",
    notes: "Strict immigration"
  }
};

// ===============================
// POPULATE COUNTRY DROPDOWN
// ===============================
const countrySelect = document.getElementById("countrySelect");

Object.keys(countries).forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

// ===============================
// SUMMARY GENERATOR
// ===============================
function generateSummary() {
  const country = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visaRoute = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  if (!country) {
    alert("Please select a country first.");
    return;
  }

  const c = countries[country];

  document.getElementById("output").innerHTML = `
    <h3>📍 Destination: ${country}</h3>
    <p><strong>Visa Route:</strong> ${c.visa}</p>
    <p><strong>Income Required:</strong> £${c.incomeRequired}/month</p>
    <p><strong>Tax Treatment:</strong> ${c.tax}</p>
    <p><strong>Healthcare:</strong> ${c.healthcare}</p>
    <p><strong>Notes:</strong> ${c.notes}</p>
    <hr>
    <p><strong>Your Profile:</strong></p>
    <ul>
      <li>Age: ${age}</li>
      <li>Monthly Income: £${income}</li>
      <li>Housing: ${housing}</li>
      <li>Banking: ${banking}</li>
      <li>Transport: ${transport}</li>
      <li>Lifestyle: ${lifestyle}</li>
      <li>Risk Tolerance: ${risk}</li>
    </ul>
    <p><strong>Next Steps:</strong> Visa application, tax planning, healthcare registration.</p>
  `;
}
