const container = document.querySelector("#container");

const p = document.createElement("p");
p.textContent = "Hey I'm red!";
p.classList.add("red");
p.style["color"] = "red";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3";
h3.style["color"] = "blue";

container.appendChild(h3);

const div = document.createElement("div");
div.style["border"] = "2px solid black";
div.style["backgroundColor"] = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p_2 = document.createElement("p");
p_2.textContent = "ME TOO!";
div.appendChild(p_2);

function alertMessage() {
  alert("Click me AND then you push me, till I can get my AB STRAC TION");
  btn.textContent = "I just got pushed";
  btn.style["backgroundColor"] = "red";
}

const btn = document.createElement("button");
btn.textContent = "Push";
// btn.addEventListener("click", alertMessage);
btn.addEventListener("click", function (e) {
    btn.style.backgroundColor = "blue";
    console.log(e.target);
});
div.appendChild(btn);

container.appendChild(div);

// There are many ways to define a function
//
// FUNCTION DECLARATION
// function nameOfFunction(inputParameter) {
//   //.. your code here
//   return; // something
// }
//
// ANONYMOUS FUNCTION / 1st type
// const myConstant = function (inputParameter) {
//   return; //something
// };
//
// ANONYMOUS FUNCTION / 2nd type with arrow func
// const myConstant = (inputParameter) => {
//   // your code here
//   return; //something
// };
//
// ARROW FUNCTION / one parameter and one line of code => parenthesis and brackets can be omitted
// const myConstant = inputParameter => inputParameter * 2; // Note: without brackets no need to write return
//
// ARROW FUNCTION / no input parameter
// const myConstant = () => {
//   return "hello";
// };
//
// CALLBACK: passing a function as an input parameter to another function
// items.forEach((item) => console.log(item));
//
// notes.forEach(console.log); this is another magic way to write it but you will get it later...
