console.log("Brits Abroad 2026 loaded");

const countries = [
  "Portugal","Spain","France","Italy","Greece","Cyprus","Malta",
  "Ireland","UAE","Thailand","Malaysia","Panama","Mexico",
  "Costa Rica","Colombia","Bulgaria","Hungary","Poland",
  "Slovakia","Slovenia","Indonesia","Vietnam","Mauritius",
  "Ecuador","Uruguay","Argentina","USA","Canada",
  "Australia","New Zealand"
];

const countrySelect = document.getElementById("countrySelect");

countrySelect.innerHTML = `<option value="">Select country</option>`;
countries.forEach(c => {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = c;
  countrySelect.appendChild(opt);
});

function generateSummary() {
  const country = countrySelect.value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;

  if (!country) {
    alert("Please select a destination country");
    return;
  }

  const output = document.getElementById("output");

  output.innerHTML = `
    <h3>Your Personal Relocation Summary</h3>
    <p><strong>Destination:</strong> ${country}</p>
    <p><strong>Age:</strong> ${age || "Not specified"}</p>
    <p><strong>Monthly Income:</strong> £${income || "Not specified"}</p>
    <p><strong>Healthcare Preference:</strong> ${healthcare || "Not specified"}</p>
    <p><strong>Housing Plan:</strong> ${housing || "Not specified"}</p>

    <p class="note">
      This is a baseline plan for <strong>${country}</strong>.
      Visa rules, tax exposure, healthcare setup and timelines
      will be added next.
    </p>
  `;
}
