function colorRed() {
  document.body.style.backgroundColor = "#ba5b4e";
  document.getElementById("Logo").src = "img/logo1.png";
  guardarColorEnLocalStorage();
}

function colorBlue() {
  document.body.style.backgroundColor = "#393d8d";
  document.getElementById("Logo").src = "img/logo2.png";
  guardarColorEnLocalStorage();
}

function colorGreen() {
  document.body.style.backgroundColor = "#58a287";
  document.getElementById("Logo").src = "img/logo3.png";
  guardarColorEnLocalStorage();
}

function guardarColorEnLocalStorage() {
  const colorDeFondo = document.body.style.backgroundColor;
  const logoSrc = document.getElementById("Logo").src;
  localStorage.setItem("colorDeFondo", colorDeFondo);
  localStorage.setItem("logoSrc", logoSrc);
}

document.addEventListener("DOMContentLoaded", () => {
  const circle1 = document.querySelector(".circle1");
  const circle2 = document.querySelector(".circle2");
  const circle3 = document.querySelector(".circle3");

  circle1.addEventListener("click", () => {
    colorRed();
  });

  circle2.addEventListener("click", () => {
    colorBlue();
  });

  circle3.addEventListener("click", () => {
    colorGreen();
  });

  const colorGuardado = localStorage.getItem("colorDeFondo");
  const logoGuardado = localStorage.getItem("logoSrc");

  if (colorGuardado) {
    document.body.style.backgroundColor = colorGuardado;
    document.getElementById("Logo").src = logoGuardado;
  } else {
    document.body.style.backgroundColor = "#ba5b4e";
    document.getElementById("Logo").src = "img/logo1.png";
    guardarColorEnLocalStorage();
  }
});
