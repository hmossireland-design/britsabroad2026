const countries = {
  Portugal: {visa:"D7 Passive Income Visa (~€870/month)", tax:"10% pension tax (NHR legacy)", notes:"Large UK expat community, excellent healthcare, EU access", flag:"🇵🇹"},
  Spain: {visa:"Non-Lucrative Visa (~€2,400/month)", tax:"Worldwide income taxable once resident", notes:"Excellent healthcare, strong bureaucracy", flag:"🇪🇸"},
  Ireland: {visa:"No visa required", tax:"Worldwide income if resident", notes:"High cost of living, English-speaking", flag:"🇮🇪"},
  Australia: {visa:"Family / contributory parent routes", tax:"Worldwide income", notes:"Strict health checks, expensive visas", flag:"🇦🇺"},
  Cyprus: {visa:"Category F / Pink Slip", tax:"Non-dom regime available", notes:"Low tax, English widely spoken", flag:"🇨🇾"},
  Malta: {visa:"Retirement Programme", tax:"Foreign income remittance basis", notes:"English official language", flag:"🇲🇹"},
  France: {visa:"Long-Stay Visitor", tax:"Worldwide income", notes:"S1 healthcare for pensioners", flag:"🇫🇷"},
  UAE: {visa:"Retirement / Property Visa", tax:"0% income tax", notes:"No permanent residency path", flag:"🇦🇪"},
  Thailand: {visa:"Retirement Visa (50+)", tax:"Territorial taxation", notes:"Low cost, frequent renewals", flag:"🇹🇭"},
  Italy: {visa:"Elective Residence Visa", tax:"7% flat tax in south", notes:"Heavy bureaucracy", flag:"🇮🇹"},
  Greece: {visa:"Financially Independent Visa", tax:"7% flat pension tax option", notes:"Golden Visa alternative", flag:"🇬🇷"},
  Canada: {visa:"Family or points-based", tax:"Worldwide income", notes:"Cold climate", flag:"🇨🇦"},
  NewZealand: {visa:"Investment / Family", tax:"Worldwide income", notes:"Very strict entry", flag:"🇳🇿"},
  Malaysia: {visa:"MM2H", tax:"Territorial taxation", notes:"Low cost, English widely spoken", flag:"🇲🇾"},
  Panama: {visa:"Pensionado", tax:"No tax on foreign income", notes:"Senior discounts", flag:"🇵🇦"},
  Mexico: {visa:"Temporary Resident", tax:"Worldwide if resident", notes:"Regional safety differences", flag:"🇲🇽"},
  CostaRica: {visa:"Pensionado", tax:"Territorial", notes:"Nature-focused lifestyle", flag:"🇨🇷"},
  Hungary: {visa:"Residence Permit", tax:"15% flat tax", notes:"Low EU costs", flag:"🇭🇺"},
  Poland: {visa:"Temporary Residence", tax:"Progressive", notes:"Very affordable", flag:"🇵🇱"},
  Slovenia: {visa:"Long-term Residence", tax:"Worldwide", notes:"Safe and scenic", flag:"🇸🇮"},
  Slovakia: {visa:"Temporary Residence", tax:"Flat tax", notes:"Low cost EU", flag:"🇸🇰"},
  Bulgaria: {visa:"D Visa", tax:"10% flat tax", notes:"Cheapest EU option", flag:"🇧🇬"},
  Indonesia: {visa:"Retirement KITAS", tax:"Territorial", notes:"Earthquake risk", flag:"🇮🇩"},
  Colombia: {visa:"Pension Visa", tax:"Worldwide if resident", notes:"Improving safety", flag:"🇨🇴"},
  Mauritius: {visa:"Retired Non-Citizen", tax:"15% flat tax", notes:"Island lifestyle", flag:"🇲🇺"},
  Belize: {visa:"QRP", tax:"Tax-free pensions", notes:"English speaking", flag:"🇧🇿"},
  Ecuador: {visa:"Pensioner Visa", tax:"Territorial", notes:"Very low cost", flag:"🇪🇨"},
  Uruguay: {visa:"Residency", tax:"Territorial option", notes:"Stable democracy", flag:"🇺🇾"},
  Chile: {visa:"Retirement Visa", tax:"Worldwide", notes:"Strong healthcare", flag:"🇨🇱"},
  Latvia: {visa:"Temporary Residence", tax:"Progressive", notes:"Low EU costs", flag:"🇱🇻"}
};

// Populate dropdown
const select = document.getElementById("countrySelect");
select.innerHTML = `<option value="">Select country</option>`;
Object.keys(countries).forEach(c => {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = `${countries[c].flag} ${c}`;
  select.appendChild(opt);
});

const phases = document.querySelectorAll(".phase select, .phase input");

phases.forEach(el => {
  el.addEventListener("change", updateProgress);
});

function updateProgress() {
  let filled = 0;
  phases.forEach(el => {
    if (el.value) filled++;
  });
  const percent = Math.round((filled / phases.length) * 100);
  document.getElementById("progressBar").style.width = percent + "%";
}

function generateSummary() {
  const country = select.value.replace(/^.*\s/, ''); // remove flag
  if (!country) { alert("Select a country"); return; }

  const age = document.getElementById("age").value;
  const income = document.getElementById("income").value;
  const healthcare = document.getElementById("healthcare").value;
  const housing = document.getElementById("housing").value;
  const banking = document.getElementById("banking").value;
  const transport = document.getElementById("transport").value;
  const visaRoute = document.getElementById("visaRoute").value;
  const lifestyle = document.getElementById("lifestyle").value;
  const risk = document.getElementById("risk").value;

  const c = countries[country];

  document.getElementById("output").innerHTML = `
    <div class="country-card">
      <h3>${c.flag} ${country}</h3>
      <p><strong>Visa Route:</strong> ${c.visa}</p>
      <p><strong>Tax Position:</strong> ${c.tax}</p>
      <p><strong>Notes:</strong> ${c.notes}</p>
      <hr>
      <p><strong>Your Profile:</strong> Age ${age || '-'}, Income £${income || '-'} /month</p>
      <p><strong>Healthcare:</strong> ${healthcare || '-'}, Housing: ${housing || '-'}, Banking: ${banking || '-'} </p>
      <p><strong>Transport:</strong> ${transport || '-'}, Residency: ${visaRoute || '-'}, Lifestyle: ${lifestyle || '-'}, Risk: ${risk || '-'}</p>
      <p><strong>Status:</strong> Country locked as primary destination.</p>
    </div>
  `;
}
