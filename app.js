document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     COUNTRY INTELLIGENCE DATA
     ========================== */

  const countries = {
    Portugal: {
      visa: "D7 Passive Income Visa",
      tax: "10% pension tax (legacy NHR-style), worldwide income reportable",
      pension: "UK state & private pensions taxed at 10%",
      risk: "Rising housing costs, NHR changes"
    },
    Spain: {
      visa: "Non-Lucrative Visa",
      tax: "Worldwide income taxable at progressive rates",
      pension: "UK pensions taxed in Spain",
      risk: "High income threshold, bureaucracy"
    },
    Ireland: {
      visa: "No visa required (CTA)",
      tax: "Worldwide income taxable",
      pension: "UK pension taxable in Ireland",
      risk: "High cost of living"
    },
    Cyprus: {
      visa: "Category F / Pink Slip",
      tax: "Low tax on pensions, non-dom available",
      pension: "UK pensions taxed lightly or exempt",
      risk: "Property market variations"
    },
    Malta: {
      visa: "Malta Retirement Programme",
      tax: "Foreign income taxed only if remitted",
      pension: "UK pension taxed only if remitted",
      risk: "Small island, high rents"
    },
    France: {
      visa: "Long-Stay Visitor Visa",
      tax: "Worldwide income taxable",
      pension: "UK state pension taxed in France",
      risk: "Complex bureaucracy"
    },
    UAE: {
      visa: "Retirement / Property Visa",
      tax: "0% income tax",
      pension: "No tax on pensions",
      risk: "No permanent residency, extreme heat"
    },
    Italy: {
      visa: "Elective Residence Visa",
      tax: "7% flat tax (southern regions)",
      pension: "UK pensions taxed at 7% if eligible",
      risk: "Slow administration"
    },
    Greece: {
      visa: "Financially Independent Person (FIP)",
      tax: "7% flat tax for retirees",
      pension: "UK pensions taxed at 7%",
      risk: "Economic instability"
    },
    Thailand: {
      visa: "Retirement Visa (50+)",
      tax: "Foreign income taxed if remitted",
      pension: "UK pension usually untaxed if offshore",
      risk: "Visa renewals"
    },
    Malaysia: {
      visa: "MM2H",
      tax: "Foreign income generally tax-free",
      pension: "UK pension not taxed locally",
      risk: "Programme rule changes"
    },
    Panama: {
      visa: "Pensionado",
      tax: "No tax on foreign income",
      pension: "UK pension tax-free locally",
      risk: "Humidity, infrastructure"
    },
    Mexico: {
      visa: "Temporary Resident",
      tax: "Worldwide income taxable if resident",
      pension: "UK pensions taxable",
      risk: "Regional safety variation"
    },
    CostaRica: {
      visa: "Pensionado",
      tax: "No tax on foreign income",
      pension: "UK pension tax-free locally",
      risk: "Rainy seasons"
    },
    Hungary: {
      visa: "Residence Permit",
      tax: "Flat tax ~15%",
      pension: "UK pension taxed at flat rate",
      risk: "Language barrier"
    },
    Poland: {
      visa: "Temporary Residence",
      tax: "Flat tax 12–19%",
      pension: "UK pensions taxable",
      risk: "Cold winters"
    },
    Slovenia: {
      visa: "Long-Term Residence",
      tax: "Progressive tax system",
      pension: "UK pensions taxable",
      risk: "Smaller expat base"
    },
    Slovakia: {
      visa: "Temporary Residence",
      tax: "Flat tax ~19%",
      pension: "UK pensions taxable",
      risk: "Language"
    },
    Bulgaria: {
      visa: "D Visa",
      tax: "Flat 10% tax",
      pension: "UK pensions taxed at 10%",
      risk: "Infrastructure gaps"
    },
    Indonesia: {
      visa: "Retirement KITAS",
      tax: "Foreign income taxable if remitted",
      pension: "UK pension often untaxed locally",
      risk: "Visa admin"
    },
    Colombia: {
      visa: "Pension Visa",
      tax: "Worldwide income taxable",
      pension: "UK pensions taxable",
      risk: "Security in some areas"
    },
    Mauritius: {
      visa: "Retired Non-Citizen",
      tax: "Flat 15% or exemption",
      pension: "UK pensions lightly taxed",
      risk: "Isolation"
    },
    Belize: {
      visa: "QRP",
      tax: "No tax on foreign income",
      pension: "UK pension tax-free locally",
      risk: "Hurricanes"
    },
    Ecuador: {
      visa: "Pensioner Visa",
      tax: "Territorial tax system",
      pension: "UK pension often tax-free",
      risk: "Political shifts"
    },
    Uruguay: {
      visa: "Residency",
      tax: "Territorial tax (option available)",
      pension: "UK pension usually untaxed",
      risk: "Higher LATAM costs"
    },
    Chile: {
      visa: "Retirement Visa",
      tax: "Worldwide income taxable",
      pension: "UK pensions taxable",
      risk: "Earthquakes"
    },
    Latvia: {
      visa: "Temporary Residence",
      tax: "Flat tax ~20%",
      pension: "UK pensions taxable",
      risk: "Cold climate"
    }
  };

  /* ==========================
     POPULATE COUNTRY DROPDOWN
     ========================== */

  const countrySelect = document.getElementById("countrySelect");
  Object.keys(countries).forEach(name => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    countrySelect.appendChild(opt);
  });

  /* ==========================
     SUMMARY ENGINE
     ========================== */

  window.generateSummary = function () {
    const selected = countrySelect.value;
    if (!selected) {
      alert("Please select a destination country.");
      return;
    }

    const c = countries[selected];
    const output = document.getElementById("output");

    output.innerHTML = `
      <h2>Relocation Intelligence: ${selected}</h2>

      <p><strong>🛂 Visa Route:</strong> ${c.visa}</p>
      <p><strong>💸 Tax Exposure:</strong> ${c.tax}</p>
      <p><strong>🏦 Pension Treatment:</strong> ${c.pension}</p>
      <p><strong>⚠ Key Risk:</strong> ${c.risk}</p>

      <hr>

      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Confirm tax residency break from UK</li>
        <li>Healthcare eligibility & insurance</li>
        <li>Cost of living validation</li>
        <li>Visa application checklist</li>
      </ul>
    `;
  };

});
