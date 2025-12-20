const countries = {
  Portugal: {
    visa: "D7 Passive Income Visa (~€870/month)",
    tax: "10% pension tax (NHR legacy), territorial taxation possible",
    notes: "Large UK expat community, excellent healthcare, EU access"
  },
  Spain: {
    visa: "Non-Lucrative Visa (~€2,400/month)",
    tax: "Worldwide income taxable once resident",
    notes: "Excellent healthcare, strong bureaucracy"
  },
  Ireland: {
    visa: "No visa required (Common Travel Area)",
    tax: "Worldwide income if resident",
    notes: "High cost of living, English-speaking"
  },
  Australia: {
    visa: "Family / contributory parent routes",
    tax: "Worldwide income",
    notes: "Strict health checks, expensive visas"
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    tax: "Non-dom regime available",
    notes: "Low tax, English widely spoken"
  },
  Malta: {
    visa: "Retirement Programme",
    tax: "Foreign income remittance basis",
    notes: "English official language"
  },
  France: {
    visa: "Long-Stay Visitor",
    tax: "Worldwide income",
    notes: "S1 healthcare for pensioners"
  },
  UAE: {
    visa: "Retirement / Property Visa",
    tax: "0% income tax",
    notes: "No permanent residency path"
  },
  Thailand: {
    visa: "Retirement Visa (50+)",
    tax: "Territorial taxation",
    notes: "Low cost, frequent renewals"
  },
  Italy: {
    visa: "Elective Residence Visa",
    tax: "7% flat tax in southern regions",
    notes: "Heavy bureaucracy"
  },
  Greece: {
    visa: "Financially Independent Visa",
    tax: "7% flat pension tax option",
    notes: "Golden Visa alternative"
  },
  Canada: {
    visa: "Family or points-based",
    tax: "Worldwide income",
    notes: "Cold climate"
  },
  NewZealand: {
    visa: "Investment / Family",
    tax: "Worldwide income",
    notes: "Very strict entry"
  },
  Malaysia: {
    visa: "MM2H",
    tax: "Territorial taxation",
    notes: "Low cost, English widely spoken"
  },
  Panama: {
    visa: "Pensionado",
    tax: "No tax on foreign income",
    notes: "Senior discounts"
  },
  Mexico: {
    visa: "Temporary Resident",
    tax: "Worldwide if resident",
    notes: "Regional safety differences"
  },
  CostaRica: {
    visa: "Pensionado",
    tax: "Territorial",
    notes: "Nature-focused lifestyle"
  },
  Hungary: {
    visa: "Residence Permit",
    tax: "15% flat tax",
    notes: "Low EU costs"
  },
  Poland: {
    visa: "Temporary Residence",
    tax: "Progressive",
    notes: "Very affordable"
  },
  Slovenia: {
    visa: "Long-term Residence",
    tax: "Worldwide",
    notes: "Safe and scenic"
  },
  Slovakia: {
    visa: "Temporary Residence",
    tax: "Flat tax",
    notes: "Low cost EU"
  },
  Bulgaria: {
    visa: "D Visa",
    tax: "10% flat tax",
    notes: "Cheapest EU option"
  },
  Indonesia: {
    visa: "Retirement KITAS",
    tax: "Territorial",
    notes: "Earthquake risk"
  },
  Colombia: {
    visa: "Pension Visa",
    tax: "Worldwide if resident",
    notes: "Improving safety"
  },
  Mauritius: {
    visa: "Retired Non-Citizen",
    tax: "15% flat tax",
    notes: "Island lifestyle"
  },
  Belize: {
    visa: "QRP",
    tax: "Tax-free pensions",
    notes: "English speaking"
  },
  Ecuador: {
    visa: "Pensioner Visa",
    tax: "Territorial",
    notes: "Very low cost"
  },
  Uruguay: {
    visa: "Residency",
    tax: "Territorial option",
    notes: "Stable democracy"
  },
  Chile: {
    visa: "Retirement Visa",
    tax: "Worldwide",
    notes: "Strong healthcare"
  },
  Latvia: {
    visa: "Temporary Residence",
    tax: "Progressive",
    notes: "Low EU costs"
  }
};

// Populate dropdown
const select = document.getElementById("countrySelect");
select.innerHTML = `<option value="">Select country</option>`;
Object.keys(countries).forEach(c => {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = c;
  select.appendChild(opt);
});

function generateSummary() {
  const country = select.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;

  if (!country) {
    alert("Please select a country");
    return;
  }

  const c = countries[country];

  document.getElementById("output").innerHTML = `
    <h3>${country} Relocation Summary</h3>
    <p><strong>Recommended Visa:</strong> ${c.visa}</p>
    <p><strong>Tax Position:</strong> ${c.tax}</p>
    <p><strong>Key Notes:</strong> ${c.notes}</p>
    <p><strong>Your Profile:</strong> Age ${age}, Income £${income}/month</p>
    <p><strong>Status:</strong> Country locked as primary destination.</p>
  `;
}
