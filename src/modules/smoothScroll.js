const smoothScroll = () => {
    const smoothScroll = document.querySelector('.smooth-scroll__img');

    let scrollpos = window.scrollY;
    const scrollChange = 560;

    smoothScroll.classList.add('d-none');

    window.addEventListener('scroll', function () {
        scrollpos = window.scrollY;

        if (scrollpos >= scrollChange) {
            smoothScroll.classList.remove('d-none');
        } else if (scrollpos <= scrollChange) {
            smoothScroll.classList.add('d-none');
        }
    });

    smoothScroll.addEventListener('click', () => {
        window.scroll({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    });
};

export default smoothScroll;