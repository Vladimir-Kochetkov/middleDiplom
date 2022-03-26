const servisesModal = () => {
    const serviceBtn = document.querySelectorAll('.service-button');
    const servicesModal = document.querySelector('.services-modal');
    const servicesClose = document.querySelector('.services-modal__close');
    const overlay = document.querySelector('.overlay');
    const subj = servicesModal.querySelector('input[name="subject"]');

    serviceBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            overlay.style.display = 'block';
            servicesModal.style.display = "block";
            subj.value = event.target.attributes[1].value;
        });
    });

    servicesClose.addEventListener('click', (event) => {
        event.preventDefault();
        overlay.style.display = 'none';
        servicesModal.style.display = "none";
    });

};

export default servisesModal;