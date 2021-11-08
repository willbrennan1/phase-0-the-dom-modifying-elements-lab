// Write your code here!
let main = document.querySelector('main');
main.remove();

let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Will is the champion";
document.body.appendChild(newheader);

// document.body.append(newHeader);
// newHeader.nodeName = 'H1';
// // newHeader.id = 'victory';
// console.log(newHeader.id);
// let message = newHeader.textContent = "YOUR-NAME is the champion";

