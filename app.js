document.addEventListener("DOMContentLoaded", () => {
  populateCountries();
});

/* =======================
   COUNTRY DATA (30)
======================= */

const countryData = {
  "Portugal": {},
  "Spain": {},
  "France": {},
  "Italy": {},
  "Cyprus": {},
  "Greece": {},
  "Malta": {},
  "UAE": {},
  "Thailand": {},
  "Malaysia": {},
  "Vietnam": {},
  "Indonesia": {},
  "Philippines": {},
  "Mexico": {},
  "Costa Rica": {},
  "Panama": {},
  "Colombia": {},
  "Brazil": {},
  "Uruguay": {},
  "Chile": {},
  "Canada": {},
  "USA": {},
  "Australia": {},
  "New Zealand": {},
  "South Africa": {},
  "Turkey": {},
  "Georgia": {},
  "Montenegro": {},
  "Bulgaria": {},
  "Romania": {}
};

/* =======================
   POPULATE COUNTRIES
======================= */

function populateCountries() {
  const select = document.getElementById("countrySelect");

  select.innerHTML = '<option value="">Select country</option>';

  Object.keys(countryData)
    .sort()
    .forEach(country => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      select.appendChild(option);
    });

  console.log("Countries loaded:", Object.keys(countryData).length);
}

/* =======================
   GENERATE SUMMARY
======================= */

function generateSummary() {
  const country = document.getElementById("countrySelect").value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visa = document.getElementById("visa").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  if (!country) {
    document.getElementById("output").innerHTML =
      "<p style='color:red;'>Please select a destination country.</p>";
    return;
  }

  document.getElementById("output").innerHTML = `
    <h3>Your Relocation Plan</h3>
    <p><strong>Destination:</strong> ${country}</p>
    <p><strong>Age:</strong> ${age || "Not specified"}</p>
    <p><strong>Monthly Income:</strong> £${income || "Not specified"}</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Residency Route:</strong> ${visa}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>

    <p style="margin-top:15px;">
      Next steps will include <strong>visa rules, tax exposure, healthcare setup</strong>
      and a personalised relocation checklist for <strong>${country}</strong>.
    </p>
  `;
}
