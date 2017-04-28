// Ejercicio 2. Añade lista de diarios

// Lista de diarios
var diarios = ["http://elpais.com/", "http://www.elmundo.es/", "http://elespanol.com/"];

// Añade en el div con id "contenido" la lista de diarios guardada en el array

var ulElt = document.createElement("ul");
for (var i = 0; i < diarios.length; i++) {
  var aElt = document.createElement("a");
  aElt.href = diarios[i];
  aElt.textContent = diarios[i];
  var liElt = document.createElement("li");
  liElt.appendChild(aElt);
  ulElt.appendChild(liElt);
}

document.getElementById("contenido").appendChild(ulElt);
