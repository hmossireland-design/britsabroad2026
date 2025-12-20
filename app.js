const countries = [
  { name: "Portugal", flag: "🇵🇹", visa: "D7: €870/mo passive income", tax: "10% pension tax" },
  { name: "Spain", flag: "🇪🇸", visa: "Non-Lucrative: €2,400/mo", tax: "Variable by region" },
  { name: "Ireland", flag: "🇮🇪", visa: "No visa required", tax: "Standard Irish rates" },
  { name: "Australia", flag: "🇦🇺", visa: "Family/Skilled Visa", tax: "Standard Australian rates" },
  { name: "Cyprus", flag: "🇨🇾", visa: "Category F / €300k property", tax: "Low tax on foreign income" },
  { name: "Malta", flag: "🇲🇹", visa: "Retirement Programme: €10k/yr", tax: "Low foreign income tax" },
  { name: "France", flag: "🇫🇷", visa: "Long-Stay Visitor: €1,800/mo", tax: "S1 healthcare available" },
  { name: "UAE", flag: "🇦🇪", visa: "Retirement Visa: £4,200/mo or property", tax: "0% income tax" },
  { name: "Thailand", flag: "🇹🇭", visa: "Retirement/Elite Visa", tax: "Variable" },
  { name: "Italy", flag: "🇮🇹", visa: "Elective Residence: €31k/yr", tax: "7% south Italy flat tax option" },
  { name: "Greece", flag: "🇬🇷", visa: "Financially Independent: €3,500/mo", tax: "Golden Visa possible" },
  { name: "Canada", flag: "🇨🇦", visa: "Points/Family Sponsorship", tax: "Canadian rates" },
  { name: "New Zealand", flag: "🇳🇿", visa: "Investment or Family", tax: "Standard NZ tax" },
  { name: "Malaysia", flag: "🇲🇾", visa: "MM2H: $1,500/mo", tax: "Low foreign income tax" },
  { name: "Panama", flag: "🇵🇦", visa: "Pensionado: $1,000/mo", tax: "No foreign income tax" },
  { name: "Mexico", flag: "🇲🇽", visa: "Temporary Resident: $2,500/mo", tax: "Variable" },
  { name: "Costa Rica", flag: "🇨🇷", visa: "Pensionado: $1,000/mo", tax: "Senior discounts apply" },
  { name: "Hungary", flag: "🇭🇺", visa: "Residence Permit: €1,700/yr proof", tax: "Low-cost EU taxes" },
  { name: "Poland", flag: "🇵🇱", visa: "Temporary Residence: £160/mo", tax: "Low EU taxes" },
  { name: "Slovenia", flag: "🇸🇮", visa: "Long-term Residence: €1,000/mo proof", tax: "Standard EU taxes" },
  { name: "Slovakia", flag: "🇸🇰", visa: "Temporary Residence: €800/mo", tax: "Low EU taxes" },
  { name: "Bulgaria", flag: "🇧🇬", visa: "D Visa: €1,000/mo", tax: "Low EU taxes" },
  { name: "Indonesia", flag: "🇮🇩", visa: "Retirement KITAS: $1,500/mo, 55+", tax: "Low cost living" },
  { name: "Colombia", flag: "🇨🇴", visa: "Pension Visa: $900/mo", tax: "Affordable" },
  { name: "Mauritius", flag: "🇲🇺", visa: "Retired Non-Citizen: $1,500/mo", tax: "Low tax island" },
  { name: "Belize", flag: "🇧🇿", visa: "QRP: $2,000/mo, 45+", tax: "Tax-free pension" },
  { name: "Ecuador", flag: "🇪🇨", visa: "Pensioner Visa: $800/mo", tax: "Very low cost" },
  { name: "Uruguay", flag: "🇺🇾", visa: "Residency: income proof", tax: "Stable Latin America" },
  { name: "Chile", flag: "🇨🇱", visa: "Retirement Visa: pension proof", tax: "South America safe" },
  { name: "Latvia", flag: "🇱🇻", visa: "Temporary Residence: €1,101/mo", tax: "Low Baltic EU rates" }
];

// Populate dropdown
const countrySelect = document.getElementById("countrySelect");
countries.forEach(c => {
  const option = document.createElement("option");
  option.value = c.name;
  option.text = `${c.flag} ${c.name}`;
  countrySelect.add(option);
});

// Track user input
const userData = {};
["country","age","income","healthcare","housing","banking","transport","visa","lifestyle","risk"].forEach(id=>{
  userData[id]="";
  const el=document.getElementById(id);
  el.addEventListener(el.tagName==="INPUT"?"input":"change",e=>{userData[id]=e.target.value; updateProgress();});
});

// Progress bar
function updateProgress(){
  const total=11;
  let completed=0;
  for(let key in userData) if(userData[key]) completed++;
  document.getElementById("progressBar").style.width=`${Math.floor((completed/total)*100)}%`;
}

// Generate Summary
function generateSummary(){
  const output=document.getElementById("output");
  const recommended=document.getElementById("recommended");
  output.innerHTML=""; recommended.innerHTML="";

  if(!userData.country){ output.innerHTML="<p>Please select your destination country.</p>"; return; }

  const c=countries.find(c=>c.name===userData.country);
  const card=document.createElement("div");
  card.className="country-card";
  card.innerHTML=`
    <h3>${c.flag} ${c.name}</h3>
    <p><strong>Visa/Residency:</strong> ${c.visa}</p>
    <p><strong>Tax:</strong> ${c.tax}</p>
    <p><strong>Age:</strong> ${userData.age||"N/A"}</p>
    <p><strong>Income:</strong> £${userData.income||"N/A"}</p>
    <p><strong>Healthcare:</strong> ${userData.healthcare||"N/A"}</p>
    <p><strong>Housing:</strong> ${userData.housing||"N/A"}</p>
    <p><strong>Banking:</strong> ${userData.banking||"N/A"}</p>
    <p><strong>Transport:</strong> ${userData.transport||"N/A"}</p>
    <p><strong>Residency Route:</strong> ${userData.visa||"N/A"}</p>
    <p><strong>Lifestyle:</strong> ${userData.lifestyle||"N/A"}</p>
    <p><strong>Risk Tolerance:</strong> ${userData.risk||"N/A"}</p>
  `;
  output.appendChild(card);

  // Recommended countries
  const recs=countries.filter(x=>{
    return (userData.income?parseInt(userData.income)>=1000:true) &&
           (userData.age?parseInt(userData.age)>=50:true) &&
           x.name!==userData.country;
  }).slice(0,3);

  if(recs.length){
    const recDiv=document.createElement("div");
    recDiv.innerHTML="<h3>Recommended Alternatives:</h3>";
    recs.forEach(r=>{
      const div=document.createElement("div");
      div.className="country-card";
      div.innerHTML=`${r.flag} ${r.name} | Visa: ${r.visa} | Tax: ${r.tax}`;
      recDiv.appendChild(div);
    });
    recommended.appendChild(recDiv);
  }
}
