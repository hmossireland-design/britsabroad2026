document.addEventListener("DOMContentLoaded", () => {

  /* ==========================
     COUNTRY DATABASE (30)
     ========================== */

  const countries = {
    Portugal: { visa: "D7 Passive Income", tax: "10% pension", healthcare: "Public + Private" },
    Spain: { visa: "Non-Lucrative", tax: "Progressive", healthcare: "Excellent public" },
    Ireland: { visa: "CTA (No visa)", tax: "High", healthcare: "Public + Private" },
    Cyprus: { visa: "Category F", tax: "0% foreign pension", healthcare: "GESY" },
    Malta: { visa: "MRP", tax: "Remittance basis", healthcare: "Public + Private" },
    France: { visa: "Visitor", tax: "Progressive", healthcare: "S1 eligible" },
    UAE: { visa: "Retirement", tax: "0%", healthcare: "Private only" },
    Italy: { visa: "Elective Residence", tax: "7% (South)", healthcare: "Public" },
    Greece: { visa: "FIP", tax: "7% flat", healthcare: "Public" },
    Thailand: { visa: "Retirement", tax: "Territorial", healthcare: "Private" },
    Malaysia: { visa: "MM2H", tax: "Territorial", healthcare: "Private" },
    Panama: { visa: "Pensionado", tax: "Territorial", healthcare: "Private" },
    Mexico: { visa: "Temporary Resident", tax: "Progressive", healthcare: "Private" },
    CostaRica: { visa: "Pensionado", tax: "Territorial", healthcare: "Public + Private" },
    Hungary: { visa: "Residence", tax: "15%", healthcare: "Public" },
    Poland: { visa: "Temporary Residence", tax: "Flat 12%", healthcare: "Public" },
    Slovenia: { visa: "Residence", tax: "Progressive", healthcare: "Public" },
    Slovakia: { visa: "Temporary Residence", tax: "19%", healthcare: "Public" },
    Bulgaria: { visa: "D Visa", tax: "10% flat", healthcare: "Public" },
    Indonesia: { visa: "KITAS", tax: "Territorial", healthcare: "Private" },
    Colombia: { visa: "Pension Visa", tax: "Progressive", healthcare: "Public" },
    Mauritius: { visa: "Retired Permit", tax: "15%", healthcare: "Private" },
    Belize: { visa: "QRP", tax: "0% foreign income", healthcare: "Private" },
    Ecuador: { visa: "Pensioner Visa", tax: "Low", healthcare: "Public + Private" },
    Uruguay: { visa: "Residency", tax: "Territorial", healthcare: "Public" },
    Chile: { visa: "Retirement", tax: "Progressive", healthcare: "Public" },
    Latvia: { visa: "Temporary Residence", tax: "20%", healthcare: "Public" }
  };

  /* ==========================
     POPULATE COUNTRY DROPDOWN
     ========================== */

  const countrySelect = document.getElementById("countrySelect");
  Object.keys(countries).forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

  /* ==========================
     SUMMARY GENERATOR
     ========================== */

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

    if (!country || !age || !income) {
      alert("Please complete at least country, age, and income.");
      return;
    }

    const data = countries[country];

    const output = document.getElementById("output");
    output.innerHTML = `
      <h3>📍 Your Relocation Summary</h3>

      <p><strong>Destination:</strong> ${country}</p>
      <p><strong>Recommended Visa:</strong> ${data.visa}</p>
      <p><strong>Tax Outlook:</strong> ${data.tax}</p>
      <p><strong>Healthcare System:</strong> ${data.healthcare}</p>

      <hr>

      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Monthly Income:</strong> £${income}</p>
      <p><strong>Healthcare Preference:</strong> ${healthcare}</p>
      <p><strong>Housing Plan:</strong> ${housing}</p>
      <p><strong>Banking:</strong> ${banking}</p>
      <p><strong>Transport:</strong> ${transport}</p>
      <p><strong>Residency Route:</strong> ${visaRoute}</p>
      <p><strong>Lifestyle:</strong> ${lifestyle}</p>
      <p><strong>Risk Tolerance:</strong> ${risk}</p>

      <hr>

      <p><em>Next steps will include visa paperwork, tax residency planning, and healthcare setup specific to ${country}.</em></p>
    `;
  };

});
