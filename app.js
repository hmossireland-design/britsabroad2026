console.log("✅ app.js loaded");

const countrySelect = document.getElementById("countrySelect");

if (!countrySelect) {
  alert("❌ countrySelect NOT FOUND");
} else {
  const countries = [
    "Portugal",
    "Spain",
    "France",
    "Cyprus",
    "Italy",
    "Greece",
    "UAE",
    "Thailand",
    "Malaysia"
  ];

  countrySelect.innerHTML = '<option value="">Select country</option>';

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
}

document.getElementById("generateBtn").onclick = () => {
  document.getElementById("output").innerHTML =
    `<p>Selected country: <strong>${countrySelect.value}</strong></p>`;
};
