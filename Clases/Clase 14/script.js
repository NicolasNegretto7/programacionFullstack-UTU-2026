const btnCrearGato = document.getElementById("CrearGato");
const divGato = document.getElementById("Gato");

btnCrearGato.addEventListener("click", async () => {
    const url = await fetch("live_jGIuISXzM7AEZOqdNVz0inzrZbKvDzzO87LiLRBcS1XWgrTt8tXOdjFL6ficAz3X", {

    method: "GET",
    headers: {
    "Content-Type": "application/json"
    }

    