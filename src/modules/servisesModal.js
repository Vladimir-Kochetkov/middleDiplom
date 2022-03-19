const servisesModal = () => {
    const serviceBtn = document.querySelectorAll('.service-button');
    const servicesModal = document.querySelector('.services-modal');
    const servicesClose = document.querySelector('.services-modal__close');
    const overlay = document.querySelector('.overlay');

    serviceBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            overlay.style.display = 'block';
            servicesModal.style.display = "block";
        });
    });

    servicesClose.addEventListener('click', (event) => {
        event.preventDefault();
        overlay.style.display = 'none';
        servicesModal.style.display = "none";
    });

};

export default servisesModal;