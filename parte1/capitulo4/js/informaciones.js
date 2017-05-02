// Ejercicio 2. Muestra la información del elemento con id "contenido"

var contenidoElt = document.getElementById("contenido");
var contenidoStyle = getComputedStyle(contenidoElt);

var ulElt = document.createElement("ul");

var liHightElt = document.createElement("li");
liHightElt.textContent = "Altura: " +contenidoStyle.height;
var liWidthElt = document.createElement("li");
liWidthElt.textContent = "Longitud: " + contenidoStyle.width;

ulElt.appendChild(liHightElt);
ulElt.appendChild(liWidthElt);

var infoElt = document.getElementById("informaciones");
infoElt.appendChild(document.createTextNode("Informaciones del contenido"));
infoElt.appendChild(ulElt);
