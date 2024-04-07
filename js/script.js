function menu() {
  const nav = document.getElementById("navBtn");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnMenu").addEventListener("click", () => {
    menu();
  });
});
