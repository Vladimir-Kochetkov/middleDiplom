import { calculator } from "./modules/calculator";
import { form } from "./modules/form";
import headerModal from './modules/headerModal';
import imgModal from './modules/imgModal';
import servisesModal from './modules/servisesModal';

import smoothScroll from './modules/smoothScroll';
import menu from './modules/menu';
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
    form({
        formId: "callback-form1",
        someElement: []
    });
    form({
        formId: "application-form1",
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
    form({
        formId: "callback-form2",
        someElement: [
            {
                id: 'calc-total'

            }
        ]
    });
    form({
        formId: "application-form2",
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
    form({
        formId: "callback-form3",
        someElement: []
    });
    form({
        formId: "application-form3",
        someElement: []
    });
}
headerModal();
imgModal();
servisesModal();
smoothScroll();
swiper();
timer('27 march 2022');
validation();
menu();

