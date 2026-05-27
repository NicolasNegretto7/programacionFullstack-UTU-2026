function  BotonCambio() {
    document.getElementById("TituloEpico").textContent = "Hola soy Cristiano";
}

function BotonCambio2() {
    document.getElementById("ParrafoEpico").innerHTML = "<strong>messi<strong>";
}

function Felicidad() {
    document.getElementById("ImagenEpica").src = "cheerful-smiling-man-wearing-glasses-260nw-2718570205.webp"
}

function BotonEpico3() {
    let textoescrito = document.getElementById("InputEpico").value;
    alert(textoescrito);
}

function TransformarAzul() {
    document.getElementById("Bacano").classList.add("Azul");
}

function Destransformar() {
    document.getElementById("Bacano").classList.remove("Azul");
}

function ModoOscuro() {
    document.getElementById("to").classList.toggle("ModoOscuro");
}