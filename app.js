document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     COUNTRY DATA ENGINE
     ================================ */

  const countryRules = {
    Portugal: {
      visa: "D7 Passive Income Visa",
      tax: "10% pension tax (NHR-style), worldwide income reportable",
      notes: "Popular with retirees, rising housing costs in Lisbon/Algarve"
    },
    Spain: {
      visa: "Non-Lucrative Visa",
      tax: "Worldwide income taxable, no special pension exemption",
      notes: "High income threshold, excellent healthcare"
    },
    Ireland: {
      visa: "No visa required (CTA)",
      tax: "Worldwide income taxable once resident",
      notes: "High cost of living, English-speaking"
    },
    Cyprus: {
      visa: "Category F / Pink Slip",
      tax: "Low tax on pensions, non-dom regime available",
      notes: "English widely spoken, property route popular"
    },
    UAE: {
      visa: "Retirement or Property Visa",
      tax: "0% income tax",
      notes: "No permanent residency, extreme summer heat"
    },
    Thailand: {
      visa: "Retirement Visa (50+)",
      tax: "Foreign income taxed only if remitted",
      notes: "Affordable, frequent renewals"
    },
    Italy: {
      visa: "Elective Residence Visa",
      tax: "7% flat tax available in southern regions",
      notes: "Heavy bureaucracy, language barrier"
    },
    Greece: {
      visa: "Financially Independent Person (FIP)",
      tax: "7% flat tax for retirees",
      notes: "Golden Visa also available"
    },
    Malta: {
      visa: "Malta Retirement Programme",
      tax: "Foreign income taxed only if remitted",
      notes: "English official language"
    },
    France: {
      visa: "Long-Stay Visitor Visa",
      tax: "Worldwide income taxable",
      notes: "S1 healthcare for UK pensioners"
    }
    // Remaining countries can be added safely here later
  };

  const countries = Object.keys(countryRules);

  const countrySelect = document.getElementById("countrySelect");

  if (!countrySelect) {
    console.error("Country select not found");
    return;
  }

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  /* ================================
     SUMMARY GENERATOR
     ================================ */

  window.generateSummary = function () {

    const selectedCountry = countrySelect.value;

    if (!selectedCountry) {
      alert("Please select a destination country.");
      return;
    }

    const rules = countryRules[selectedCountry];

    const output = document.getElementById("output");

    output.innerHTML = `
      <h3>Relocation Intelligence Report: ${selectedCountry}</h3>

      <h4>🛂 Residency Route</h4>
      <p><strong>${rules.visa}</strong></p>

      <h4>💸 Tax Exposure</h4>
      <p>${rules.tax}</p>

      <h4>📌 Key Notes</h4>
      <p>${rules.notes}</p>

      <hr>

      <p>
        <strong>Next steps will include:</strong><br>
        • Visa application checklist<br>
        • Healthcare access rules<br>
        • Cost of living breakdown<br>
        • Exit strategy & UK tax considerations
      </p>
    `;
  };

});
