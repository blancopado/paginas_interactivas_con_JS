var clave = document.getElementById("clave");

clave.addEventListener("input", function(e) {

  var palabraClave = e.target.value;
  var ayudaClave = document.getElementById("ayudaClave");
  ayudaClave.textContent = "Débil";
  ayudaClave.style.color = "red";

  if (palabraClave.length >= 8) {
    ayudaClave.textContent = "Fuerte";
    ayudaClave.style.color = "green";
  } else if (palabraClave.length >= 4) {
    ayudaClave.textContent = "Normal";
    ayudaClave.style.color = "orange";
  }

});

// // Control del correo al final de la entrada de datos (blur -> pérdida de focus)
// document.getElementById("email").addEventListener("blur", function(e) {
//   var mensajeEmail = "";
//   if (e.target.value.indexOf("@") < 0) {
//     mensajeEmail = "Debes añadir un símbolo @";
//   }
//   document.getElementById("ayudaEmail").textContent = mensajeEmail;
// });

var regex = /@/; // La cadena debe contener el caracter @
console.log(regex.test("nombre&email.com")); // Muestra false
console.log(regex.test("nombre@email.com")); // Muestra true

// Control del correo al final de la entrada de datos (blur -> pérdida de focus)
document.getElementById("email").addEventListener("blur", function(e) {
  // Corresponde a una cadena con la forma xxx@yyy.zzz
  var regexEmail = /.+@.+\..+/;
  var mensajeEmail = "";
  if (!regexEmail.test(e.target.value)) {
    mensajeEmail = "Correo no válido";
  }
  document.getElementById("ayudaEmail").textContent = mensajeEmail;
});
