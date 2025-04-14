function initializeMenu() {
    const checkElements = setInterval(() => {
      const menuBtn = document.getElementById('menu-btn');
      const menuList = document.getElementById('menu-list');
      const closeBtn = document.getElementById('close-btn');
  
      if (menuBtn && menuList && closeBtn) {
        clearInterval(checkElements);
  
        
        if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
          menuBtn.src = '/src/img/Group 5.svg';
          closeBtn.src = '/src/img/Group 4.svg';
        }
  
        
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
    }, 100);
  }
  