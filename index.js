//create a "close" button and appeend it to each list item
const myNodelist =document.getElementsByTagName("li");
let i;
for (let i = 0; i < array.length; i++) {
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7")
    span.className = "close";
    span.appendChild(txt)
    myNodelist[i].appendChild(span);  
}