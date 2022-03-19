const benefits = () => {
    const benefits = document.getElementById('benefits');
    const benefitsItems = document.querySelectorAll('.benefits__item');

    benefitsItems.forEach(item => {
        item.classList.add('d-none');
        item.style.maxWidth = '100%';
    });

    let count = 0;

    if (window.screen.width < 576) {
        benefitsItems[0].classList.add('service-active');
        benefits.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.matches('[src="images/benefits/right-arrow.svg"]')) {
                benefitsItems[count].classList.remove('service-active');
                count++;
                if (count >= benefitsItems.length) {
                    count = 0;
                }
                benefitsItems[count].classList.add('service-active');
            } else if (event.target.matches('[src="images/benefits/left-arrow.svg"]')) {
                benefitsItems[count].classList.remove('service-active');
                if (count === 0) {
                    count = benefitsItems.length;
                }
                count--;
                benefitsItems[count].classList.add('service-active');
            }
        });
    } else if (window.screen.width > 576) {
        for (let i = 0; i < 3; i++) {
            benefitsItems[i].classList.add('service-active');
        }
        benefits.addEventListener('click', (event) => {
            event.preventDefault();
            if (event.target.matches('[src="images/benefits/right-arrow.svg"]')) {
                benefitsItems[count].classList.remove('service-active');
                benefitsItems[count + 1].classList.remove('service-active');
                benefitsItems[count + 2].classList.remove('service-active');
                count += 3;
                if (count >= benefitsItems.length) {
                    count = 0;
                }
                benefitsItems[count].classList.add('service-active');
                benefitsItems[count + 1].classList.add('service-active');
                benefitsItems[count + 2].classList.add('service-active');
            } else if (event.target.matches('[src="images/benefits/left-arrow.svg"]')) {
                benefitsItems[count].classList.remove('service-active');
                benefitsItems[count + 1].classList.remove('service-active');
                benefitsItems[count + 2].classList.remove('service-active');
                if (count <= 0) {
                    count = benefitsItems.length;
                }
                count -= 3;
                benefitsItems[count].classList.add('service-active');
                benefitsItems[count + 1].classList.add('service-active');
                benefitsItems[count + 2].classList.add('service-active');
            }
        });
    }
};

export default benefits;