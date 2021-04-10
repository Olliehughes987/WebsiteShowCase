menuToggler.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});

addText.addEventListener('click', event => {
  var input = document.createElement('input');
  routineGrid.appendChild(input); 
  console.log("Text box added");
});
