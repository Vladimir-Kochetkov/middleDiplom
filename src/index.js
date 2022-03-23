import { calculator } from "./modules/calculator";
import { form } from "./modules/form";
import headerModal from './modules/headerModal';
import imgModal from './modules/imgModal';
import servisesModal from './modules/servisesModal';

import smoothScroll from './modules/smoothScroll';
import { swiper } from "./modules/swiper";
import timer from './modules/timer';
import { validation } from "./modules/validation";



calculator();
form({
    formId: "form1",
    someElement: [
        {
            id: 'calc-total'

        }
    ]
});
form({
    formId: "form2",
    someElement: [
        {
            id: 'calc-total'

        }
    ]
});
headerModal();
imgModal();
servisesModal();
smoothScroll();
swiper();
timer('25 march 2022');
validation();


