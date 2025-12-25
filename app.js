const countries = [
  "Portugal", "Spain", "France", "Ireland", "Italy", "Greece",
  "Cyprus", "Malta", "UAE", "Thailand", "Malaysia", "Panama",
  "Mexico", "Costa Rica", "Ecuador", "Poland", "Hungary",
  "Bulgaria", "Mauritius", "Colombia"
];

const totalPhases = 11;

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("countrySelect");
  select.innerHTML = `<option value="">Select a country</option>`;
  countries.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    select.appendChild(opt);
  });

  document.querySelectorAll("select, input").forEach(el => {
    el.addEventListener("change", updateProgress);
  });

  updateProgress();
});

function updateProgress() {
  let completed = 0;

  if (document.getElementById("countrySelect").value) completed++;
  if (document.getElementById("age").value) completed++;
  if (document.getElementById("income").value) completed++;
  if (document.getElementById("healthcare").value) completed++;
  if (document.getElementById("housing").value) completed++;
  if (document.getElementById("banking").value) completed++;
  if (document.getElementById("transport").value) completed++;
  if (document.getElementById("visa").value) completed++;
  if (document.getElementById("lifestyle").value) completed++;
  if (document.getElementById("risk").value) completed++;

  const percent = Math.round((completed / totalPhases) * 100);

  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").innerText =
    `${completed} of ${totalPhases} completed`;
}

function generateSummary() {
  const country = document.getElementById("countrySelect").value;

  if (!country) {
    alert("Please select a destination country.");
    return;
  }

  document.getElementById("output").innerHTML = `
    <strong>Destination:</strong> ${country}<br><br>
    Your relocation profile has been captured successfully.
    Next steps will include visa rules, tax exposure,
    healthcare setup, and banking considerations specific to ${country}.
  `;
}
