// Creating elements, appending, prepending and other properties of JS that affects the html code.
// appendChild() : Adds the elements as the last child in the body section.
// Create:

const img = document.createElement("img");

img.src =
	"https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

document.body.appendChild(img);

img.classList.add("square"); // adds the class square to the img element.

const p = document.querySelector("p");

p.append(
	"I'm using append to add this",
	"I don't care what others say, but i'm using p.append() to add at the end of the element where i've selected myself too"
);
// This will append on the first p tag at the end of it. The string, that is included above.

p.prepend(
	"I have prepended this, but, i did not prepend an object, let me do it in style"
);

const newEm = document.createElement("em");

newEm.append(
	"Emphasizing my style!!, I've being prepended later, so the later is earlier and earlier is later."
);

p.prepend(newEm);

// To create a new element and place it adjacently to another element not as a child, we use

// element.insertAdjacentElement(position,element to be inserted),

// Positions are predefined, afterend,beforeend,afterbegin,beforebegin.

// As we have h2 and h1 in Selecting.js, we're getting a reference error as both of the scripts are already added.
// We are going to use different naming :)

const hh2 = document.createElement("h2");

hh2.append("Used Adjacent insertion Of Element");

const hh1 = document.querySelector("h1");

hh1.insertAdjacentElement("afterend", hh2);

// To make it more simpler, we can use element_name.after()/before() to add after/before the element.

const h3 = document.createElement("h3");
h3.append(`I'm H3, what a surprise`);
hh1.after(h3);
