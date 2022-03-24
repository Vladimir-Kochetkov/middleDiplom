import { calculator } from "./modules/calculator";
import { form } from "./modules/form";
import headerModal from './modules/headerModal';
import imgModal from './modules/imgModal';
import servisesModal from './modules/servisesModal';

import smoothScroll from './modules/smoothScroll';
import { swiper } from "./modules/swiper";
import timer from './modules/timer';
import { validation } from "./modules/validation";

const body = document.querySelector('body');


calculator();
if (body.classList.contains("okna")) {
    form({
        formId: "form1",
        someElement: []
    });
    form({
        formId: "form2",
        someElement: []

    });
}
if (body.classList.contains("balkony")) {
    form({
        formId: "form3",
        someElement: [
            {
                id: 'calc-total'

            }
        ]
    });
    form({
        formId: "form4",
        someElement: [
            {
                id: 'calc-total'

            }
        ]
    });
}
if (body.classList.contains("kuhni")) {
    form({
        formId: "form5",
        someElement: []

    });
    form({
        formId: "form6",
        someElement: []

    });
}
headerModal();
imgModal();
servisesModal();
smoothScroll();
swiper();
timer('25 march 2022');
validation();


