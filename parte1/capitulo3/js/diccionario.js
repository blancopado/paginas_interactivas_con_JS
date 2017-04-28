// Lista de palabras del diccionario
var palabras = [
  {
    termino: "Efímero",
    definicion: "Aquello que dura por un periodo muy corto de tiempo"
  },
  {
    termino: "Superfluo",
    definicion: "No necesario, que está de más"
  },
  {
    termino: "Inconmensurable",
    definicion: "Enorme, que no puede medirse."
  }
];

// Añade el diccionario a la página, dentro del div "contenido"

var dlElt = document.createElement("dl");

for (var i = 0; i < palabras.length; i++) {
  dtElt = document.createElement("dt"); // Creación de dt, etiqueta para el termino
  strongElt = document.createElement("strong"); // Creación de strong, etiqueta que resalte el termino
  strongElt.textContent = palabras[i].termino; // Adición del término al elemento strong
  dtElt.appendChild(strongElt); // Adición de strong al elemento dt

  ddElt = document.createElement("dd"); // Creación de dd, etiqueta para la definición
  ddElt.textContent = palabras[i].definicion; // Adición de la definición al elemento dd

  dlElt.appendChild(dtElt); // Adición del término al elemento dl
  dlElt.appendChild(ddElt); // Adición de la definición al elemento dl
}

document.getElementById("contenido").appendChild(dlElt); // Adición de dl al elemento contenido
