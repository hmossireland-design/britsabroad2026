document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // COUNTRY DATA
  // ===============================
  const countries = {
    Portugal: {
      tax: "10% flat tax on foreign pension (legacy NHR-style)",
      visa: "D7 Passive Income Visa",
      banking: "Revolut & Wise supported, local bank required"
    },
    Spain: {
      tax: "Progressive tax up to ~47%",
      visa: "Non-Lucrative Visa",
      banking: "Spanish bank required, Revolut limited"
    },
    France: {
      tax: "Progressive tax + social charges",
      visa: "Visitor Visa",
      banking: "French bank required"
    },
    Italy: {
      tax: "7% flat tax (southern regions)",
      visa: "Elective Residency Visa",
      banking: "Italian bank required"
    },
    Greece: {
      tax: "7% flat tax for retirees",
      visa: "Financially Independent Person Visa",
      banking: "Local bank required, Revolut supported"
    },
    UAE: {
      tax: "0% personal income tax",
      visa: "Retirement / Golden Visa",
      banking: "UAE bank required, Wise useful for transfers"
    },
    Cyprus: {
      tax: "Low tax, non-dom benefits",
      visa: "Category F / Permanent Residency",
      banking: "Local bank required, Revolut widely used"
    },
    Thailand: {
      tax: "Territorial-style taxation",
      visa: "Retirement Visa",
      banking: "Thai bank required"
    },
    Malaysia: {
      tax: "Territorial tax system",
      visa: "MM2H",
      banking: "Local bank required"
    }
  };

  // ===============================
  // POPULATE COUNTRY DROPDOWN
  // ===============================
  const countrySelect = document.getElementById("countrySelect");

  if (countrySelect) {
    Object.keys(countries).forEach(country => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });
  }

  // ===============================
  // SUMMARY GENERATION
  // ===============================
  window.generateSummary = function () {
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

    const output = document.getElementById("output");

    if (!country) {
      output.innerHTML =
        "<p style='color:red;'>Please select a destination country.</p>";
      return;
    }

    const data = countries[country];

    let bankingAdvice = "";

    if (banking.includes("Online")) {
      bankingAdvice =
        "Online banks like Wise and Revolut work well initially, but a local bank will still be required.";
    } else if (banking.includes("Local")) {
      bankingAdvice =
        "A local bank account is essential for residency, utilities, and tax compliance.";
    } else {
      bankingAdvice =
        "A mixed setup (UK + online + local bank) offers the most flexibility.";
    }

    output.innerHTML = `
      <h3>Your Relocation Plan for ${country}</h3>

      <p><strong>Visa:</strong> ${data.visa}</p>
      <p><strong>Tax:</strong> ${data.tax}</p>
      <p><strong>Banking:</strong> ${data.banking}</p>

      <hr>

      <p><strong>Your Preferences:</strong></p>
      <ul>
        <li>Age: ${age}</li>
        <li>Income: £${income}/month</li>
        <li>Healthcare: ${healthcare}</li>
        <li>Housing: ${housing}</li>
        <li>Transport: ${transport}</li>
        <li>Lifestyle: ${lifestyle}</li>
        <li>Risk tolerance: ${risk}</li>
      </ul>

      <p><strong>Banking Strategy:</strong> ${bankingAdvice}</p>

      <hr>

      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Confirm visa eligibility</li>
        <li>Prepare banking documentation</li>
        <li>Assess tax residency exposure</li>
        <li>Arrange healthcare access</li>
      </ul>
    `;
  };

});
