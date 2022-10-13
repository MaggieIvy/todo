// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  console.log(myNod
    elist)
  // strike through
  myNodelist[i].addEventListener('dblclick', function(e) {
    e.preventDefault()
    myNodelist[i].classList.toggle("done");
  })
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function clearAll() {
  console.log(myNodelist)
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.display = "none";
  }
}


//click on enter event
var onEnter = document.getElementById("myInput");
onEnter.addEventListener("keypress", function(ev) {
    if (ev.key == "Enter") {
        ev.preventDefault();
        newElement()
    }
})


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function myFilter() {
  // var input, filter, ul, li;
  var input = document.getElementById('myInput2');
  var filter = input.value.toUpperCase();
  var ul =document.getElementById("myUl");
  var li =document.getElementsByTagName("li");

  for ( i = 0; i < li.length; i++) {
    var a = li[i];
    var txtValue =a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
    
  }
}
    
// change myFunction to toggleInputs
function myFunction() {
  var title = document.getElementById("myInput");
  var search = document.getElementById("myInput2");
  var toggle = document.getElementById("toggle");

  if (toggle.innerHTML === "Search") {
    toggle.innerHTML = "Input"
    // hide input and show search
    title.style.display = "none";
    search.style.display = "initial";
  } else {
    toggle.innerHTML = "Search"
    search.style.display = "none";
    title.style.display = "initial";
  }
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}