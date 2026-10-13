// Qorong'i / yorug' rejimni almashtirish
const root = document.documentElement;
const button = document.getElementById("themeToggle");

function updateLabel() {
  const dark = root.getAttribute("data-theme") === "dark";
  button.textContent = dark ? "Yorug' rejim" : "Qorong'i rejim";
}

button.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateLabel();
});

updateLabel();