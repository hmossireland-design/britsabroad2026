let currentPhase = 0;
let selectedCountry = null;

const phases = document.querySelectorAll(".phase");

/* ======================
   COUNTRY INTELLIGENCE
   ====================== */
const countryData = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    income: "€870/month minimum",
    tax: "10% pension tax (NHR style regime ending soon)",
    notes: "Very popular with British retirees"
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    income: "€2,400/month",
    tax: "Worldwide taxation once resident",
    notes: "No work allowed on this visa"
  },
  Ireland: {
    visa: "No visa required (CTA)",
    income: "None",
    tax: "Worldwide tax resident",
    notes: "High cost of living"
  },
  Australia: {
    visa: "Parent / Contributory Parent",
    income: "High financial thresholds",
    tax: "Worldwide taxation",
    notes: "Long processing times"
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    income: "€2,000+/month",
    tax: "Non-dom & low pension tax",
    notes: "English widely spoken"
  },
  Malta: {
    visa: "Retirement Programme",
    income: "€10,000/year",
    tax: "Remittance-based taxation",
    notes: "English official language"
  },
  France: {
    visa: "Long-Stay Visitor",
    income: "€1,800/month",
    tax: "Worldwide taxation",
    notes: "Excellent healthcare"
  },
  UAE: {
    visa: "Retirement / Property Visa",
    income: "£4,200/month or property",
    tax: "0% income tax",
    notes: "No permanent residency path"
  },
  Thailand: {
    visa: "Retirement Visa (50+)",
    income: "£1,500/month",
    tax: "Territorial taxation",
    notes: "Very affordable lifestyle"
  },
  Italy: {
    visa: "Elective Residence",
    income: "€31,000/year",
    tax: "7% flat tax in southern regions",
    notes: "Regional bureaucracy varies"
  },
  Greece: {
    visa: "Financially Independent",
    income: "€3,500/month",
    tax: "7% pension tax option",
    notes: "Golden Visa alternative"
  },
  Canada: {
    visa: "Family / Points Based",
    income: "Varies",
    tax: "Worldwide taxation",
    notes: "Cold winters"
  },
  "New Zealand": {
    visa: "Investment / Family",
    income: "High thresholds",
    tax: "Worldwide taxation",
    notes: "Very safe, expensive"
  },
  Malaysia: {
    visa: "MM2H",
    income: "$1,500/month",
    tax: "Territorial taxation",
    notes: "English widely spoken"
  },
  Panama: {
    visa: "Pensionado",
    income: "$1,000/month",
    tax: "No tax on foreign income",
    notes: "Senior discounts"
  },
  Mexico: {
    visa: "Temporary Resident",
    income: "$2,500/month",
    tax: "Worldwide tax if resident",
    notes: "Regional safety varies"
  },
  "Costa Rica": {
    visa: "Pensionado",
    income: "$1,000/month",
    tax: "Territorial taxation",
    notes: "Excellent nature lifestyle"
  },
  Hungary: {
    visa: "Residence Permit",
    income: "Low threshold",
    tax: "15% flat tax",
    notes: "Low cost EU option"
  },
  Poland: {
    visa: "Temporary Residence",
    income: "Very low",
    tax: "Worldwide taxation",
    notes: "Cold winters"
  },
  Slovenia: {
    visa: "Long-Term Residence",
    income: "€1,000/month",
    tax: "Worldwide taxation",
    notes: "Safe & scenic"
  },
  Slovakia: {
    visa: "Temporary Residence",
    income: "€800/month",
    tax: "Worldwide taxation",
    notes: "Affordable EU"
  },
  Bulgaria: {
    visa: "D Visa",
    income: "€1,000/month",
    tax: "10% flat tax",
    notes: "Cheapest EU country"
  },
  Indonesia: {
    visa: "Retirement KITAS",
    income: "$1,500/month",
    tax: "Territorial taxation",
    notes: "Bali popular"
  },
  Colombia: {
    visa: "Pension Visa",
    income: "$900/month",
    tax: "Worldwide if resident",
    notes: "Emerging expat hubs"
  },
  Mauritius: {
    visa: "Retired Non-Citizen",
    income: "$1,500/month",
    tax: "Low territorial tax",
    notes: "Island lifestyle"
  },
  Belize: {
    visa: "QRP",
    income: "$2,000/month",
    tax: "Tax-free pensions",
    notes: "English speaking"
  },
  Ecuador: {
    visa: "Pensioner Visa",
    income: "$800/month",
    tax: "Territorial taxation",
    notes: "Very low cost"
  },
  Uruguay: {
    visa: "Residency",
    income: "$1,500/month",
    tax: "Optional territorial tax",
    notes: "Stable economy"
  },
  Chile: {
    visa: "Retirement Visa",
    income: "Pension proof",
    tax: "Worldwide tax",
    notes: "Strong healthcare"
  },
  Latvia: {
    visa: "Temporary Residence",
    income: "€1,100/month",
    tax: "Worldwide taxation",
    notes: "Affordable EU capital"
  }
};

/* ======================
   COUNTRY SELECTION
   ====================== */
document.querySelectorAll(".country-card").forEach(card => {
  card.onclick = () => {
    document.querySelectorAll(".country-card").forEach(c =>
      c.classList.remove("selected")
    );
    card.classList.add("selected");
    selectedCountry = card.innerText.trim();
  };
});

/* ======================
   PHASE NAVIGATION
   ====================== */
function showPhase(index) {
  phases.forEach(p => p.classList.remove("active"));
  phases[index].classList.add("active");

  document.getElementById("progress-text").innerText =
    `Phase ${index + 1} of 11`;

  document.getElementById("progress-fill").style.width =
    ((index + 1) / 11) * 100 + "%";
}

function nextPhase() {
  if (currentPhase < phases.length - 1) {
    currentPhase++;
    showPhase(currentPhase);
  }
}

/* ======================
   SUMMARY
   ====================== */
function generateSummary() {
  if (!selectedCountry || !countryData[selectedCountry]) {
    alert("Please select a destination country.");
    return;
  }

  const c = countryData[selectedCountry];

  document.getElementById("output").innerHTML = `
    <h3>${selectedCountry} Relocation Summary</h3>
    <p><strong>Visa Route:</strong> ${c.visa}</p>
    <p><strong>Income Requirement:</strong> ${c.income}</p>
    <p><strong>Tax Position:</strong> ${c.tax}</p>
    <p><strong>Notes:</strong> ${c.notes}</p>
    <p><em>This guidance is informational — always confirm with the embassy.</em></p>
  `;
}

/* ======================
   INIT
   ====================== */
showPhase(0);
