const btnChiste = document.getElementById("BotonChiste");
const divChiste = document.getElementById("Chiste");

btnChiste.addEventListener("click", async () => {

    try {
        const url = await fetch("https://v2.jokeapi.dev/joke/Any?type=single", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await url.json();

    if (data.type === "single") {
      divChiste.textContent = data.joke;
    } else {
      divChiste.textContent = data.setup + " ... " + data.delivery;
    }
  } catch (error) {                                            
    console.error("Error:", error);
  }
});