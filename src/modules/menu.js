const menu = () => {
    const menuBtn = document.querySelectorAll('.navbar-toggle')[1];
    const navigation = document.querySelector('#navigation');
    const menu = navigation.querySelector('#navbar-collapse');

    if (window.screen.width < 992) {
        menuBtn.addEventListener('click', () => {
            menu.style.display = "block";
        });
    }
};

export default menu;