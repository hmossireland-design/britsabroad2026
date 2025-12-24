// ===== GLOBAL STATE =====
const totalPhases = 11;
let completedPhases = new Set();

// ===== ELEMENTS =====
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const output = document.getElementById("output");

// ===== UPDATE PROGRESS =====
function updateProgress() {
  const completed = completedPhases.size;
  const percent = (completed / totalPhases) * 100;

  progressBar.style.width = percent + "%";
  progressText.innerText = `${completed} / ${totalPhases} completed`;
}

// ===== SAVE PHASE =====
function savePhase(phaseNumber) {
  let valid = false;

  switch (phaseNumber) {
    case 1:
      valid = document.getElementById("country").value !== "";
      break;
    case 2:
      valid = document.getElementById("age").value !== "";
      break;
    case 3:
      valid = document.getElementById("income").value !== "";
      break;
    case 4:
      valid = document.getElementById("healthcare").value !== "";
      break;
    case 5:
      valid = document.getElementById("housing").value !== "";
      break;
    case 6:
      valid = document.getElementById("banking").value !== "";
      break;
    case 7:
      valid = document.getElementById("transport").value !== "";
      break;
    case 8:
      valid = document.getElementById("visa").value !== "";
      break;
    case 9:
      valid = document.getElementById("lifestyle").value !== "";
      break;
    case 10:
      valid = document.getElementById("tax").value !== "";
      break;
  }

  if (!valid) {
    alert("Please complete this phase before saving.");
    return;
  }

  completedPhases.add(phaseNumber);
  updateProgress();
}

// ===== GENERATE SUMMARY =====
function generateSummary() {
  if (completedPhases.size < totalPhases - 1) {
    alert("Please complete all phases before generating your summary.");
    return;
  }

  const summary = `
    <h3>Your Relocation Summary</h3>
    <ul>
      <li><strong>Destination:</strong> ${document.getElementById("country").value}</li>
      <li><strong>Age:</strong> ${document.getElementById("age").value}</li>
      <li><strong>Monthly Income:</strong> €${document.getElementById("income").value}</li>
      <li><strong>Healthcare:</strong> ${document.getElementById("healthcare").value}</li>
      <li><strong>Housing:</strong> ${document.getElementById("housing").value}</li>
      <li><strong>Banking:</strong> ${document.getElementById("banking").value}</li>
      <li><strong>Transport:</strong> ${document.getElementById("transport").value}</li>
      <li><strong>Residency:</strong> ${document.getElementById("visa").value}</li>
      <li><strong>Lifestyle:</strong> ${document.getElementById("lifestyle").value}</li>
      <li><strong>Tax Awareness:</strong> ${document.getElementById("tax").value}</li>
    </ul>
    <p><em>This is a planning guide, not legal or tax advice.</em></p>
  `;

  output.innerHTML = summary;
  completedPhases.add(11);
  updateProgress();
}

// ===== INITIALISE =====
updateProgress();
