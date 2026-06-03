
const inputNombre = document.getElementById("inputNombre");
const inputURL = document.getElementById("inputURL");
const btnCrearImagen = document.getElementById("CrearImagen");
const btnBorrarGaleria = document.getElementById("BorrarGaleria");
const btnMostrarTodas = document.getElementById("MostrarTodas");
const btnMostrarFavoritos = document.getElementById("MostrarFavoritos");
const btnMostrarNoFavoritos = document.getElementById("MostrarNoFavoritos");

const Total = document.getElementById("Total");
const Favoritos = document.getElementById("Favoritos");
const NoFavoritos = document.getElementById("NoFavoritos");
const Galeria = document.getElementById("Galeria");

function CrearNuevaImagen() {
    const contenedor = document.createElement("div");
    const img = document.createElement("img");
    const titulo = document.createElement("titulo");

    img.src = inputURL.value;
    img.alt = inputNombre.value;
    img.width = 200;

    document.getElementById("Galeria").appendChild(img);
}