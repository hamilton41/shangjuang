let searchBtn = document.querySelector(".header .container-header ul i");
let searchBox = document.querySelector(".header .container-header ul .search-box");
let body = document.querySelector("body");


body.addEventListener("click",function(){
    
});

searchBtn.addEventListener("click",function(){
    searchBox.classList.toggle("search-box-open");
});

let headerNav = document.querySelector(".header .container-header ul");
let navOpen = document.querySelector(".header>i");
let navClose = document.querySelector(".header .container-header ul>i");

navClose.addEventListener("click",function(){
    headerNav.classList.remove("nav-open");
});

navOpen.addEventListener("click",function(){
    headerNav.classList.add("nav-open");
});

let headerTxtAnimate = document.querySelector(".news .container-news .news-content>p");

var clock = setInterval(function() {
  headerTxtAnimate.classList.toggle("go_down");
 }, 5000);