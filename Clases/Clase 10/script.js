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

function AgregarElemento() {
    let li = document.createElement("li");
    let textohijillo = document.createTextNode("forlan");
    li.appendChild(textohijillo);

    document.getElementById("ListaEpica").appendChild(li);

}

function ForumularioEpico() {
    const NombreEpico = getElementById("NombreEpico").value;
    const ColorEpico = getElementById("ApellidoEpico").value;
    const MensajeEpico = getElementById("MensajeEpico").value;

    if (NombreEpico === "" || ColorEpico === "" || MensajeEpico === "") {
        //me rindo
    }
}

//no se la diferencia entre const y let...