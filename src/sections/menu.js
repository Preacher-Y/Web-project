document.addEventListener("DOMContentLoaded", function () {
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');
const closeBtn = document.getElementById("close-btn");


menuBtn.addEventListener("click", function () {
    menuList.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
    menuList.classList.add("hidden");
    closeBtn.classList.add("hidden");
    menuBtn.classList.remove("hidden");
});
});
