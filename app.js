const countries = [
  { name:"Portugal", flag:"🇵🇹", visa:"D7", tax:10 },
  { name:"Spain", flag:"🇪🇸", visa:"Non-Lucrative", tax:10 },
  { name:"France", flag:"🇫🇷", visa:"Visitor", tax:20 },
  { name:"Italy", flag:"🇮🇹", visa:"Elective Residence", tax:7 },
  { name:"Greece", flag:"🇬🇷", visa:"FIP", tax:10 },
  { name:"Cyprus", flag:"🇨🇾", visa:"Category F", tax:10 },
  { name:"Malta", flag:"🇲🇹", visa:"Retirement", tax:15 },
  { name:"Ireland", flag:"🇮🇪", visa:"CTA", tax:20 },
  { name:"UAE", flag:"🇦🇪", visa:"Retirement", tax:0 },
  { name:"Thailand", flag:"🇹🇭", visa:"Retirement", tax:0 },
  { name:"Malaysia", flag:"🇲🇾", visa:"MM2H", tax:5 },
  { name:"Panama", flag:"🇵🇦", visa:"Pensionado", tax:0 },
  { name:"Mexico", flag:"🇲🇽", visa:"Temporary", tax:10 },
  { name:"Costa Rica", flag:"🇨🇷", visa:"Pensionado", tax:0 },
  { name:"Bulgaria", flag:"🇧🇬", visa:"D Visa", tax:10 },
  { name:"Poland", flag:"🇵🇱", visa:"Temporary", tax:10 },
  { name:"Hungary", flag:"🇭🇺", visa:"Residence", tax:9 },
  { name:"Slovakia", flag:"🇸🇰", visa:"Temporary", tax:10 },
  { name:"Slovenia", flag:"🇸🇮", visa:"Residence", tax:10 },
  { name:"Indonesia", flag:"🇮🇩", visa:"KITAS", tax:5 },
  { name:"Colombia", flag:"🇨🇴", visa:"Pension", tax:5 },
  { name:"Mauritius", flag:"🇲🇺", visa:"Retired", tax:0 },
  { name:"Ecuador", flag:"🇪🇨", visa:"Pensioner", tax:0 },
  { name:"Uruguay", flag:"🇺🇾", visa:"Residency", tax:10 },
  { name:"Chile", flag:"🇨🇱", visa:"Retirement", tax:10 },
  { name:"Latvia", flag:"🇱🇻", visa:"Temporary", tax:10 },
  { name:"Canada", flag:"🇨🇦", visa:"Family", tax:25 },
  { name:"Australia", flag:"🇦🇺", visa:"Parent", tax:25 },
  { name:"New Zealand", flag:"🇳🇿", visa:"Investment", tax:25 },
  { name:"Belize", flag:"🇧🇿", visa:"QRP", tax:0 }
];

let selectedCountry = null;
const container = document.getElementById("countryCards");

countries.forEach(c => {
  const div = document.createElement("div");
  div.className = "countryCard";
  div.innerHTML = `<div style="font-size:2rem">${c.flag}</div><strong>${c.name}</strong>`;
  div.onclick = () => {
    document.querySelectorAll(".countryCard").forEach(d => d.classList.remove("selected"));
    div.classList.add("selected");
    selectedCountry = c;
    updateProgress();
  };
  container.appendChild(div);
});

function updateProgress() {
  const fields = ["age","income","healthcare","housing","banking","transport","visa","lifestyle","risk"];
  let filled = fields.filter(id => document.getElementById(id).value).length;
  if(selectedCountry) filled++;
  document.getElementById("progressBar").style.width = ((filled/10)*100)+"%";
}

function generateSummary() {
  if(!selectedCountry){
    alert("Please select a destination country.");
    return;
  }

  document.getElementById("output").innerHTML = `
    <h3>${selectedCountry.flag} ${selectedCountry.name}</h3>
    <p><strong>Visa Route:</strong> ${selectedCountry.visa}</p>
    <p><strong>Tax Exposure:</strong> ${selectedCountry.tax}%</p>
    <p>This destination fits your inputs and lifestyle preferences.</p>
  `;
}
