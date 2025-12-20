const countryData = {
  Portugal: {
    visa: "D7 Passive Income Visa",
    minIncome: 870,
    tax: "10% pension tax",
    healthcare: "Private → Public",
    notes: "Very popular with UK retirees."
  },
  Spain: {
    visa: "Non-Lucrative Visa",
    minIncome: 2400,
    tax: "Up to ~24%",
    healthcare: "Private required",
    notes: "No work allowed."
  },
  Ireland: {
    visa: "No visa required",
    minIncome: 0,
    tax: "Worldwide taxation",
    healthcare: "Public + Private",
    notes: "High cost of living."
  },
  France: {
    visa: "Long-Stay Visitor",
    minIncome: 1800,
    tax: "Progressive",
    healthcare: "S1 possible",
    notes: "Excellent healthcare."
  },
  Cyprus: {
    visa: "Category F / Pink Slip",
    minIncome: 1000,
    tax: "Low pension tax",
    healthcare: "GESY",
    notes: "English widely spoken."
  },
  UAE: {
    visa: "Retirement Visa",
    minIncome: 4200,
    tax: "0% income tax",
    healthcare: "Private only",
    notes: "No permanent residency."
  }
};

/* Populate country dropdown */
const countrySelect = document.getElementById("countrySelect");

Object.keys(countryData).forEach(country => {
  const option = document.createElement("option");
  option.value = country;
  option.textContent = country;
  countrySelect.appendChild(option);
});

function generateSummary() {
  const country = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const housing = document.getElementById("housing").value;
  const risk = document.getElementById("risk").value;

  const output = document.getElementById("output");

  if (!country || !age || !income) {
    output.innerHTML = "<p style='color:red;'>Please complete country, age, and income.</p>";
    return;
  }

  const data = countryData[country];

  const incomeCheck =
    income >= data.minIncome
      ? "✅ Income meets visa requirements"
      : "❌ Income does NOT meet visa requirements";

  output.innerHTML = `
    <div style="border:1px solid #ccc; padding:15px; margin-top:15px;">
      <h3>Your Relocation Plan</h3>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Visa:</strong> ${data.visa}</p>
      <p><strong>Required Income:</strong> £${data.minIncome}/month</p>
      <p>${incomeCheck}</p>
      <p><strong>Tax:</strong> ${data.tax}</p>
      <p><strong>Healthcare:</strong> ${data.healthcare}</p>
      <p><strong>Housing:</strong> ${housing}</p>
      <p><strong>Risk Profile:</strong> ${risk}</p>
      <p><strong>Notes:</strong> ${data.notes}</p>
    </div>
  `;
}
