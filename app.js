document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     COUNTRY + VISA + TAX DATA
  =============================== */

  const countryData = {
    Portugal: {
      flag: "🇵🇹",
      visa: "D7 Passive Income Visa",
      tax: "10% pension tax (NHR-style), territorial taxation",
      notes: "Popular with UK retirees, EU access"
    },
    Spain: {
      flag: "🇪🇸",
      visa: "Non-Lucrative Visa",
      tax: "Worldwide income taxable",
      notes: "Higher income threshold, great healthcare"
    },
    France: {
      flag: "🇫🇷",
      visa: "Long-Stay Visitor Visa",
      tax: "Progressive income tax",
      notes: "S1 healthcare for UK pensioners"
    },
    Ireland: {
      flag: "🇮🇪",
      visa: "No visa required (CTA)",
      tax: "Worldwide income taxable",
      notes: "High cost of living"
    },
    Italy: {
      flag: "🇮🇹",
      visa: "Elective Residence Visa",
      tax: "7% flat tax (southern regions)",
      notes: "Bureaucratic but rewarding"
    },
    Greece: {
      flag: "🇬🇷",
      visa: "Financially Independent Person",
      tax: "7% flat tax for retirees",
      notes: "Islands and mainland options"
    },
    Cyprus: {
      flag: "🇨🇾",
      visa: "Category F / Pink Slip",
      tax: "Low tax, non-dom benefits",
      notes: "English widely spoken"
    },
    Malta: {
      flag: "🇲🇹",
      visa: "Malta Retirement Programme",
      tax: "Foreign income taxed if remitted",
      notes: "English official language"
    },
    UAE: {
      flag: "🇦🇪",
      visa: "Retirement Visa",
      tax: "0% income tax",
      notes: "No permanent residency"
    },
    Thailand: {
      flag: "🇹🇭",
      visa: "Retirement Visa (50+)",
      tax: "Territorial taxation",
      notes: "Low cost, renewals required"
    },
    Malaysia: {
      flag: "🇲🇾",
      visa: "MM2H",
      tax: "Territorial taxation",
      notes: "Rules can change"
    },
    Australia: {
      flag: "🇦🇺",
      visa: "Parent / Contributory Visa",
      tax: "Worldwide income taxed",
      notes: "Very expensive visas"
    },
    "New Zealand": {
      flag: "🇳🇿",
      visa: "Investment / Family Route",
      tax: "Worldwide income taxed",
      notes: "Strict requirements"
    },
    Canada: {
      flag: "🇨🇦",
      visa: "Family / Skilled Migration",
      tax: "Worldwide income taxed",
      notes: "Cold climate"
    },
    Mexico: {
      flag: "🇲🇽",
      visa: "Temporary Resident Visa",
      tax: "Worldwide income if resident",
      notes: "Regional safety differences"
    },
    "Costa Rica": {
      flag: "🇨🇷",
      visa: "Pensionado",
      tax: "Territorial taxation",
      notes: "Nature-focused lifestyle"
    },
    Panama: {
      flag: "🇵🇦",
      visa: "Pensionado Visa",
      tax: "Territorial taxation",
      notes: "Senior discounts"
    },
    Hungary: {
      flag: "🇭🇺",
      visa: "Residence Permit",
      tax: "Flat income tax",
      notes: "Low cost EU option"
    },
    Poland: {
      flag: "🇵🇱",
      visa: "Temporary Residence",
      tax: "Worldwide income taxed",
      notes: "Low income threshold"
    },
    Slovakia: {
      flag: "🇸🇰",
      visa: "Temporary Residence",
      tax: "Worldwide income taxed",
      notes: "Language barrier"
    }
  };

  /* ===============================
     POPULATE COUNTRY DROPDOWN
  =============================== */

  const countrySelect = document.getElementById("countrySelect");
  countrySelect.innerHTML = `<option value="">Select a country</option>`;

  Object.keys(countryData).forEach(country => {
    const opt = document.createElement("option");
    opt.value = country;
    opt.textContent = `${countryData[country].flag} ${country}`;
    countrySelect.appendChild(opt);
  });

  /* ===============================
     PROGRESS BAR
  =============================== */

  const totalPhases = 11;

  function updateProgress() {
    let completed = 0;

    [
      "countrySelect","age","income","healthcare","housing",
      "banking","transport","visa","lifestyle","risk"
    ].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value) completed++;
    });

    const percent = Math.round((completed / totalPhases) * 100);
    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent =
      `${completed} / ${totalPhases} completed`;
  }

  document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("change", updateProgress);
  });

  /* ===============================
     SUMMARY GENERATION
  =============================== */

  window.generateSummary = function () {

    const country = countrySelect.value;
    const data = countryData[country];

    if (!country) {
      document.getElementById("output").innerHTML =
        "<p>Please select a destination country.</p>";
      return;
    }

    document.getElementById("output").innerHTML = `
      <h3>${data.flag} ${country} Relocation Summary</h3>

      <p><strong>Visa Route:</strong> ${data.visa}</p>
      <p><strong>Tax Position:</strong> ${data.tax}</p>
      <p><strong>Notes:</strong> ${data.notes}</p>

      <hr>

      <p><strong>Age:</strong> ${document.getElementById("age").value}</p>
      <p><strong>Monthly Income:</strong> £${document.getElementById("income").value}</p>
      <p><strong>Healthcare:</strong> ${document.getElementById("healthcare").value}</p>
      <p><strong>Housing:</strong> ${document.getElementById("housing").value}</p>
      <p><strong>Banking:</strong> ${document.getElementById("banking").value}</p>
      <p><strong>Transport:</strong> ${document.getElementById("transport").value}</p>
      <p><strong>Lifestyle:</strong> ${document.getElementById("lifestyle").value}</p>
      <p><strong>Risk:</strong> ${document.getElementById("risk").value}</p>
    `;
  };

});
