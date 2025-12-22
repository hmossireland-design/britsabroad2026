let selectedCountry = "";
let completed = 0;

/* =============================
   COUNTRY DATABASE
   ============================= */

const countryData = {
  Portugal: {
    visa: "D7 Passive Income or Digital Nomad Visa",
    tax: "NHR regime (being phased out) – foreign income may be taxed",
    banking: "Portuguese bank + Wise/Revolut recommended"
  },
  Spain: {
    visa: "Non-Lucrative or Digital Nomad Visa",
    tax: "Worldwide income taxable if resident",
    banking: "Spanish bank often required"
  },
  France: {
    visa: "Long Stay Visitor Visa",
    tax: "Worldwide income taxable after residency",
    banking: "French bank usually required"
  },
  Italy: {
    visa: "Elective Residency Visa",
    tax: "Flat tax option available for some residents",
    banking: "Italian bank required"
  },
  Greece: {
    visa: "Financially Independent Person Visa",
    tax: "Flat tax schemes available for retirees",
    banking: "Greek bank required"
  },
  Cyprus: {
    visa: "Category F / Visitor Residency",
    tax: "Non-dom regime – very favourable",
    banking: "Local + online banks common"
  },
  Malta: {
    visa: "Global Residence Programme",
    tax: "Remittance-based taxation",
    banking: "Maltese bank required"
  },
  UAE: {
    visa: "Remote Work or Retirement Visa",
    tax: "No personal income tax",
    banking: "Local bank + Wise common"
  },
  Thailand: {
    visa: "Retirement or Long-Term Resident Visa",
    tax: "Foreign income taxable if remitted",
    banking: "Thai bank required"
  },
  Ireland: {
    visa: "Stamp 0",
    tax: "Worldwide income taxable",
    banking: "Irish bank required"
  }
};

/* =============================
   COUNTRY LIST WITH FLAGS
   ============================= */

const countries = [
  ["Portugal","pt"],["Spain","es"],["France","fr"],["Italy","it"],
  ["Greece","gr"],["Cyprus","cy"],["Malta","mt"],["UAE","ae"],
  ["Thailand","th"],["Ireland","ie"]
];

const countryContainer = document.getElementById("countryCards");

countries.forEach(c => {
  const div = document.createElement("div");
  div.className = "country-card";
  div.innerHTML = `
    <img src="https://flagcdn.com/w40/${c[1]}.png">
    <p>${c[0]}</p>
  `;
  div.onclick = () => selectCountry(c[0], div);
  countryContainer.appendChild(div);
});

/* =============================
   SELECTION LOGIC
   ============================= */

function selectCountry(name, el) {
  selectedCountry = name;
  document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("change", updateProgress);
  el.addEventListener("input", updateProgress);
});

/* =============================
   PROGRESS BAR
   ============================= */

function updateProgress() {
  const inputs = document.querySelectorAll("input, select");
  completed = 0;

  inputs.forEach(i => {
    if (i.value) completed++;
  });

  if (selectedCountry) completed++;

  document.getElementById("progress-text")
    .innerText = `${completed} / 11 completed`;

  document.getElementById("progress-fill")
    .style.width = `${(completed / 11) * 100}%`;
}

document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("change", updateProgress);
});

/* =============================
   SUMMARY GENERATION
   ============================= */

function generateSummary() {
  if (!selectedCountry) {
    alert("Please select a destination country.");
    return;
  }

  const c = countryData[selectedCountry];

  document.getElementById("output").innerHTML = `
    <h3>${selectedCountry} Relocation Summary</h3>

    <strong>Visa Route:</strong><br>
    ${c.visa}<br><br>

    <strong>Tax Exposure:</strong><br>
    ${c.tax}<br><br>

    <strong>Banking Setup:</strong><br>
    ${c.banking}<br><br>

    <strong>Your Inputs:</strong><br>
    Age: ${age.value}<br>
    Income: £${income.value}/month<br>
    Healthcare: ${healthcare.value}<br>
    Housing: ${housing.value}<br>
    Banking Preference: ${banking.value}<br>
    Transport: ${transport.value}<br>
    Residency Type: ${visa.value}<br>
    Lifestyle: ${lifestyle.value}<br>
    Risk Level: ${risk.value}<br><br>

    <em>This is a planning guide, not legal advice.</em>
  `;
}
