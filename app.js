document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     COUNTRY DATA
  =============================== */
  const countries = [
    { code: "PT", name: "Portugal", flag: "🇵🇹", tax: "10% (NHR)", visa: "D7 Passive Income" },
    { code: "ES", name: "Spain", flag: "🇪🇸", tax: "19–47%", visa: "Non-Lucrative" },
    { code: "CY", name: "Cyprus", flag: "🇨🇾", tax: "0–5%", visa: "Pink Slip" },
    { code: "AE", name: "UAE", flag: "🇦🇪", tax: "0%", visa: "Remote / Retirement" },
    { code: "TH", name: "Thailand", flag: "🇹🇭", tax: "Low", visa: "LTR / Retirement" },
    { code: "MY", name: "Malaysia", flag: "🇲🇾", tax: "Territorial", visa: "MM2H" },
    { code: "MX", name: "Mexico", flag: "🇲🇽", tax: "0–30%", visa: "Temporary Resident" },
    { code: "ID", name: "Indonesia", flag: "🇮🇩", tax: "Territorial", visa: "Second Home" },
    { code: "VN", name: "Vietnam", flag: "🇻🇳", tax: "Low", visa: "Long Stay" },
    { code: "MU", name: "Mauritius", flag: "🇲🇺", tax: "15%", visa: "Premium Visa" }
  ];

  /* ===============================
     POPULATE COUNTRY DROPDOWN
  =============================== */
  const countrySelect = document.getElementById("countrySelect");

  countries.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.code;
    opt.textContent = `${c.flag} ${c.name}`;
    countrySelect.appendChild(opt);
  });

  /* ===============================
     SUMMARY GENERATOR
  =============================== */
  window.generateSummary = function () {

    const countryCode = countrySelect.value;
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

    if (!countryCode) {
      output.innerHTML = "<p style='color:red;'>Please select a destination country.</p>";
      return;
    }

    const country = countries.find(c => c.code === countryCode);

    output.innerHTML = `
      <h3>Your Relocation Summary</h3>

      <p><strong>Destination:</strong> ${country.flag} ${country.name}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Monthly Income:</strong> £${income}</p>

      <hr>

      <p><strong>Visa Route:</strong> ${country.visa}</p>
      <p><strong>Tax Environment:</strong> ${country.tax}</p>

      <hr>

      <p><strong>Healthcare:</strong> ${healthcare}</p>
      <p><strong>Housing:</strong> ${housing}</p>
      <p><strong>Banking:</strong> ${banking}</p>
      <p><strong>Transport:</strong> ${transport}</p>
      <p><strong>Lifestyle:</strong> ${lifestyle}</p>
      <p><strong>Risk Tolerance:</strong> ${risk}</p>

      <hr>

      <p><em>
      Next steps will include visa paperwork, tax optimisation,
      healthcare registration, and banking setup specific to ${country.name}.
      </em></p>
    `;
  };

});
