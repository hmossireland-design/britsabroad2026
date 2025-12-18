document.addEventListener("DOMContentLoaded", () => {

  const countries = [
    "Portugal","Spain","Ireland","Australia","Cyprus","Malta","France","UAE",
    "Thailand","Italy","Greece","Canada","New Zealand","Malaysia","Panama",
    "Mexico","Costa Rica","Hungary","Poland","Slovenia","Slovakia","Bulgaria",
    "Indonesia","Colombia","Mauritius","Belize","Ecuador","Uruguay","Chile","Latvia"
  ];

  const countrySelect = document.getElementById("countrySelect");

  // SAFETY CHECK
  if (!countrySelect) {
    console.error("Country select element not found");
    return;
  }

  // Populate dropdown
  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  // Make function global so button can call it
  window.generateSummary = function () {

    const data = {
      country: countrySelect.value,
      age: document.getElementById("age").value,
      income: document.getElementById("income").value,
      healthcare: document.getElementById("healthcare").value,
      housing: document.getElementById("housing").value,
      banking: document.getElementById("banking").value,
      transport: document.getElementById("transport").value,
      visa: document.getElementById("visa").value,
      lifestyle: document.getElementById("lifestyle").value,
      risk: document.getElementById("risk").value
    };

    if (!data.country) {
      alert("Please select a destination country.");
      return;
    }

    const output = document.getElementById("output");

    output.innerHTML = `
      <h3>Your Relocation Plan: ${data.country}</h3>
      <ul>
        <li><strong>Age:</strong> ${data.age}</li>
        <li><strong>Income:</strong> £${data.income} / month</li>
        <li><strong>Healthcare:</strong> ${data.healthcare}</li>
        <li><strong>Housing:</strong> ${data.housing}</li>
        <li><strong>Banking:</strong> ${data.banking}</li>
        <li><strong>Transport:</strong> ${data.transport}</li>
        <li><strong>Residency Route:</strong> ${data.visa}</li>
        <li><strong>Lifestyle:</strong> ${data.lifestyle}</li>
        <li><strong>Risk Tolerance:</strong> ${data.risk}</li>
      </ul>

      <p>
        <strong>Next steps:</strong><br>
        Visa rules, tax exposure, healthcare access, and cost of living analysis
        will now be generated specifically for <strong>${data.country}</strong>.
      </p>
    `;
  };

});
