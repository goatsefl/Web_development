// In this we select various objects in DOM.

// getElementById , getElementsByTagName, getElementsByClassName

// When you type console.dir(document), you will be able to see the object document containing all the properties and the attributes.

// We can select the id in html by using this syntax, as we have linked the current file to index.html.

// Syntax : document.getElementById, document is the main object which has all the properties to use it for.

const banner = document.getElementById("banner");

// There's an id which is present in index.html named as banner.

// We can use document.getElementsByTagName(string literal) including the tag as a string literal, it will show all the tags matching the string literal provided in the argument.

const anchor = document.getElementsByTagName("a");

console.log(anchor);
//Output : HTMLCollection(24) [a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a.mw-redirect, a, a, a, a]
// HTML context isn't array, but, they're iterable collection.
const heading = document.getElementsByClassName("square");

console.dir(heading); // Output : HTMLCollection(3) [where 3 squares are objects with multiple sub-properties and sub-objects that can be accessed.]
for (let element of heading) {
	console.log(element.height);
	element.src =
		"data:image/jpeg;base64,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";
}

// Output : 330, 0, 1200

// The element points to an image which will effect all of the elements within the class square, all 3 squares will have their images replaced with the provided link.

// There are better ways to select using css syntax which most of us remember using querySelector('') and querySelectorAll('').

// querySelector('') : Takes in a string literal of a css like syntax to refer the first element matching the argument.

// querySelectorAll('') : Takes in a string literal of a css like syntax to refer all the elements matching the argument.

// Eg :

const takingItAll = document.querySelectorAll("a");

for (let links of takingItAll) {
	console.log(links.href);
}

// Output : All the links are printed on the console.
/*
http://127.0.0.1:5500/wiki/List_of_chicken_breeds
http://127.0.0.1:5500/wiki/Chicken
http://127.0.0.1:5500/wiki/Plumage
http://127.0.0.1:5500/wiki/Silk
http://127.0.0.1:5500/wiki/Poultry
http://127.0.0.1:5500/wiki/Broodiness
http://127.0.0.1:5500/Web_development/DOM/index.html#History
http://127.0.0.1:5500/Web_development/DOM/index.html#Characteristics
http://127.0.0.1:5500/Web_development/DOM/index.html#Bantams
http://127.0.0.1:5500/Web_development/DOM/index.html#Polydactyly
http://127.0.0.1:5500/Web_development/DOM/index.html#In_cuisine
http://127.0.0.1:5500/Web_development/DOM/index.html#References
http://127.0.0.1:5500/Web_development/DOM/index.html#Further_reading
http://127.0.0.1:5500/wiki/Southeast_Asia
http://127.0.0.1:5500/wiki/Java
http://127.0.0.1:5500/Web_development/DOM/index.html#cite_note-Ekarius-2
http://127.0.0.1:5500/wiki/Marco_Polo
http://127.0.0.1:5500/Web_development/DOM/index.html#cite_note-Graham-3
http://127.0.0.1:5500/wiki/Ulisse_Aldrovandi
http://127.0.0.1:5500/wiki/Naturalist
http://127.0.0.1:5500/wiki/University_of_Bologna
http://127.0.0.1:5500/wiki/Italy
http://127.0.0.1:5500/wiki/Treatise
http://127.0.0.1:5500/Web_development/DOM/index.html#cite_note-4

*/

/* List of properties and methods that are useful
 *)classList
 *)getAttribute()
 *)setAttribute()
 *)appendChild()
 *)prepend()
 *)removeChild()
 *)remove()
 *)createElement
 *)innerText
 *)textContent
 *)innerHTML
 *)value
 *)parentElement
 *)children
 *)nextSibling
 *)previousSibling
 *)style
 */

//  innerText = Returns the textual content of the element excluding markup.

// textContent = Similar to innerText, but it represents the textual content of an element, including whitespace and line breaks.
const textInner = document.querySelector("p").innerText;

console.log(textInner);

// Output :The text is written on first selection of p tag.

const textContent = document.querySelector("p").textContent;

// Output : text written with spaces and linebreaks included in p tag when immitating the one written on the .html file.

// innerHTML : Can emulate html code to be executed for selected argument.

document.querySelector("h1").innerHTML += "<sub><em>PuckPuck</em></sub>";
document.querySelector("h1").innerHTML += "<sup><em>ChuckChuck</em></sup>";

// Changes the html h1 element's behaviour, we can also use. The above syntax tells us the behaviour of increase itself and assign the value is allowed for this property.
document.querySelector("a").href;
// Output : 'http://127.0.0.1:5500/wiki/List_of_chicken_breeds'

const attr = document.querySelector("a");

attr.getAttribute("title");
// Output : 'List of chicken breeds' [getAttribute('attribute_name') can completely provide you with the value of the content].

// setAttribute() = Used to set attributes to a tag.

// Eg :

attr.setAttribute("href", "google.com");

// href = 'google.com' in simple words.
