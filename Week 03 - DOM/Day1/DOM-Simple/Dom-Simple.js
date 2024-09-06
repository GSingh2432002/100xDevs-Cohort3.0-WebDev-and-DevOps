/* Fetching elements:-
There are 5 popular methods available for fetching DOM elements-
1. querySelector
eg:-
    const title = document.querySelector('h1');
    console.log(title.innerHTML)

2. querySelectorAll
eg:-
    const secondTodo = document.querySelectorAll('h4')[1];
    console.log(secondTodo.innerHTML)

3. getElementById
4. getElementByClassName
5. getElementByClassName
*/

/* Updating elements:-
1. .innerHTML - used for updating the HTML inside an elements
eg:-
    const firstTodo = document.querySelector("h4");
    firstTodo.innerHTML = "Don't take class";
2. .textContent - used for updating the text content inside an element
*/

/* Deleting elements:-
1. removeChild - removes a specific node of a parent
2. onclick - function that triggers whenever you click on a button
eg:-
    function deleteRandomTodo(){
        const element = document.querySelector("h2");
        const parentELement = element.parentNode;
        parentElement.removeChild(element);
    }
*/

/* Adding elements:-
1. createElement
2. appendChild
eg:-
function addTodo(){
    const inputEl = document.getElementById("inp");
    const textNode = document.createElement("div");
    textNode.innerHTML = inputEl.value;
    const parent El = document.getElementById("todos");
    parentEl.appendChild(textNode);

eg:-
    const divEl = document.createElement("div");
    divEl.innerHTML = "Hi Gaurav";
    const parentEl = document.querySelector("body");
    parentEl.appendChild(divEl);
}
*/