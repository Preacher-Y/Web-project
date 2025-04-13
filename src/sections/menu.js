function initializeMenu() {
    // Wait for elements to be available
    const checkElements = setInterval(() => {
        const menuBtn = document.getElementById('menu-btn');
        const menuList = document.getElementById('menu-list');
        const closeBtn = document.getElementById('close-btn');

        if (menuBtn && menuList && closeBtn) {
            // Clear interval once elements are found
            clearInterval(checkElements);

            // Add event listeners
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
        }
    }, 100); // Check every 100ms
}

// Call initializeMenu immediately if script is loaded dynamically
initializeMenu();