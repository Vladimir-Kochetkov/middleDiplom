const ourServices = () => {
    const serviceBlock = document.querySelectorAll('.service-block');
    const servicesArrows = document.querySelector('.services-arrows');
    const services = document.getElementById('services');
    const servicArrows = document.querySelector('.services__arrow--right');
    console.log(servicArrows);

    serviceBlock.forEach(item => {
        item.classList.add('d-none');
    });

    let count = 0;

    if (window.screen.width < 576) {
        serviceBlock[0].classList.add('service-active');
        services.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.matches('[src="images/benefits/right-arrow.svg"]')) {
                serviceBlock[count].classList.remove('service-active');
                count++;
                if (count >= serviceBlock.length) {
                    count = 0;
                }
                serviceBlock[count].classList.add('service-active');
            } else if (event.target.matches('[src="images/benefits/left-arrow.svg"]')) {
                serviceBlock[count].classList.remove('service-active');
                if (count === 0) {
                    count = serviceBlock.length;
                }
                count--;
                serviceBlock[count].classList.add('service-active');
            }
        });
    } else if (window.screen.width > 576) {
        serviceBlock[0].classList.add('service-active');
        serviceBlock[1].classList.add('service-active');
        services.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.matches('[src="images/benefits/right-arrow.svg"]')) {
                serviceBlock[count].classList.remove('service-active');
                serviceBlock[count + 1].classList.remove('service-active');
                count += 2;
                if (count >= serviceBlock.length) {
                    count = 0;
                }
                serviceBlock[count].classList.add('service-active');
                serviceBlock[count + 1].classList.add('service-active');
            } else if (event.target.matches('[src="images/benefits/left-arrow.svg"]')) {
                serviceBlock[count].classList.remove('service-active');
                serviceBlock[count + 1].classList.remove('service-active');
                if (count <= 0) {
                    count = serviceBlock.length;
                }
                count -= 2;
                serviceBlock[count].classList.add('service-active');
                serviceBlock[count + 1].classList.add('service-active');
            }
        });
    }
};

export default ourServices;