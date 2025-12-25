/***********************
  COUNTRY VISA & TAX RULES
************************/

const countryRules = {
  Portugal: {
    flag: "🇵🇹",
    visas: {
      "Passive income / Retirement": {
        minIncome: 820,
        minAge: 0,
        notes: "D7 Visa requires stable passive income above Portuguese minimum wage."
      },
      "Work / Self-employed": {
        minIncome: 1200,
        minAge: 18,
        notes: "Digital Nomad Visa available for remote workers."
      }
    },
    tax: "Tax resident after 183 days",
    taxNotes: "NHR closed to new applicants, but some incentives remain."
  },

  Spain: {
    flag: "🇪🇸",
    visas: {
      "Passive income / Retirement": {
        minIncome: 2400,
        minAge: 0,
        notes: "Non-lucrative visa requires significant savings and income."
      },
      "Work / Self-employed": {
        minIncome: 2200,
        minAge: 18,
        notes: "Digital Nomad Visa introduced in 2023."
      }
    },
    tax: "Tax resident after 183 days",
    taxNotes: "Wealth tax may apply depending on region."
  },

  France: {
    flag: "🇫🇷",
    visas: {
      "Passive income / Retirement": {
        minIncome: 1400,
        minAge: 0,
        notes: "Long-stay visitor visa. No employment allowed."
      }
    },
    tax: "Worldwide income taxable",
    taxNotes: "High social charges may apply."
  },

  Italy: {
    flag: "🇮🇹",
    visas: {
      "Passive income / Retirement": {
        minIncome: 2600,
        minAge: 0,
        notes: "Elective Residence Visa requires strong financial proof."
      }
    },
    tax: "Tax resident after 183 days",
    taxNotes: "Flat-tax schemes exist for some migrants."
  },

  Greece: {
    flag: "🇬🇷",
    visas: {
      "Passive income / Retirement": {
        minIncome: 2000,
        minAge: 0,
        notes: "Financially Independent Person visa available."
      }
    },
    tax: "Tax resident after 183 days",
    taxNotes: "7% flat tax available for qualifying retirees."
  },

  Cyprus: {
    flag: "🇨🇾",
    visas: {
      "Passive income / Retirement": {
        minIncome: 2000,
        minAge: 0,
        notes: "Category F residency popular with UK nationals."
      },
      "Work / Self-employed": {
        minIncome: 2500,
        minAge: 18,
        notes: "Digital Nomad Visa available."
      }
    },
    tax: "183-day or 60-day rule",
    taxNotes: "Non-dom regime offers major tax benefits."
  },

  UAE: {
    flag: "🇦🇪",
    visas: {
      "Work / Self-employed": {
        minIncome: 3500,
        minAge: 18,
        notes: "Remote Work Visa available. No income tax."
      },
      "Investment": {
        minIncome: 0,
        minAge: 18,
        notes: "Property or business investment required."
      }
    },
    tax: "No personal income tax",
    taxNotes: "UK tax residency rules still apply."
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
  SUMMARY + VISA ELIGIBILITY
************************/

function generateSummary() {
  const country = countrySelect.value;
  const age = Number(document.getElementById("age").value);
  const income = Number(document.getElementById("income").value);
  const visaRoute = document.getElementById("visa").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  if (!country) {
    alert("Please select a destination country.");
    return;
  }

  const rules = countryRules[country];
  const visaRules = rules.visas[visaRoute];
  let visaResult = "";
  let warnings = [];

  if (!visaRules) {
    warnings.push("⚠️ Selected visa route is not commonly available for this country.");
  } else {
    if (income < visaRules.minIncome) {
      warnings.push(`⚠️ Income may be too low. Typical minimum: £${visaRules.minIncome}/month.`);
    }
    if (age < visaRules.minAge) {
      warnings.push(`⚠️ Minimum age requirement may not be met.`);
    }
    if (warnings.length === 0) {
      visaResult = "✅ Your profile appears suitable for this visa route.";
    }
  }

  const output = document.getElementById("output");

  output.innerHTML = `
    <h3>${rules.flag} Relocation Summary: ${country}</h3>

    <p><strong>Age:</strong> ${age || "Not specified"}</p>
    <p><strong>Monthly Income:</strong> £${income || "Not specified"}</p>
    <p><strong>Visa Route:</strong> ${visaRoute}</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle}</p>
    <p><strong>Risk Profile:</strong> ${risk}</p>

    <hr>

    <h4>Visa Eligibility Check</h4>
    ${visaResult ? `<p>${visaResult}</p>` : ""}
    ${warnings.map(w => `<p>${w}</p>`).join("")}
    <p><em>${visaRules ? visaRules.notes : ""}</em></p>

    <h4>Tax Overview</h4>
    <p><strong>Tax Residency:</strong> ${rules.tax}</p>
    <p>${rules.taxNotes}</p>

    <p style="margin-top:15px;"><em>Guidance only — always confirm with a licensed advisor.</em></p>
  `;
}
