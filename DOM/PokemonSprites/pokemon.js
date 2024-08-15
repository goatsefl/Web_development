// Pokemon Sprites, there are exactly 151 sprites, so, we just add them by using basic javascript function.

// The image source, has a number attached to the url, so as the number changes the pokemon's do change as well.

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png img source
const link =
	"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const container = document.querySelector("#container");
for (let i = 1; i <= 151; i++) {
	const img = document.createElement("img");
	const pokemon = document.createElement("div");
	const span = document.createElement("span");
	span.innerText = `#${i}`;
	img.src = `${link}${i}.png`;
	pokemon.appendChild(img);
	pokemon.appendChild(span);
	container.appendChild(pokemon);
}
