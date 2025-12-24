document.addEventListener("DOMContentLoaded", () => {

  const phases = document.querySelectorAll(".phase");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const output = document.getElementById("output");

  let currentPhase = 0;

  function showPhase(index) {
    phases.forEach((phase, i) => {
      phase.style.display = i === index ? "block" : "none";
    });

    // Progress
    const percent = Math.round((index / (phases.length - 1)) * 100);
    progressBar.style.width = percent + "%";
    progressText.textContent = `Phase ${index + 1} of ${phases.length}`;

    backBtn.style.display = index === 0 ? "none" : "inline-block";
    nextBtn.textContent = index === phases.length - 1 ? "Finish" : "Next";
  }

  function validatePhase(index) {
    const phase = phases[index];
    const input = phase.querySelector("input, select");

    if (!input) return true;

    if (input.value === "" || input.value === null) {
      alert("Please complete this step before continuing.");
      return false;
    }
    return true;
  }

  function generateSummary() {
    const country = document.getElementById("countrySelect")?.value || "N/A";

    output.innerHTML = `
      <h3>Your Relocation Summary</h3>
      <ul>
        <li><strong>Country:</strong> ${country}</li>
        <li><strong>Age:</strong> ${document.getElementById("age")?.value || "-"}</li>
        <li><strong>Income:</strong> £${document.getElementById("income")?.value || "-"}</li>
        <li><strong>Healthcare:</strong> ${document.getElementById("healthcare")?.value || "-"}</li>
        <li><strong>Housing:</strong> ${document.getElementById("housing")?.value || "-"}</li>
        <li><strong>Banking:</strong> ${document.getElementById("banking")?.value || "-"}</li>
        <li><strong>Transport:</strong> ${document.getElementById("transport")?.value || "-"}</li>
        <li><strong>Residency Route:</strong> ${document.getElementById("visa")?.value || "-"}</li>
        <li><strong>Lifestyle:</strong> ${document.getElementById("lifestyle")?.value || "-"}</li>
        <li><strong>Risk Tolerance:</strong> ${document.getElementById("risk")?.value || "-"}</li>
      </ul>
    `;
  }

  nextBtn.addEventListener("click", () => {
    if (!validatePhase(currentPhase)) return;

    if (currentPhase < phases.length - 1) {
      currentPhase++;
      showPhase(currentPhase);

      if (currentPhase === phases.length - 1) {
        generateSummary();
      }
    }
  });

  backBtn.addEventListener("click", () => {
    if (currentPhase > 0) {
      currentPhase--;
      showPhase(currentPhase);
    }
  });

  showPhase(currentPhase);
});
