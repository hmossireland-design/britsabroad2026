const phases = [
  "countrySelect","age","income","healthcare","housing",
  "banking","transport","visa","lifestyle","risk"
];

function updateProgressBar() {
  let completed = 0;
  phases.forEach(id => {
    const el = document.getElementById(id);
    const section = el.closest(".phase");
    if (!el) return;
    if ((el.tagName==="SELECT" || el.tagName==="INPUT") && el.value) {
      completed++;
      section.classList.add("completed");
    } else {
      section.classList.remove("completed");
    }
  });
  const percent = (completed / phases.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").textContent = `${completed} / ${phases.length} phases completed`;
}

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

  const summary = `
    <h3>Relocation Summary</h3>
    <p><strong>Destination:</strong> ${country}</p>
    <p><strong>Age:</strong> ${age}</p>
    <p><strong>Income:</strong> £${income}</p>
    <p><strong>Healthcare:</strong> ${healthcare}</p>
    <p><strong>Housing:</strong> ${housing}</p>
    <p><strong>Banking:</strong> ${banking}</p>
    <p><strong>Transport:</strong> ${transport}</p>
    <p><strong>Residency Route:</strong> ${visa}</p>
    <p><strong>Lifestyle Preference:</strong> ${lifestyle}</p>
    <p><strong>Risk Tolerance:</strong> ${risk}</p>
    <p>Next steps will include visa rules, tax exposure, and healthcare setup specific to ${country}.</p>
  `;
  document.getElementById("output").innerHTML = summary;
}

// Initialize progress bar on page load
updateProgressBar();
