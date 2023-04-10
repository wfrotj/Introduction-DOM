/*const body = document.querySelector("body");

const container = document.createElement("div");
container.setAttribute("id", "container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = douement.createElement("p");
p.textContent = "Hey, I'm red!";
p.style.color = "red";

container.appendChild(p);

const h3 = douement.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style.color = "blue";

container.appendChild(h3);

const div = douement.createElement("div");
div.style.cssText = "border: 1px solid black; background-color: pink";

container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

div.appendChild(p2);

body.appendChild(container);
*/

const body = document.querySelector("body");
const header = document.createElement("header");

body.appendChild(header);

const logo = document.createElement("h1");
logo.textContent = "Logo";
header.appendChild(logo);

const menu = document.createElement("menu");

header.appendChild(menu);

const list = document.createElement("listing");

menu.appendChild(listing);
