'use strict';
import IMask from 'imask';
export const validation = () => {
    const inputsName = document.querySelectorAll('input[name = fio]');
    const inputsPhone = document.querySelectorAll('input[name = phone]');

    inputsName.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\sа-яА-Яa-zA-Z]+/i, "");
            item.classList.remove('error');
        });
    });

    inputsPhone.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^+0-9]+/, "");
            let maskOptions = {
                mask: '+7(000)000-00-00'
            };
            let mask = new IMask(item, maskOptions);
            item.classList.remove('error');
        });
    });
};