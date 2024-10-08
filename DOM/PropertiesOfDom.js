// classList : It is a property of an element that provides a convenient way to manipulate the class attributes of that element.
// It returns a live DOMTokenList collection of the space-separated tokens representing the various classes assigned to the element.

// Eg :

const list = document.querySelectorAll("li");

for (const items of list) {
	if (items.getAttribute("class") !== "highlight") {
		items.classList.toggle("highlight");
	}
}

// You can remove,add or toggle classes in an element using classList.
// remove(): removes the class from <li>, we can use toggle('class-name'): if the specified class is
// not present, it will add or delete if present.

// Moving from one element to another element.
// parentElement
// children
// nextSibling
// previousSibling

console.log(list.parentElement);
// Output: undefined, as we have use querySelectorAll('li'), it will select all.

const newElement = document.querySelector("li");

console.log(newElement.parentElement);

// Output : <ul>...</ul>

// We can append multiple .parentElement instances to see the parent till we come out of body and find <html> as the root element.
// Eg :

console.log(newElement.parentElement.parentElement.parentElement.parentElement);

//Output : <html lang="en"><head>...</head> <body></body> </html>

// the output here is shown in the collapsed format, in the console, it literally points to the entire of the html we've written in index.html

console.log(newElement.children); // Output Explanation : In an array like iterable we can view the child elements.

// Actual Output : [a](It has one element. We can use indexing it to access that element.)

console.log(newElement.children[0]); // Output : Displays the actual HTML code of the child tag.

const imgElement = document.querySelector(".square");

console.log(imgElement.childElementCount); // Output : 0 childElementCount provides the count of all children under the element.
console.log(imgElement.childNodes); // Output : NodeList[] (Empty Data-Structure which is iterable like array, but don't have map,reduce and filter.)

/* previousSibling and nextSibling are properties of an element that allow you to navigate through the DOM tree by accessing the preceding or succeeding sibling element, respectively.*/

console.log(imgElement.previousSibling);
console.log(imgElement.nextSibling);
// Output :
// #text |> (collapsed format, if expanded in console, it will show various properties of the element.)

imgElement.previousElementSibling; // Points to p tag, if no sibling element, it will return null.
imgElement.nextElementSibling; // Points to img tag.
