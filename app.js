// --- COUNTRY DATA ---
const countries = {
  "Portugal": {
    flag: "🇵🇹",
    visa: "D7 (Passive Income)",
    tax: "10% on pensions",
    notes: "Warm climate, large British community, EU access."
  },
  "Spain": {
    flag: "🇪🇸",
    visa: "Non-Lucrative Visa",
    tax: "Varies by region, private health insurance required",
    notes: "Sunny Mediterranean lifestyle, excellent healthcare."
  },
  "Ireland": {
    flag: "🇮🇪",
    visa: "No visa needed",
    tax: "Standard Irish rates",
    notes: "English-speaking, close to UK."
  },
  "Australia": {
    flag: "🇦🇺",
    visa: "Parent/Contributory Parent or Skilled/Family",
    tax: "Standard Australian rates",
    notes: "High quality of life, outdoors lifestyle."
  },
  "Cyprus": {
    flag: "🇨🇾",
    visa: "Category F / Property proof €300k",
    tax: "Low tax on foreign income",
    notes: "Sunny, English widely spoken."
  },
  "Malta": {
    flag: "🇲🇹",
    visa: "Retirement Programme",
    tax: "Low tax on foreign income",
    notes: "Warm, English official language."
  },
  "France": {
    flag: "🇫🇷",
    visa: "Long-Stay Visitor",
    tax: "Income dependent, S1 for pensioners",
    notes: "Culture, food, S1 healthcare access."
  },
  "UAE": {
    flag: "🇦🇪",
    visa: "Retirement Visa",
    tax: "0%",
    notes: "Luxury lifestyle, modern infrastructure."
  },
  "Thailand": {
    flag: "🇹🇭",
    visa: "Retirement/Elite",
    tax: "Variable, mostly low",
    notes: "Affordable tropical living, friendly locals."
  },
  "Italy": {
    flag: "🇮🇹",
    visa: "Elective Residence",
    tax: "7% flat in south",
    notes: "Food, history, beautiful regions."
  },
  "Greece": {
    flag: "🇬🇷",
    visa: "Financially Independent / Golden Visa",
    tax: "Varies by region, property based",
    notes: "Islands, low cost, warm climate."
  },
  "Canada": {
    flag: "🇨🇦",
    visa: "Points-based or family sponsorship",
    tax: "Standard Canadian rates",
    notes: "Safety, nature, English-speaking."
  },
  "New Zealand": {
    flag: "🇳🇿",
    visa: "Investment / Family",
    tax: "Standard NZ rates",
    notes: "Stunning scenery, safe, English-speaking."
  },
  "Malaysia": {
    flag: "🇲🇾",
    visa: "MM2H Visa",
    tax: "Mostly zero for foreigners",
    notes: "Low cost, tropical, English widely spoken."
  },
  "Panama": {
    flag: "🇵🇦",
    visa: "Pensionado",
    tax: "No tax on foreign income",
    notes: "Dollar economy, senior benefits."
  },
  "Mexico": {
    flag: "🇲🇽",
    visa: "Temporary Resident",
    tax: "Varies by region",
    notes: "Affordable, vibrant culture."
  },
  "Costa Rica": {
    flag: "🇨🇷",
    visa: "Pensionado",
    tax: "Low for retirees",
    notes: "Nature, Pura Vida lifestyle."
  },
  "Hungary": {
    flag: "🇭🇺",
    visa: "Residence Permit",
    tax: "Low EU rates",
    notes: "Low cost, thermal spas."
  },
  "Poland": {
    flag: "🇵🇱",
    visa: "Temporary Residence",
    tax: "Low EU rates",
    notes: "History, cheap EU living."
  },
  "Slovenia": {
    flag: "🇸🇮",
    visa: "Long-term Residence",
    tax: "Moderate",
    notes: "Lakes, mountains, safe."
  },
  "Slovakia": {
    flag: "🇸🇰",
    visa: "Temporary Residence",
    tax: "Low",
    notes: "Bratislava charm, nature."
  },
  "Bulgaria": {
    flag: "🇧🇬",
    visa: "D Visa",
    tax: "Low EU rates",
    notes: "Black Sea coast, cheapest EU."
  },
  "Indonesia": {
    flag: "🇮🇩",
    visa: "Retirement KITAS",
    tax: "Low cost",
    notes: "Bali paradise, retirement visa 55+."
  },
  "Colombia": {
    flag: "🇨🇴",
    visa: "Pension Visa",
    tax: "Low",
    notes: "Affordable, vibrant culture."
  },
  "Mauritius": {
    flag: "🇲🇺",
    visa: "Retired Non-Citizen",
    tax: "Low / none",
    notes: "Island paradise, English/French spoken."
  },
  "Belize": {
    flag: "🇧🇿",
    visa: "QRP",
    tax: "0% for retirees",
    notes: "English speaking, Caribbean."
  },
  "Ecuador": {
    flag: "🇪🇨",
    visa: "Pensioner Visa",
    tax: "Low",
    notes: "Diverse landscapes, cheap cost."
  },
  "Uruguay": {
    flag: "🇺🇾",
    visa: "Residency",
    tax: "Low",
    notes: "Stable, beaches, subtropical."
  },
  "Chile": {
    flag: "🇨🇱",
    visa: "Retirement Visa",
    tax: "Varies",
    notes: "Safe, natural beauty."
  },
  "Latvia": {
    flag: "🇱🇻",
    visa: "Temporary Residence (Financial)",
    tax: "Low",
    notes: "Affordable Riga, Baltic EU."
  }
};

// --- POPULATE COUNTRY DROPDOWN ---
const select = document.getElementById("countrySelect");
select.innerHTML = `<option value="">Select country</option>`;
Object.keys(countries).forEach(c => {
  const opt = document.createElement("option");
  opt.value = c;
  opt.textContent = `${countries[c].flag} ${c}`;
  select.appendChild(opt);
});

// --- GENERATE SUMMARY ---
function generateSummary() {
  const country = select.value;
  if (!country) {
    alert("Please select a country");
    return;
  }

  const age = document.getElementById("age")?.value || "-";
  const income = document.getElementById("income")?.value || "-";
  const healthcare = document.getElementById("healthcare")?.value || "-";
  const housing = document.getElementById("housing")?.value || "-";
  const banking = document.getElementById("banking")?.value || "-";
  const transport = document.getElementById("transport")?.value || "-";
  const visaRoute = document.getElementById("visa")?.value || "-";
  const lifestyle = document.getElementById("lifestyle")?.value || "-";
  const risk = document.getElementById("risk")?.value || "-";

  const c = countries[country];

  document.getElementById("output").innerHTML = `
    <div class="country-card">
      <h3>${c.flag} ${country}</h3>
      <p><strong>Visa Route:</strong> ${c.visa}</p>
      <p><strong>Tax Position:</strong> ${c.tax}</p>
      <p><strong>Notes:</strong> ${c.notes}</p>
      <hr>
      <p><strong>Your Profile:</strong> Age ${age}, Income £${income}/month</p>
      <p><strong>Healthcare:</strong> ${healthcare}, Housing: ${housing}, Banking: ${banking}</p>
      <p><strong>Transport:</strong> ${transport}, Residency: ${visaRoute}, Lifestyle: ${lifestyle}, Risk: ${risk}</p>
      <p><strong>Status:</strong> Country locked as primary destination.</p>
    </div>
  `;
}
