const inputNombre = document.getElementById("inputNombre");
const inputURL = document.getElementById("inputURL");
const Galeria = document.getElementById("Galeria");

const TotalInZero = document.getElementById("Total");
const Favoritos = document.getElementById("Favoritos");
const NoFavoritos = document.getElementById("NoFavoritos");

function CrearNuevaImagen() {

    if (inputNombre.value === "" || inputURL.value === "") {
    alert("Error,porfavor rellene los formularios con nombre y URL de la imagen");

    return;

        }

    const contenedor = document.createElement("div");
    contenedor.style.border = "1px solid black"
    contenedor.style.margin = "10px";
    contenedor.style.padding = "10px";
    contenedor.style.display = "inline-block";
    
    const img = document.createElement("img");
    const titulo = document.createElement("p");
    const Eliminar = document.createElement("button");
    const Favoritos = document.createElement("button");

    img.src = inputURL.value;
    img.alt = inputNombre.value;
    img.width = 200;
    titulo.textContent = inputNombre.value;
    Eliminar.textContent = "Borrar";
    Eliminar.type = "button";
    Favoritos.textContent = "Favorito";
    Favoritos.type = "button";

    Eliminar.onclick = function() {
    contenedor.remove(); 

    };

    Favoritos.onclick = function() {
        contenedor.classList.toggle("favorito");
    }

    contenedor.appendChild(img);
    contenedor.appendChild(titulo);
    contenedor.appendChild(Eliminar);
    contenedor.appendChild(Favoritos);
    document.getElementById("Galeria").appendChild(contenedor);

}


function BorrarGaleria() {
        if (confirm("¿Seguro que querés borrar toda la galería?")) {
        Galeria.innerHTML = "";
}
}