var count = 0;

menuToggler.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});

addText.addEventListener('click', event => {
  var input = document.createElement('input');
  var count = count + 1;
  console.log(count);
  routineGrid.appendChild(input);
  console.log("Text box added");
});
