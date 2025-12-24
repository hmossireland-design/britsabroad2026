document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("countrySelect");

  if (!countrySelect) {
    alert("Country select not found");
    return;
  }

  const countries = [
    { code: "PT", name: "Portugal", flag: "🇵🇹" },
    { code: "ES", name: "Spain", flag: "🇪🇸" },
    { code: "FR", name: "France", flag: "🇫🇷" },
    { code: "IT", name: "Italy", flag: "🇮🇹" },
    { code: "CY", name: "Cyprus", flag: "🇨🇾" },
    { code: "AE", name: "UAE", flag: "🇦🇪" },
    { code: "TH", name: "Thailand", flag: "🇹🇭" },
    { code: "MX", name: "Mexico", flag: "🇲🇽" },
    { code: "MY", name: "Malaysia", flag: "🇲🇾" },
    { code: "ID", name: "Indonesia", flag: "🇮🇩" }
  ];

  countries.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.code;
    opt.textContent = `${c.flag} ${c.name}`;
    countrySelect.appendChild(opt);
  });

  countrySelect.addEventListener("change", () => {
    console.log("Selected country:", countrySelect.value);
  });
});
