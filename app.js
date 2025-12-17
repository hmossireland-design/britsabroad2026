// NUCLEAR TEST – confirms JS is loading from GitHub Pages

document.body.insertAdjacentHTML(
  "afterbegin",
  "<div style='padding:12px;background:#ffeb3b;color:#000;font-weight:bold;text-align:center'>JS LOADED FROM app.js</div>"
);

document.getElementById("app").innerHTML = `
  <h1 style="color:red;text-align:center;margin-top:40px;">
    JS IS WORKING ✅
  </h1>
`;
