/* =========================
   COUNTRY DATABASE (2026)
   ========================= */

const countryData = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    visaReq: "€870+/month passive income, accommodation, health insurance",
    tax: "10% tax on foreign pensions (current regime)",
    notes: "Top choice for UK retirees, EU access, strong healthcare"
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    visaReq: "€2,400+/month income, private health insurance",
    tax: "Worldwide income taxable once resident",
    notes: "Great lifestyle, higher income threshold"
  },
  Ireland: {
    visa: "No visa required (Common Travel Area)",
    visaReq: "None",
    tax: "Irish tax residency rules apply",
    notes: "Easiest move legally, expensive living costs"
  },
  Australia: {
    visa: "Parent / Family Visa",
    visaReq: "Family sponsorship or high contribution",
    tax: "Worldwide income taxable",
    notes: "High quality of life, long processing times"
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    visaReq: "Income proof or €300k property",
    tax: "Low tax on pensions, non-dom advantages",
    notes: "English spoken, sunny, popular with Brits"
  },
  Malta: {
    visa: "Retirement Programme",
    visaReq: "€10k/year income + property",
    tax: "Tax on remitted income only",
    notes: "English-speaking, compact island"
  },
  France: {
    visa: "Long Stay Visitor Visa",
    visaReq: "€1,800+/month income",
    tax: "Progressive income tax",
    notes: "Excellent healthcare, bureaucracy heavy"
  },
  UAE: {
    visa: "Retirement / Property Visa",
    visaReq: "£4,200/month or property ownership",
    tax: "0% personal income tax",
    notes: "Tax-free, no permanent residency"
  },
  Thailand: {
    visa: "Retirement Visa",
    visaReq: "50+, £1,500/month income",
    tax: "Foreign income rules evolving",
    notes: "Affordable, visa renewals required"
  },
  Italy: {
    visa: "Elective Residence Visa",
    visaReq: "€31k/year passive income",
    tax: "7% flat tax in southern regions",
    notes: "Food, culture, bureaucracy varies"
  },
  Greece: {
    visa: "Financially Independent / Golden Visa",
    visaReq: "€3,500/month or €250k property",
    tax: "Worldwide taxation",
    notes: "Islands, paperwork heavy"
  },
  Canada: {
    visa: "Family / Skilled Migration",
    visaReq: "Points-based or sponsorship",
    tax: "Worldwide income taxable",
    notes: "Safe, cold winters"
  },
  NewZealand: {
    visa: "Investment / Family Visa",
    visaReq: "High capital or sponsorship",
    tax: "Worldwide income taxable",
    notes: "Beautiful, isolated, costly"
  },
  Malaysia: {
    visa: "MM2H",
    visaReq: "$1,500/month income",
    tax: "Territorial tax system",
    notes: "Low cost, English spoken"
  },
  Panama: {
    visa: "Pensionado Visa",
    visaReq: "$1,000/month pension",
    tax: "No tax on foreign income",
    notes: "Senior discounts, humid climate"
  },
  Mexico: {
    visa: "Temporary Resident Visa",
    visaReq: "$2,500/month proof",
    tax: "Worldwide income taxable",
    notes: "Affordable, safety varies"
  },
  CostaRica: {
    visa: "Pensionado",
    visaReq: "$1,000/month pension",
    tax: "Territorial tax system",
    notes: "Nature, high import costs"
  },
  Hungary: {
    visa: "Residence Permit",
    visaReq: "Low income proof",
    tax: "Flat tax ~15%",
    notes: "Cheap EU, cold winters"
  },
  Poland: {
    visa: "Temporary Residence",
    visaReq: "Minimal income proof",
    tax: "Progressive tax system",
    notes: "Very low cost EU option"
  },
  Slovenia: {
    visa: "Long-Term Residence",
    visaReq: "Income proof",
    tax: "Progressive tax",
    notes: "Safe, scenic, small expat scene"
  },
  Slovakia: {
    visa: "Temporary Residence",
    visaReq: "€800+/month",
    tax: "Flat tax",
    notes: "Low cost, language barrier"
  },
  Bulgaria: {
    visa: "D Visa",
    visaReq: "€1,000/month income",
    tax: "10% flat tax",
    notes: "Cheapest EU option"
  },
  Indonesia: {
    visa: "Retirement KITAS",
    visaReq: "55+, $1,500/month",
    tax: "Territorial tax system",
    notes: "Bali popular, earthquakes"
  },
  Colombia: {
    visa: "Pension Visa",
    visaReq: "$900/month pension",
    tax: "Worldwide income taxable",
    notes: "Affordable cities"
  },
  Mauritius: {
    visa: "Retired Non-Citizen Permit",
    visaReq: "$1,500/month income",
    tax: "Low flat tax",
    notes: "Island paradise"
  },
  Belize: {
    visa: "QRP",
    visaReq: "$2,000/month income",
    tax: "No tax on foreign income",
    notes: "English-speaking Caribbean"
  },
  Ecuador: {
    visa: "Pensioner Visa",
    visaReq: "$800/month pension",
    tax: "Worldwide income taxable",
    notes: "Very low cost living"
  },
  Uruguay: {
    visa: "Residency",
    visaReq: "Income proof",
    tax: "Territorial tax system",
    notes: "Stable, higher regional cost"
  },
  Chile: {
    visa: "Retirement Visa",
    visaReq: "Pension proof",
    tax: "Worldwide income taxable",
    notes: "Safe, earthquakes"
  },
  Latvia: {
    visa: "Temporary Residence",
    visaReq: "€1,100/month income",
    tax: "Progressive tax",
    notes: "Low-cost EU Baltic"
  }
};

/* =========================
   POPULATE COUNTRY DROPDOWN
   ========================= */

const countrySelect = document.getElementById("countrySelect");

Object.keys(countryData).forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country.replace(/([A-Z])/g, " $1").trim();
  countrySelect.appendChild(option);
});

/* =========================
   GENERATE SUMMARY
   ========================= */

function generateSummary() {
  const country = countrySelect.value;
  const output = document.getElementById("output");

  if (!country || !countryData[country]) {
    output.innerHTML = "<p>Please select a valid country.</p>";
    return;
  }

  const data = countryData[country];

  output.innerHTML = `
    <h3>Relocation Summary: ${country.replace(/([A-Z])/g, " $1")}</h3>

    <p><strong>Visa Route:</strong> ${data.visa}</p>
    <p><strong>Visa Requirements:</strong> ${data.visaReq}</p>
    <p><strong>Tax Position:</strong> ${data.tax}</p>
    <p><strong>Country Notes:</strong> ${data.notes}</p>

    <hr>

    <p><strong>Next Steps:</strong></p>
    <ul>
      <li>Confirm eligibility with embassy</li>
      <li>Review UK & local tax residency rules</li>
      <li>Arrange healthcare & banking</li>
    </ul>
  `;
}
