console.log("Brits Abroad 2026 – Country logic loaded");

/* =========================
   COUNTRY DATA (2026)
========================= */

const countryData = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    tax: "Pensions typically taxed at 10% (NHR-style regime)",
  },
  Spain: {
    visa: "Non-Lucrative Residence Visa",
    tax: "Worldwide income taxable; higher progressive rates",
  },
  France: {
    visa: "Long-Stay Visitor Visa",
    tax: "Progressive tax; UK state pension taxable in UK",
  },
  Italy: {
    visa: "Elective Residence Visa",
    tax: "7% flat tax available in southern regions",
  },
  Greece: {
    visa: "Financially Independent Person (FIP)",
    tax: "7% flat tax on foreign income (optional)",
  },
  Cyprus: {
    visa: "Pink Slip / Category F",
    tax: "Low tax; many pensions tax-free or reduced",
  },
  Malta: {
    visa: "Malta Retirement Programme",
    tax: "Foreign income taxed only if remitted",
  },
  Ireland: {
    visa: "No visa required (Common Travel Area)",
    tax: "High income tax; worldwide income applies",
  },
  UAE: {
    visa: "Retirement or Long-Term Residence Visa",
    tax: "0% income tax",
  },
  Thailand: {
    visa: "Retirement Visa (50+)",
    tax: "Foreign income generally not taxed if not remitted",
  },
  Malaysia: {
    visa: "MM2H Programme",
    tax: "Territorial tax system",
  },
  Panama: {
    visa: "Pensionado Visa",
    tax: "No tax on foreign income",
  },
  Mexico: {
    visa: "Temporary Resident Visa",
    tax: "Tax residency depends on days spent",
  },
  "Costa Rica": {
    visa: "Pensionado Visa",
    tax: "Foreign income not taxed",
  },
  Bulgaria: {
    visa: "D Visa / Long-Term Residence",
    tax: "Flat 10% income tax",
  },
  Hungary: {
    visa: "Residence Permit",
    tax: "Flat 15% income tax",
  },
  Poland: {
    visa: "Temporary Residence Permit",
    tax: "Progressive tax; low cost of living",
  },
  Slovakia: {
    visa: "Temporary Residence",
    tax: "Progressive income tax",
  },
  Slovenia: {
    visa: "Long-Term Residence",
    tax: "Moderate EU tax rates",
  },
  Indonesia: {
    visa: "Retirement KITAS (55+)",
    tax: "Tax residency after 183 days",
  },
  Vietnam: {
    visa: "Temporary Residence Card",
    tax: "Territorial-style tax system",
  },
  Mauritius: {
    visa: "Retired Non-Citizen Permit",
    tax: "15% flat income tax",
  },
  Ecuador: {
    visa: "Pensioner Visa",
    tax: "Foreign income often exempt",
  },
  Uruguay: {
    visa: "Permanent Residency",
    tax: "Optional territorial taxation",
  },
  Argentina: {
    visa: "Rentista / Pensionado Visa",
    tax: "High inflation; tax residency rules apply",
  },
  USA: {
    visa: "No retirement visa available",
    tax: "Worldwide taxation; complex filing",
  },
  Canada: {
    visa: "Family or Skilled Migration only",
    tax: "Worldwide income taxed",
  },
  Australia: {
    visa: "Parent / Contributory Visas",
    tax: "Worldwide income taxed",
  },
  "New Zealand": {
    visa: "Investment or Family Route",
    tax: "Worldwide income after residency",
  }
};

/* =========================
   COUNTRY DROPDOWN
========================= */

const countrySelect = document.getElementById("countrySelect");

countrySelect.innerHTML = `<option value="">Select country</option>`;
Object.keys(countryData).forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

/* =========================
   SUMMARY GENERATOR
========================= */

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
    alert("Please select a destination country");
    return;
  }

  const visaInfo = countryData[country]?.visa || "Visa details pending";
  const taxInfo = countryData[country]?.tax || "Tax details pending";

  const output = document.getElementById("output");

  output.innerHTML = `
    <h3>Your Relocation Plan – ${country}</h3>

    <p><strong>Age:</strong> ${age || "Not specified"}</p>
    <p><strong>Monthly Income:</strong> £${income || "Not specified"}</p>
    <p><strong>Healthcare:</strong> ${healthcare || "Not specified"}</p>
    <p><strong>Housing:</strong> ${housing || "Not specified"}</p>
    <p><strong>Banking:</strong> ${banking || "Not specified"}</p>
    <p><strong>Transport:</strong> ${transport || "Not specified"}</p>
    <p><strong>Residency Route:</strong> ${visaRoute || "Not specified"}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle || "Not specified"}</p>
    <p><strong>Risk Tolerance:</strong> ${risk || "Not specified"}</p>

    <hr>

    <p><strong>Primary Visa Option:</strong> ${visaInfo}</p>
    <p><strong>Tax Position:</strong> ${taxInfo}</p>

    <p class="note">
      Next steps will include documentation checklists,
      tax residency timing, healthcare setup, and move timelines.
    </p>
  `;
}
