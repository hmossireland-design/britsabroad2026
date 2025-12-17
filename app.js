const app = document.getElementById("app");

if (!app) {
  alert("ERROR: #app container not found");
} else {
  app.innerHTML = `
    <div style="background:#fff;padding:20px;border-radius:6px">
      <h2>✅ App Loaded Correctly</h2>
      <p>If you see this, JS + HTML are connected.</p>
    </div>
  `;
}
