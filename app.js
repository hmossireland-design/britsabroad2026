let selectedCountry = "";
let completed = 0;

const countries = [
  ["Portugal","pt"],["Spain","es"],["Ireland","ie"],["France","fr"],
  ["Italy","it"],["Greece","gr"],["Cyprus","cy"],["Malta","mt"],
  ["UAE","ae"],["Thailand","th"],["Malaysia","my"],["Panama","pa"],
  ["Mexico","mx"],["Costa Rica","cr"],["Ecuador","ec"],["Colombia","co"],
  ["Hungary","hu"],["Poland","pl"],["Slovakia","sk"],["Bulgaria","bg"],
  ["Indonesia","id"],["Vietnam","vn"],["Mauritius","mu"],["Canada","ca"],
  ["USA","us"],["Australia","au"],["New Zealand","nz"],["Argentina","ar"],
  ["Chile","cl"],["Latvia","lv"]
];

const countryContainer = document.getElementById("countryCards");

countries.forEach(c => {
  const div = document.createElement("div");
  div.className = "country-card";
  div.innerHTML = `
    <img src="https://flagcdn.com/w40/${c[1]}.png">
    <p>${c[0]}</p>
  `;
  div.onclick = () => selectCountry(c[0], div);
  countryContainer.appendChild(div);
});

function selectCountry(name, el) {
  selectedCountry = name;
  document.querySelectorAll(".country-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  updateProgress();
}

function updateProgress() {
  const inputs = document.querySelectorAll("input, select");
  completed = 0;
  inputs.forEach(i => {
    if (i.value) completed++;
  });
  if (selectedCountry) completed++;

  document.getElementById("progress-text").innerText = `${completed} / 11 completed`;
  document.getElementById("progress-fill").style.width = `${(completed/11)*100}%`;
}

document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("change", updateProgress);
});

function generateSummary() {
  if (!selectedCountry) {
    alert("Please select a destination country.");
    return;
  }

  document.getElementById("output").innerHTML = `
    <strong>Destination:</strong> ${selectedCountry}<br>
    <strong>Age:</strong> ${age.value}<br>
    <strong>Income:</strong> £${income.value}/month<br>
    <strong>Healthcare:</strong> ${healthcare.value}<br>
    <strong>Housing:</strong> ${housing.value}<br>
    <strong>Banking:</strong> ${banking.value}<br>
    <strong>Transport:</strong> ${transport.value}<br>
    <strong>Residency:</strong> ${visa.value}<br>
    <strong>Lifestyle:</strong> ${lifestyle.value}<br>
    <strong>Risk:</strong> ${risk.value}<br><br>
    <em>Your personalised relocation roadmap for ${selectedCountry} is now ready.</em>
  `;
}
