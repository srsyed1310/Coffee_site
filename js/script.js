
const NavBar = document.querySelector('.navbar_menu');
const menubar = document.querySelector('#menubar');
const cartItems = document.querySelector('.cart-item-container');
const cartBtn = document.querySelector('#cart-btn');
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-box');

// Menu Bar
menubar.addEventListener('click',()=>{
    NavBar.classList.toggle('active');
    cartItems.classList.remove('active');
    searchForm.classList.remove('active');
});


// Cart Section

cartBtn.addEventListener('click',()=>{
    cartItems.classList.toggle('active');
    NavBar.classList.remove('active');
    searchForm.classList.remove('active');
});

// Search Form

searchBtn.addEventListener('click',()=>{
    searchForm.classList.toggle('active');
    NavBar.classList.remove('active');
    cartItems.classList.remove('active');
});

// Window Scroll
window.onscroll = ()=> {
    NavBar.classList.remove('active');
    cartItems.classList.remove('active');
    searchForm.classList.remove('active');
    
}