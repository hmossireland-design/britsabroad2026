/* =========================
   COUNTRY DATA (CORE INTELLIGENCE)
   ========================= */

const countryData = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    visaReq: "Approx €870/month passive income, accommodation, private health insurance",
    tax: "10% tax on foreign pensions (current regime)",
    notes: "Popular with UK retirees, EU access, good healthcare"
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    visaReq: "€2,400/month income, private healthcare, no work allowed",
    tax: "Worldwide income taxable once resident",
    notes: "Excellent lifestyle but higher income threshold"
  },
  Ireland: {
    visa: "No visa required (Common Travel Area)",
    visaReq: "None",
    tax: "Irish tax residency rules apply",
    notes: "Easiest move for UK citizens, high living costs"
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    visaReq: "Income proof or property ownership, health insurance",
    tax: "Low tax on pensions, non-dom advantages",
    notes: "English widely spoken, sunny climate"
  },
  UAE: {
    visa: "Retirement / Property Visa",
    visaReq: "Property purchase or £4,200/month income",
    tax: "0% personal income tax",
    notes: "No path to permanent residency, extreme heat"
  },
  Thailand: {
    visa: "Retirement Visa",
    visaReq: "50+, approx £1,500/month income",
    tax: "Foreign income rules evolving",
    notes: "Very affordable, renewals required"
  },
  Italy: {
    visa: "Elective Residence",
    visaReq: "€31,000/year passive income",
    tax: "7% flat tax in southern regions",
    notes: "Bureaucracy varies by region"
  },
  Greece: {
    visa: "Financially Independent / Golden Visa",
    visaReq: "€3,500/month or property investment",
    tax: "Worldwide taxation after residency",
    notes: "Island lifestyle, paperwork heavy"
  },
  France: {
    visa: "Long Stay Visitor",
    visaReq: "Approx €1,800/month income",
    tax: "Progressive tax bands",
    notes: "S1 healthcare possible for pensioners"
  },
  Malta: {
    visa: "Retirement Programme",
    visaReq: "€10,000/year income + property",
    tax: "Foreign income remittance basis",
    notes: "English speaking, small island"
  }
};

/* =========================
   POPULATE COUNTRY DROPDOWN
   ========================= */

const countrySelect = document.getElementById("countrySelect");

Object.keys(countryData).forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

/* =========================
   GENERATE SUMMARY
   ========================= */

function generateSummary() {
  const country = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visaType = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  const output = document.getElementById("output");

  if (!country) {
    output.innerHTML = "<p>Please select a destination country.</p>";
    return;
  }

  const data = countryData[country];

  output.innerHTML = `
    <h3>Your Relocation Summary: ${country}</h3>

    <p><strong>Visa Route:</strong> ${data.visa}</p>
    <p><strong>Visa Requirements:</strong> ${data.visaReq}</p>

    <p><strong>Tax Position:</strong> ${data.tax}</p>

    <p><strong>Why This Country:</strong> ${data.notes}</p>

    <hr>

    <p><strong>Your Profile:</strong></p>
    <p>Age: ${age || "Not specified"}</p>
    <p>Monthly Income: £${income || "Not specified"}</p>
    <p>Healthcare Preference: ${healthcare || "Not specified"}</p>
    <p>Housing Plan: ${housing || "Not specified"}</p>
    <p>Banking Setup: ${banking || "Not specified"}</p>
    <p>Transport Plan: ${transport || "Not specified"}</p>
    <p>Lifestyle Preference: ${lifestyle || "Not specified"}</p>
    <p>Risk Tolerance: ${risk || "Not specified"}</p>

    <hr>

    <p><strong>Next Steps:</strong></p>
    <p>✔ Confirm visa eligibility with embassy</p>
    <p>✔ Review tax residency impact</p>
    <p>✔ Arrange healthcare cover</p>
  `;
}
