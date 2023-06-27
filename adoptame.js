document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const place = document.getElementById("placeInput").value;
    const size = document.getElementById("sizeInput").value;
    const desc = document.getElementById("descInput").value;

    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Lugar:", place);
    console.log("Tamaño:", size);
    console.log("Descripción:", desc);
    alert("Gracias por ponerte en contacto!");
  });
});
