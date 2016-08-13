var userTreeHeight = document.getElementById("user-tree-height");
var userTreeCharacter = document.getElementById("user-tree-char");
var growTreeBtn = document.getElementById("grow-tree-button");

function getUserValues() {
  var treeHeight = userTreeHeight.value;
  var treeChar = userTreeCharacter.value;
  // console.log("height will be:",treeHeight,"character will be:",treeChar);
  checkValues(treeHeight,treeChar);
}



// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button,
// then display an alert stating that both fields must have a value.
function checkValues(treeHeight,treeChar) {
  if(!treeHeight || !treeChar) {
    alert("Please enter a desired height AND character type");
  } else {
    buildTreeObject(treeHeight, treeChar);
  }
}


// It accepts a single object as an argument. The object should have two key/value pairs.*/
function buildTreeObject(treeHeight,treeChar) {
  var treeObject = {
    h: treeHeight,
    c: treeChar
  }
  // console.log("object height:",treeObject.h,"tree object char:",treeObject.c);
  growTreeObject(treeObject);
}

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
function growTreeObject(treeObject) {
  for (i = 0; i < treeObject.h; i ++) {
    var numOfChar = 2*i+1;
    var numOfSpace = (treeObject.h-i);
    console.log(" ".repeat(numOfSpace),treeObject.c.repeat(numOfChar));
  }
}

// This requires you to add an event listener to the button, as well as an event listener for the enter/return key.
growTreeBtn.addEventListener("click",getUserValues);

window.addEventListener("keypress", checkEnter);

function checkEnter (e) {
  if(e.keyCode === 13) {
    getUserValues();
  }
}