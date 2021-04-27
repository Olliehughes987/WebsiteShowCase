"use strict";
let count = 1;
let routineList = [];

const toggleDisable = (elem, state) => {
  document.getElementById(elem).disabled = state;
}

/*
   Creates a new input box and assigns it to the variable input,
   this is then appended to routineGrid.
*/
const addTextBox = (name) => {
  let input = document.createElement('input');
  input.setAttribute("id", name);
  routineGrid.appendChild(input);
  input.classList.toggle('fade');
}

/*
   Deletes the element with the name passed into the function.
*/
const delTextBox = (name) => {
  let curr = document.getElementById(name);
  curr.remove();
}

/*
   Stores the current routine into local storage,
*/
const addToStorage = () => {
  localStorage.routineList = routineList;
  console.log(localStorage.routineList + " stored into local storage");
}

const loadFromStorage = () => {
    routineList = localStorage.routineList.split(",");
}

const correctTextBoxes = () => {
  try {
    loadFromStorage();
    if(count < routineList.length) {
      for(let i = count; i < routineList.length; i++) {
        addTextBox("row" + (i + 1));
      }
      count = routineList.length;
    }
    else if (count > routineList.length) {
      for(let i = count; i > routineList.length; i--) {
        delTextBox("row" + i);
      }
      count = routineList.length;
    }
    for(let i = 1; i <= routineList.length; i++) {
      document.getElementById("row" + i).value = routineList[i-1];
    }
  }
  catch (e) {
    alert("No saved routine found.");
  }
}


const checkButtons = (button) => {
  if(count >= 7) {
    toggleDisable("addText", true);
  }
  else if (count <= 2) {
    toggleDisable("delText", true);
  }
}

/*
   When the addText button (+) is clicked, it adds a text box under the current
   ones. However, if there is already 7 then is disables the button as it has
   reached the limit.
*/
addText.addEventListener('click', event => {
  switch(count) {
    case 7 || 8:
      toggleDisable("addText", true);
    default:
      toggleDisable("delText", false);
      count = count + 1;
      addTextBox("row" + count);
  }});

/*
   Performs the same as the addText but removes instead of creating. Once there
   is only 2 elements left in the list and the button is clicked, it disables
   the delete button as otherwise the user could click it and make the variable
   go negative which would cause an error.
*/
delText.addEventListener('click', event => {
  switch(count) {
    case 2 || 1:
      toggleDisable("delText", true);
    default:
    delTextBox("row" + count);
      count = count - 1;
      toggleDisable("addText", false);
  }});


save.addEventListener('click', event => {
  for (let i = 0; i < count; i++) {
    let inp = document.getElementById("row" + (i + 1)).value;
    routineList[i] = inp;
  }
  addToStorage();
});


load.addEventListener('click', event => {
  correctTextBoxes();
});
