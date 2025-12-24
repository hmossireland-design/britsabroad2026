// Elements
const phases = document.querySelectorAll(".phase");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const output = document.getElementById("output");

// State
let currentPhase = 0;

// Show current phase
function showPhase(index) {
  phases.forEach((p, i) => {
    p.classList.toggle("active", i === index);
  });

  // Update progress bar
  progressBar.style.width = `${(index / (phases.length - 1)) * 100}%`;
  progressText.innerText = `Phase ${index + 1} of ${phases.length}`;

  // Hide Back on first
  backBtn.style.display = index === 0 ? "none" : "inline-block";

  // Change Next button to "Finish" on last
  nextBtn.innerText = index === phases.length - 1 ? "Finish" : "Next";
}

// Validate before moving forward
function canProceed(phaseIndex) {
  const phase = phases[phaseIndex];

  // Find input/select within current phase
  const input = phase.querySelector("input, select");

  // If none or empty, block
  if (!input || input.value === "" || input.value === null) {
    alert("Please complete this field before continuing.");
    return false;
  }
  return true;
}

// Generate summary
function generateSummary() {
  // Use ids from your inputs
  const summaryHTML = `
    <h3>Your Relocation Summary</h3>
    <ul>
      <li><strong>Country:</strong> ${document.getElementById("country").value}</li>
      <li><strong>Age:</strong> ${document.getElementById("age").value}</li>
      <li><strong>Income:</strong> €${document.getElementById("income").value}</li>
      <li><strong>Healthcare:</strong> ${document.getElementById("healthcare").value}</li>
      <li><strong>Housing:</strong> ${document.getElementById("housing").value}</li>
      <li><strong>Banking:</strong> ${document.getElementById("banking").value}</li>
      <li><strong>Transport:</strong> ${document.getElementById("transport").value}</li>
      <li><strong>Residency:</strong> ${document.getElementById("visa").value}</li>
      <li><strong>Lifestyle:</strong> ${document.getElementById("lifestyle").value}</li>
      <li><strong>Tax Awareness:</strong> ${document.getElementById("tax").value}</li>
    </ul>
  `;
  output.innerHTML = summaryHTML;
}

// Navigation events
nextBtn.addEventListener("click", () => {
  // If not the last phase
  if (currentPhase < phases.length - 1) {
    // Validate current input
    if (!canProceed(currentPhase)) return;

    // Move to next
    currentPhase++;
    showPhase(currentPhase);

    // If now on the summary phase
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

// Initialize
showPhase(currentPhase);
