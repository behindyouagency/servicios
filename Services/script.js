function showMenu() {
    var logoPage = document.getElementById('logoPage');
    var menuPage = document.getElementById('menuPage');
    logoPage.style.display = 'none';
    menuPage.style.display = 'flex';
}

function toggleSubMenu(service) {
    var submenu = document.getElementById(service + 'SubMenu');
    if (submenu.style.display === 'none') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}
