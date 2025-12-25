document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     COUNTRY DATA
  =============================== */

  const countries = [
    { name: "Portugal", flag: "🇵🇹" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "France", flag: "🇫🇷" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Greece", flag: "🇬🇷" },
    { name: "Cyprus", flag: "🇨🇾" },
    { name: "Malta", flag: "🇲🇹" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Thailand", flag: "🇹🇭" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "New Zealand", flag: "🇳🇿" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "Costa Rica", flag: "🇨🇷" },
    { name: "Panama", flag: "🇵🇦" },
    { name: "Hungary", flag: "🇭🇺" },
    { name: "Poland", flag: "🇵🇱" },
    { name: "Slovakia", flag: "🇸🇰" }
  ];

  /* ===============================
     POPULATE COUNTRY DROPDOWN
  =============================== */

  const countrySelect = document.getElementById("countrySelect");

  if (!countrySelect) {
    console.error("❌ countrySelect not found in DOM");
    return;
  }

  // Clear any cached options (important!)
  countrySelect.innerHTML = `<option value="">Select a country</option>`;

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country.name;
    option.textContent = `${country.flag} ${country.name}`;
    countrySelect.appendChild(option);
  });

  console.log("✅ Countries injected:", countries.length);

  /* ===============================
     PROGRESS BAR LOGIC
  =============================== */

  const totalPhases = 11;

  function updateProgress() {
    let completed = 0;

    const fields = [
      "countrySelect","age","income","healthcare","housing",
      "banking","transport","visa","lifestyle","risk"
    ];

    fields.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value) completed++;
    });

    const percent = Math.round((completed / totalPhases) * 100);

    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent =
      `${completed} / ${totalPhases} completed`;
  }

  document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("change", updateProgress);
  });

  /* ===============================
     SUMMARY GENERATION
  =============================== */

  window.generateSummary = function () {

    const get = id => document.getElementById(id)?.value || "Not specified";

    const summaryHTML = `
      <h3>Relocation Summary</h3>
      <p><strong>Destination:</strong> ${get("countrySelect")}</p>
      <p><strong>Age:</strong> ${get("age")}</p>
      <p><strong>Monthly Income:</strong> £${get("income")}</p>
      <p><strong>Healthcare:</strong> ${get("healthcare")}</p>
      <p><strong>Housing:</strong> ${get("housing")}</p>
      <p><strong>Banking:</strong> ${get("banking")}</p>
      <p><strong>Transport:</strong> ${get("transport")}</p>
      <p><strong>Residency Route:</strong> ${get("visa")}</p>
      <p><strong>Lifestyle:</strong> ${get("lifestyle")}</p>
      <p><strong>Risk Tolerance:</strong> ${get("risk")}</p>
    `;

    document.getElementById("output").innerHTML = summaryHTML;
  };

});
