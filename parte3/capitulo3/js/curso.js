// Peticiones Ajax
function ajaxGet(url, callback) {
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.addEventListener("load", function() {
    if (req.status >= 200 && req.status < 400) {
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText);
    }
  });
  req.addEventListener("error", function() {
    console.error("No es posible conectarse con el servidor");
  });
  req.send(null);
}

ajaxGet("http://localhost:3000/imagenes", function(respuesta){
  var imagenes = JSON.parse(respuesta);

  imagenes.forEach(function(elemento) {
    var imgElt = document.createElement("img");
    imgElt.src = elemento.thumbnailUrl;
    document.getElementById("imagenes").appendChild(imgElt);
  });
});
