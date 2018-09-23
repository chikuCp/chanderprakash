// function for event listeners

function eventListeners(){
// hide preloader after page has been loaded
const ui = new UI()

window.addEventListener('load',function(){
    ui.hidePreloader();
})

// navigation button

document.querySelector('.navBtn').addEventListener('click',function(){
    ui.showNav();
})  




}

eventListeners();

// Constructor 

function UI(){

}

UI.prototype.hidePreloader = function(){
    document.querySelector('.preloader').style.display="none";
}

UI.prototype.showNav = function(){
    document.querySelector('.nav').classList.toggle('nav_show');
}

