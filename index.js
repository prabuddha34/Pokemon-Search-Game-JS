function fetchData() {
  const pokemonName = document.getElementById("name").value.toLowerCase();
  const imageElement = document.getElementById("pokemonsprite");

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      return response.json();
    })
    .then(data => {
      const sprite = data.sprites.front_default;
      imageElement.src = sprite;
      imageElement.alt = data.name;
      imageElement.style.display = "block";
    })
    .catch(error => {
      console.error("Error:", error);
      imageElement.style.display = "none";
      alert("Could not fetch Pokémon. Please check the name and try again.");
    });
}
