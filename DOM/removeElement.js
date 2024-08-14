// Removing elements: There are 2 ways to remove an element.

// Old Way removeChild(), it does not actually remove the element directly, there are some workarounds to do.

const removeA = document.querySelector("li");

console.log(removeA.parentElement);

// removeA.removeChild(li) won't work, as it will try to look for the child of li, which is null.

// Instead, we create another element pointing to ul and use, parentElement.removeChild(removeA);

// The old way :

const parentElement = removeA.parentElement;

parentElement.removeChild(removeA); // Removes the expected <li> with the contents.

// OR

removeA.parentElement.removeChild(removeA); // Both do the same thing, but, there's an unnecessary step added.

// New way, this is how you can do it with the new way, by using elementtoremove.remove().

const newB = document.querySelector("b");

newB.remove();
