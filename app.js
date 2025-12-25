/* ===============================
   BRITS ABROAD 2026 – CORE LOGIC
   =============================== */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
     COUNTRY DATA (SIMPLE & SAFE)
     ----------------------------- */
  const countries = [
    "Portugal", "Spain", "France", "Ireland", "Cyprus", "Italy",
    "Greece", "UAE", "Thailand", "Malta",
    "Poland", "Hungary", "Czech Republic", "Slovakia", "Bulgaria",
    "Malaysia", "Panama", "Mexico", "Costa Rica", "Ecuador"
  ];

  const countrySelect = document.getElementById("countrySelect");

  if (countrySelect) {
    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });
  }

  /* -----------------------------
     PROGRESS BAR
     ----------------------------- */
  const totalPhases = 11;
  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");

  function updateProgress() {
    let completed = 0;

    const inputs = [
      "countrySelect", "age", "income", "healthcare", "housing",
      "banking", "transport", "visa", "lifestyle", "risk"
    ];

    inputs.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.value && el.value !== "") {
        completed++;
      }
    });

    if (progressText && progressBar) {
      progressText.textContent = `${completed} / ${totalPhases} completed`;
      progressBar.style.width = `${(completed / totalPhases) * 100}%`;
    }
  }

  document.querySelectorAll("input, select").forEach(el => {
    el.addEventListener("change", updateProgress);
    el.addEventListener("input", updateProgress);
  });

  updateProgress();
});


/* -----------------------------
   SUMMARY GENERATION
   ----------------------------- */
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

  const output = document.getElementById("output");

  if (!country) {
    output.innerHTML = "<strong>Please select a destination country.</strong>";
    return;
  }

  output.innerHTML = `
    <h3>📍 Your Relocation Summary</h3>

    <p><strong>Destination:</strong> ${country}</p>
    <p><strong>Age:</strong> ${age || "Not specified"}</p>
    <p><strong>Monthly Income:</strong> £${income || "Not specified"}</p>

    <hr>

    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Residency Route:</strong> ${visa}</p>
    <p><strong>Lifestyle:</strong> ${lifestyle}</p>
    <p><strong>Risk Profile:</strong> ${risk}</p>

    <hr>

    <p>
      Based on your inputs, <strong>${country}</strong> is a viable relocation option.
      Next steps would include reviewing visa requirements, tax exposure,
      healthcare access, and banking setup specific to your situation.
    </p>
  `;
}
