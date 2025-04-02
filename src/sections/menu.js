document.addEventListener("DOMContentLoaded", function () {
const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');
const closeBtn = document.getElementById("close-btn");


menuBtn.addEventListener("click", function () {
    menuList.classList.remove("hidden"); // Show menu
    menuBtn.classList.add("hidden"); // Hide menu button
    closeBtn.classList.remove("hidden"); // Show close button
});

closeBtn.addEventListener("click", function () {
    menuList.classList.add("hidden"); // Hide menu
    closeBtn.classList.add("hidden"); // Hide close button
    menuBtn.classList.remove("hidden"); // Show menu button
});
});

// menuBtn.addEventListener('click', () => {
//     menuList.classList.toggle('hidden');
//     if (menuBtn.getAttribute("name") === "menu-outline") {
//         menuBtn.setAttribute("name", "close-outline");
//     } else {
//         menuBtn.setAttribute("name", "menu-outline");
//     }
// });
