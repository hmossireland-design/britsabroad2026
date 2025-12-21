document.addEventListener("DOMContentLoaded", function () {

  // CONFIRM JS LOADED
  const status = document.getElementById("jsStatus");
  status.textContent = "JS LOADED SUCCESSFULLY";
  status.style.color = "green";

  // COUNTRY LIST (TEST SET)
  const countryList = [
    "Portugal",
    "Spain",
    "France",
    "Italy",
    "Greece",
    "Cyprus",
    "UAE",
    "Thailand",
    "Malaysia",
    "Canada",
    "Australia"
  ];

  const countrySelect = document.getElementById("countrySelect");

  // SAFETY CHECK
  if (!countrySelect) {
    alert("Country select element NOT found");
    return;
  }

  // POPULATE COUNTRIES
  countryList.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });

});

// SUMMARY FUNCTION
function generateSummary() {

  const country = document.getElementById("countrySelect").value;
  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const output = document.getElementById("output");

  if (!country) {
    output.innerHTML = "<p style='color:red;'>Please select a country.</p>";
    return;
  }

  output.innerHTML = `
    <h3>Your Plan</h3>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Income:</strong> £${income}</p>
  `;
}
