let count = 1;
let routineList = [];

toggleDisable = (elem, state) => {
  document.getElementById(elem).disabled = state;
}

addTextBox = (name) => {
  let input = document.createElement('input');
  input.setAttribute("id", name);
  routineGrid.appendChild(input);
}

delTextBox = (name) => {
  let curr = document.getElementById(name);
  curr.remove();
}


addToStorage = () => {
  localStorage.routineList = routineList;
  console.log(localStorage.routineList + "stored");
}

loadFromStorage = () => {
    routineList = localStorage.routineList.split(",");
}

/* When the addText button (+) is clicked, it adds a text box under the current
   ones. However, if there is already 7 then is disables the button as it has
   reached the limit.
*/
addText.addEventListener('click', event => {
  switch(count) {
    case 7:
      toggleDisable("addText", true);
    default:
      toggleDisable("delText", false);
      count = count + 1;
      addTextBox("row" + count);
  }});

/* Performs the same as the addText but removes instead of creating. Once there
   is only 2 elements left in the list and the button is clicked, it disables
   the delete button as otherwise the user could click it and make the variable
   go negative which would cause an error.
*/
delText.addEventListener('click', event => {
  switch(count) {
    case 2:
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
  loadFromStorage();
  if(count < routineList.length) {
    for(let i = count; i < routineList.length; i++) {
      addTextBox("row" + (i + 1));
    }
    count = routineList.length;
  }
  if (count > routineList.length) {
    for(let i = count; i > routineList.length; i--) {
      delTextBox("row" + i);
    }
    count = routineList.length;
  }
  for(let i = 1; i <= routineList.length; i++) {
    document.getElementById("row" + i).value = routineList[i-1];
  }
});
