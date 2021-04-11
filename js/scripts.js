var count = 1;
disableButton("delText");


/*  ----FUNCTIONS----  */

  // disables/enables the desired buttons
function disableButton(elem) {
  document.getElementById(elem).disabled = true;
}

function enableButton(elem) {
  document.getElementById(elem).disabled = false;
}

/* ----ON CLICK---- */

/* When the hamburger menu button is clicked, it sets the state of the menuToggle
   to menu--open which allows for event management
*/
menuToggler.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});

/* When the addText button (+) is clicked, it adds a text box under the current ones.
   However, if there is already 7 then is disables the button as it has reached the
   limit.
*/
addText.addEventListener('click', event => {
  switch(count) {
    case 7:
      disableButton("addText");
    default:
      enableButton("delText");
      count = count + 1;
      var input = document.createElement('input');
      input.setAttribute("id", "row" + count);
      routineGrid.appendChild(input);
  }});

/* Performs the same as the addText but removes instead of creating. Once there is
   only 2 elements left in the list and the button is clicked, it disables the delete
   button as otherwise the user could click it and make the variable go negative which
   would cause an error.
*/
delText.addEventListener('click', event => {
  switch(count) {
    case 2:
      disableButton("delText");
    default:
      var curr = document.getElementById("row" + count);
      curr.remove();
      count = count - 1;
      enableButton("addText");
  }});
