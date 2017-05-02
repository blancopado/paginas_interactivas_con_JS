// Ejercicio 1. Modificar los colores de los párrafos

var textColor = prompt("Introduce el color del texto");
var backgroundColor = prompt("Introduce el color de fondo del texto");

var elts = document.getElementsByTagName("p");

for (var i = 0; i < elts.length; i++) {
  elts[i].style.color = textColor;
  elts[i].style.backgroundColor = backgroundColor;
}
