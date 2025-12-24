const phases = document.querySelectorAll(".phase");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const output = document.getElementById("output");

let currentPhase = 0;
const totalPhases = phases.length;

function showPhase(index) {
  phases.forEach(p => p.classList.remove("active"));
  phases[index].classList.add("active");

  progressBar.style.width = ((index) / (totalPhases - 1)) * 100 + "%";
  progressText.innerText = `Phase ${index + 1} of ${totalPhases}`;

  backBtn.style.display = index === 0 ? "none" : "inline-block";
  nextBtn.innerText = index === totalPhases - 1 ? "Finish" : "Next";
}

function generateSummary() {
  output.innerHTML = `
    <h3>Your Plan</h3>
    <ul>
      <li><strong>Country:</strong> ${country.value}</li>
      <li><strong>Age:</strong> ${age.value}</li>
      <li><strong>Income:</strong> €${income.value}</li>
      <li><strong>Healthcare:</strong> ${healthcare.value}</li>
      <li><strong>Housing:</strong> ${housing.value}</li>
      <li><strong>Banking:</strong> ${banking.value}</li>
      <li><strong>Transport:</strong> ${transport.value}</li>
      <li><strong>Residency:</strong> ${visa.value}</li>
      <li><strong>Lifestyle:</strong> ${lifestyle.value}</li>
      <li><strong>Tax Focus:</strong> ${tax.value}</li>
    </ul>
  `;
}

nextBtn.addEventListener("click", () => {
  if (currentPhase < totalPhases - 1) {
    currentPhase++;
    if (currentPhase === totalPhases - 1) generateSummary();
    showPhase(currentPhase);
  }
});

backBtn.addEventListener("click", () => {
  if (currentPhase > 0) {
    currentPhase--;
    showPhase(currentPhase);
  }
});

showPhase(currentPhase);
