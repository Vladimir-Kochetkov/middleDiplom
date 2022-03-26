const menu = () => {
    const navbarToogle = document.querySelectorAll('.navbar-toggle');
    const navigationFixed = document.querySelector('#navigation-fixed');
    const navbarCollapseFixed = document.querySelector('#navbar-collapse-fixed');

    navbarToogle[1].addEventListener('click', () => {
        navigationFixed.style.margin = '0';
        navigationFixed.style.display = 'block';
        navbarCollapseFixed.style.display = 'block';
        navbarCollapseFixed.querySelector('.navbar-order').style.display = 'block';
    });

    navbarToogle[0].addEventListener('click', () => {
        navigationFixed.style.margin = '-60';
        navigationFixed.style.display = 'none';
        navbarCollapseFixed.style.display = 'none';
        navbarCollapseFixed.querySelector('.navbar-order').style.display = 'none';
    });

};

export default menu;
