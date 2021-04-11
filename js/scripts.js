var count = 1;
disableButton("delText");

menuToggler.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});

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



function disableButton(elem) {
  document.getElementById(elem).disabled = true;
}

function enableButton(elem) {
  document.getElementById(elem).disabled = false;
}
