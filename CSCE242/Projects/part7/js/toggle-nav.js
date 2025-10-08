//Consts
const hamburger = document.getElementById("hamburger");
const hamburger2 = document.getElementById("hamburger2");
const nav = document.getElementById("main-nav");
const nav2 = document.getElementById("brand-nav");

//Toggle the nav when hamburger icon is clicked
hamburger.onclick = (event) => {
    nav.classList.toggle("hide-small");
}
hamburger2.onclick = (event) => {
    nav2.classList.toggle("hide-small");
}