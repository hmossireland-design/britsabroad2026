document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     COUNTRY DATA (CORE LOGIC)
  ============================= */

  const countryData = {
    Portugal: {
      visa: "D7 Passive Income Visa (popular with retirees)",
      tax: "Pensions taxed at ~10% under current regime",
      healthcare: "Public healthcare via S1 or private insurance initially"
    },
    Spain: {
      visa: "Non-Lucrative Visa (no work allowed)",
      tax: "Worldwide income taxable once resident",
      healthcare: "Private insurance required initially"
    },
    Cyprus: {
      visa: "Category F / Pink Slip",
      tax: "0% tax on pensions up to €19,500",
      healthcare: "GESY public system after residency"
    },
    France: {
      visa: "Long-Stay Visitor Visa",
      tax: "Progressive income tax; S1 accepted",
      healthcare: "Excellent public healthcare with S1"
    },
    UAE: {
      visa: "Retirement or Property-Based Visa",
      tax: "0% income tax",
      healthcare: "Private insurance mandatory"
    },
    Thailand: {
      visa: "Retirement Visa (50+)",
      tax: "Territorial tax system",
      healthcare: "Private healthcare recommended"
    },
    Italy: {
      visa: "Elective Residence Visa",
      tax: "Optional 7% flat tax in southern regions",
      healthcare: "Public healthcare after registration"
    },
    Greece: {
      visa: "Financially Independent Person Visa",
      tax: "Flat tax options available",
      healthcare: "Private initially, public later"
    },
    Malta: {
      visa: "Retirement Programme",
      tax: "Foreign income taxed when remitted",
      healthcare: "Private insurance required"
    },
    Ireland: {
      visa: "No visa required (Common Travel Area)",
      tax: "Worldwide income taxable",
      healthcare: "Public healthcare access"
    }
  };

  /* =============================
     READ USER INPUTS
  ============================= */

  window.generateSummary = function () {
    const country = document.getElementById("countrySelect").value;
    const age = document.getElementById("age").value;
    const income = document.getElementById("income").value;
    const healthcare = document.getElementById("healthcare").value;
    const housing = document.getElementById("housing").value;
    const banking = document.getElementById("banking").value;

    const output = document.getElementById("output");

    if (!country) {
      alert("Please select a destination country");
      return;
    }

    const data = countryData[country];

    output.innerHTML = `
      <h3>📍 ${country} — Relocation Overview</h3>

      <p><strong>Visa Route:</strong><br>${data.visa}</p>

      <p><strong>Tax Position:</strong><br>${data.tax}</p>

      <p><strong>Healthcare:</strong><br>${data.healthcare}</p>

      <hr>

      <p><strong>Your Profile:</strong></p>
      <ul>
        <li>Age: ${age || "Not specified"}</li>
        <li>Monthly Income: £${income || "Not specified"}</li>
        <li>Healthcare Preference: ${healthcare || "Not specified"}</li>
        <li>Housing Plan: ${housing || "Not specified"}</li>
        <li>Banking: ${banking || "Not specified"}</li>
      </ul>

      <hr>

      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Confirm visa eligibility with embassy</li>
        <li>Plan tax residency timing carefully</li>
        <li>Arrange healthcare cover before arrival</li>
      </ul>
    `;
  };

});
