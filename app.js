/***********************
  COUNTRY DATA
************************/

const countryRules = {
  Portugal: {
    flag: "🇵🇹",
    visa: "D7 Passive Income Visa or Digital Nomad Visa",
    visaNotes: "Proof of passive income or remote work required. Minimum stay rules apply.",
    tax: "Tax resident after 183 days",
    taxNotes: "NHR regime ended for new applicants, but incentives may still exist for some professions."
  },
  Spain: {
    flag: "🇪🇸",
    visa: "Non-Lucrative Visa or Digital Nomad Visa",
    visaNotes: "Non-lucrative requires no local work. Digital Nomad allows foreign employment.",
    tax: "Tax resident after 183 days",
    taxNotes: "Beckham Law may apply for eligible workers. Wealth tax exists in some regions."
  },
  France: {
    flag: "🇫🇷",
    visa: "Long-Stay Visitor Visa",
    visaNotes: "No work allowed. Proof of income and accommodation required.",
    tax: "Tax resident after 183 days or centre of life",
    taxNotes: "Worldwide income taxable. Social charges can be significant."
  },
  Italy: {
    flag: "🇮🇹",
    visa: "Elective Residence Visa",
    visaNotes: "Passive income only. No employment allowed.",
    tax: "Tax resident after 183 days",
    taxNotes: "Flat tax regimes exist for high-net-worth individuals."
  },
  Greece: {
    flag: "🇬🇷",
    visa: "Financially Independent Person (FIP) Visa",
    visaNotes: "Requires steady overseas income.",
    tax: "Tax resident after 183 days",
    taxNotes: "7% flat tax available for some retirees."
  },
  Cyprus: {
    flag: "🇨🇾",
    visa: "Category F or Digital Nomad Visa",
    visaNotes: "Low bureaucracy, popular with UK nationals.",
    tax: "Tax resident after 183 days or 60-day rule",
    taxNotes: "Non-domiciled residents enjoy dividend & interest tax exemptions."
  },
  UAE: {
    flag: "🇦🇪",
    visa: "Remote Work Visa or Investor Visa",
    visaNotes: "No income tax. Proof of income required.",
    tax: "No personal income tax",
    taxNotes: "UK tax residency rules still apply if ties remain."
  },
  Thailand: {
    flag: "🇹🇭",
    visa: "Long-Term Resident (LTR) or Retirement Visa",
    visaNotes: "Age and income thresholds apply.",
    tax: "Territorial tax system",
    taxNotes: "Foreign income taxed if remitted in same year."
  },
  Mexico: {
    flag: "🇲🇽",
    visa: "Temporary or Permanent Resident Visa",
    visaNotes: "Income thresholds vary by consulate.",
    tax: "Tax resident if main home is in Mexico",
    taxNotes: "Worldwide income taxable if resident."
  },
  Malaysia: {
    flag: "🇲🇾",
    visa: "MM2H or DE Rantau Nomad Visa",
    visaNotes: "Financial requirements apply.",
    tax: "Territorial tax system",
    taxNotes: "Foreign income largely exempt."
  }
};

/***********************
  POPULATE COUNTRY DROPDOWN
************************/

const countrySelect = document.getElementById("countrySelect");

Object.keys(countryRules).forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = `${countryRules[country].flag} ${country}`;
  countrySelect.appendChild(option);
});

/***********************
  SUMMARY GENERATION
************************/

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
    alert("Please select a destination country.");
    return;
  }

  const rules = countryRules[country];

  const output = document.getElementById("output");

  output.innerHTML = `
    <h3>${rules.flag} Relocation Summary: ${country}</h3>

    <p><strong>Age:</strong> ${age || "Not specified"}</p>
    <p><strong>Monthly Income:</strong> £${income || "Not specified"}</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing Plan:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Lifestyle Preference:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>

    <hr>

    <h4>Visa & Residency</h4>
    <p><strong>Likely Visa:</strong> ${rules.visa}</p>
    <p>${rules.visaNotes}</p>

    <h4>Tax Considerations</h4>
    <p><strong>Tax Residency:</strong> ${rules.tax}</p>
    <p>${rules.taxNotes}</p>

    <p style="margin-top:15px;"><em>This is guidance only. Always confirm with a local immigration or tax professional.</em></p>
  `;
}
