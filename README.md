# 🧠 Pokédex Sprite Fetcher 🎮

Welcome to the **Pokédex Sprite Fetcher**! This is a fun little project that lets you enter the name of any Pokémon and fetch its front sprite from the official [PokéAPI](https://pokeapi.co). No magic — just JavaScript, HTML, and a whole lot of ✨ Pokémon love!

---

## 🚀 Features

- 🔍 Fetch any Pokémon by name
- 🖼️ Display the front sprite
- ❌ Error handling if the name is incorrect
- 🧠 Clean and easy-to-read code
- 💻 Pure HTML + CSS + JavaScript — no frameworks!

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- [PokéAPI](https://pokeapi.co/)

---

## 📦 How to Use

1. 📥 Clone or download this repository.
2. 🧑‍💻 Open the `index.html` file in your browser.
3. 🎯 Type a Pokémon's name in the input box (e.g., `pikachu`, `charmander`).
4. 🕹️ Click the **Fetch Pokémon** button.
5. 🎉 See the magic sprite appear!

---

## 🐛 Error Handling

If the name is not found or you type something wrong:
- ⚠️ A message will alert you:  
  `"Could not fetch Pokémon. Please check the name and try again."`
- 🕳️ The previous sprite (if any) will be hidden.

---

## 🧪 Sample Code Snippet

```javascript
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
  })
