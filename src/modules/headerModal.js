const headerModal = () => {
    const modal = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const btn = document.getElementsByClassName('btn')[1];
    const closeBtn = document.querySelector('.header-modal__close');

    btn.addEventListener('click', () => {
        overlay.style.display = 'block';
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
        modal.style.display = 'none';
    });
};

export default headerModal;