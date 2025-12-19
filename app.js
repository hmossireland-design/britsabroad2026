document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     COUNTRY DATA
  ================================ */
  const countries = [
    { name: "Portugal", flag: "🇵🇹" },
    { name: "Spain", flag: "🇪🇸" },
    { name: "France", flag: "🇫🇷" },
    { name: "Ireland", flag: "🇮🇪" },
    { name: "Cyprus", flag: "🇨🇾" },
    { name: "Italy", flag: "🇮🇹" },
    { name: "Greece", flag: "🇬🇷" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Thailand", flag: "🇹🇭" },
    { name: "Malaysia", flag: "🇲🇾" },
    { name: "Mexico", flag: "🇲🇽" },
    { name: "Panama", flag: "🇵🇦" },
    { name: "Poland", flag: "🇵🇱" },
    { name: "Hungary", flag: "🇭🇺" },
    { name: "Bulgaria", flag: "🇧🇬" },
    { name: "Mauritius", flag: "🇲🇺" }
  ];

  const grid = document.getElementById("countryGrid");
  const countryInput = document.getElementById("countrySelect");

  if (grid) {
    countries.forEach(country => {
      const card = document.createElement("div");
      card.className = "country-card";
      card.innerHTML = `
        <div class="country-flag">${country.flag}</div>
        <div class="country-name">${country.name}</div>
      `;

      card.addEventListener("click", () => {
        document.querySelectorAll(".country-card")
          .forEach(c => c.classList.remove("selected"));

        card.classList.add("selected");
        countryInput.value = country.name;
      });

      grid.appendChild(card);
    });
  }

});

/* ===============================
   SUMMARY GENERATOR
================================ */
function generateSummary() {
  const country = document.getElementById("countrySelect").value;

  if (!country) {
    alert("Please select a destination country first.");
    return;
  }

  const output = document.getElementById("output");
  output.innerHTML = `
    <h3>Your Relocation Plan</h3>
    <p><strong>Destination:</strong> ${country}</p>
    <p>Next steps will include visa rules, tax exposure, and healthcare setup specific to ${country}.</p>
  `;
}
