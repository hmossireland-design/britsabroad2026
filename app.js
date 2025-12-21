// ===============================
// COUNTRY DATA
// ===============================
const countries = {
  Portugal: {
    tax: "10% flat tax on foreign pension (NHR-style legacy rules)",
    visa: "D7 Passive Income Visa",
    banking: "Revolut & Wise fully supported. Portuguese bank often required for residency."
  },
  Spain: {
    tax: "Progressive tax up to ~47%",
    visa: "Non-Lucrative Visa",
    banking: "Spanish bank required. Revolut works with limitations."
  },
  France: {
    tax: "Progressive tax + social charges",
    visa: "Visitor Visa",
    banking: "French bank required. Online banks limited for admin."
  },
  Italy: {
    tax: "7% flat tax (southern regions)",
    visa: "Elective Residency Visa",
    banking: "Italian bank usually required. Wise works short-term."
  },
  Greece: {
    tax: "7% flat tax for retirees",
    visa: "Financially Independent Person Visa",
    banking: "Local bank required. Revolut works well."
  },
  UAE: {
    tax: "0% personal income tax",
    visa: "Retirement / Property / Golden Visa",
    banking: "Local UAE bank required. Wise useful but limited."
  },
  Cyprus: {
    tax: "Low tax with non-dom benefits",
    visa: "Category F / Permanent Residency",
    banking: "Local bank required. Revolut widely used."
  },
  Thailand: {
    tax: "Territorial-style taxation",
    visa: "Retirement Visa",
    banking: "Thai bank required. Wise useful for transfers."
  },
  Malaysia: {
    tax: "Territorial tax system",
    visa: "MM2H",
    banking: "Local bank required. Wise supported."
  }
};

// ===============================
// POPULATE COUNTRY DROPDOWN
// ===============================
const countrySelect = document.getElementById("countrySelect");

Object.keys(countries).forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

// ===============================
// GENERATE SUMMARY
// ===============================
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
    document.getElementById("output").innerHTML =
      "<p style='color:red;'>Please select a destination country.</p>";
    return;
  }

  const countryData = countries[country];

  let bankingAdvice = "";

  if (banking.includes("Online")) {
    bankingAdvice = `
      You prefer online banking. Wise and Revolut work well initially in ${country},
      but you will still need a local bank account for residency, utilities, and tax.
    `;
  } else if (banking.includes("Combination")) {
    bankingAdvice = `
      A mixed banking setup is ideal. Keep UK accounts, use Wise/Revolut for transfers,
      and open a local ${country} bank for compliance.
    `;
  } else if (banking.includes("Local")) {
    bankingAdvice = `
      A local bank account will be required in ${country}. Expect compliance checks
      and in-person verification.
    `;
  } else {
    bankingAdvice = `
      Relying only on UK banking may cause issues with residency, healthcare,
      and long-term stability in ${country}.
    `;
  }

  document.getElementById("output").innerHTML = `
    <h3>Your Relocation Plan for ${country}</h3>

    <p><strong>Visa Route:</strong> ${countryData.visa}</p>
    <p><strong>Tax Overview:</strong> ${countryData.tax}</p>

    <p><strong>Banking Strategy:</strong> ${banking}</p>
    <p>${bankingAdvice}</p>

    <p><strong>Healthcare Preference:</strong> ${healthcare}</p>
    <p><strong>Housing Plan:</strong> ${housing}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Lifestyle Preference:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>

    <hr>

    <p><strong>Next Steps:</strong></p>
    <ul>
      <li>Confirm visa eligibility for ${country}</li>
      <li>Prepare banking documentation</li>
      <li>Assess tax residency exposure</li>
      <li>Arrange healthcare access</li>
    </ul>
  `;
}
