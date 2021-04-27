"use strict";
/* ----ON CLICK---- */

/* When the hamburger menu button is clicked, it sets the state of the menuToggle
   to menu--open which allows for event management
*/
menuToggler.addEventListener('click', event => {
  menu.classList.toggle('menu--open');
});
