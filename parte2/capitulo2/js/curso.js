var nombreElt = document.getElementById("nombre");
// nombreElt.value = "MiNombredeDeUsuario";

// Muestra un mensaje de texto para ayuda al usuario a introducir un nombre
nombreElt.addEventListener("focus", function () {
    document.getElementById("ayudaNombre").textContent = "Introduce un nombre de usuario";
});
// Borra el mensaje de texto de ayuda para el campo nombre-usuario
nombreElt.addEventListener("blur", function (e) {
    document.getElementById("ayudaNombre").textContent = "";
});

// // Muestra si el usuario hace clic en la casilla confirmacion
// document.getElementById("confirmacion").addEventListener("change", function(e){
//   console.log("Enviar email de confirmación: " + e.target.checked);
// });

// // Muestra el tipo de suscripción elegida
// document.getElementsByName("suscripcion").forEach(function(element) {
//   element.addEventListener("change", function(event) {
//     console.log("Suscripción elegida: " + event.target.value);
//   });
// });

// Muestra la selección de la lista desplegable
document.getElementById("nacionalidad").addEventListener("change", function(e) {
  console.log("Nacionalidad: " + e.target.value);
});


var form = document.querySelector("form");

// console.log("Número de campos: " + form.elements.length); // Muestra 10
// console.log(form.elements[0].name); // Muestra "nombre"
// console.log(form.elements.clave.type); // Muestra "password"

form.addEventListener("submit", function(event) {
  event.preventDefault();
  // También se puede acceder a los elementos a través de form.elements. Ejemplo -> form.elements.nombre.value
  console.log("Nombre de usuario: " + event.target.elements.nombre.value);
  console.log("Contraseña: " + event.target.clave.value);
  console.log("Email: " + event.target.email.value);
  console.log("Confirmación: " + event.target.confirmacion.checked);
  console.log("Suscripción: " + event.target.suscripcion.value);
  console.log("Nacionalidad: " + event.target.nacionalidad.value);
});
