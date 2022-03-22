import headerModal from './modules/headerModal';
import servisesModal from './modules/servisesModal';
import timer from './modules/timer';
import smoothScroll from './modules/smoothScroll';
import imgModal from './modules/imgModal';
import calcForm from './modules/calcForm';
import { form } from "./modules/form";
import { validation } from "./modules/validation";
import { swiper } from "./modules/swiper";


headerModal();
servisesModal();
timer('25 march 2022');
smoothScroll();
imgModal();
calcForm();
form({ formId: "form1" });
form({ formId: "form2" });
validation();
swiper();
