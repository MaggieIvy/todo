// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  // strike through
  myNodelist[i].addEventListener('dblclick', function(e) {
    e.preventDefault()
    myNodelist[i].classList.toggle("done");
  }) 

  myNodelist[i].appendChild(span);
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
  // var close = document.getElementsByClassName("close");
  console.log(close)
  myNodelist.style.display = "none";
  console.log(myNodelist)
}


//click on enter event
var onEnter = document.getElementById("myInput");
onEnter.addEventListener("keypress", function(ev) {
    console.log(ev)
    if (ev.key == "Enter") {
        ev.preventDefault();
        newElement()
    }
})

function onEnter() {
    console.log("enter");
    
}


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
    console.log(input.value)
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
    
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