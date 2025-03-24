const menuBtn = document.getElementById('menu-btn');
const menuList = document.getElementById('menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('hidden');


    if (menuBtn.getAttribute("name") === "menu-outline") {
        menuBtn.setAttribute("name", "close-outline");
    } else {
        menuBtn.setAttribute("name", "menu-outline");
    }
});
