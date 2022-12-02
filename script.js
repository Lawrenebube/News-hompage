const menuIcon = document.getElementById('menu-icon');
const menuBar = document.getElementById('mobile-menu');
const cancel = document.getElementById('cancel');


function menu() {
    menuBar.style.display = "grid";
}
function removeMenu( ) {
    menuBar.style.display = "none";  
}
menuIcon.addEventListener("click", menu);
cancel.addEventListener("click", removeMenu);