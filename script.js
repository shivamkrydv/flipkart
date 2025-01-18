// let btnCategory = document.getElementsByClassName('btn-category')[0]
// let categories = document.getElementsByClassName('categories')[0]

// function categoryshow(){
//    const display = categories.style.display === ('flex') ? 'none' : 'flex';
//    categories.style.display = display;
   
// };

// btnCategory.onclick = categoryshow;

let hideSide = document.querySelector(".hidesidebar");
let showSide = document.querySelector(".mainhambar");
let mobSidebar = document.querySelector(".mobsidebar");
const hideSidebar = () => {
    mobSidebar.style.display = 'none';
}
hideSide.onclick = hideSidebar;

const showSidebar = () => {
    mobSidebar.style.display = 'flex'
}
showSide.onclick = showSidebar;


const mediaQuery = window.matchMedia("(max-width : 768px)");
