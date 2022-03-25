'use strict';

export const calculator = () => {
    const body = document.querySelector('body');
    if (body.classList.contains("balkony")) {
        const calcBlock = document.getElementById('calc');
        const type = document.getElementById('calc-type');
        const typeMaterial = document.getElementById('calc-type-material');
        const area = document.getElementById('calc-input');
        let calcTotal = document.getElementById('calc-total');
        console.log(type.value);

        const calculate = () => {
            const typeValue = +type.options[type.selectedIndex].value;
            const typeMaterialValue = +typeMaterial.options[typeMaterial.selectedIndex].value;
            let areaValue = +area.value;
            let calcTotalValue;
            let rubl = " 000руб";
            type.setAttribute('required', true);
            typeMaterial.setAttribute('required', true);
            area.value = area.value.replace(/[^0-9]+/, "");

            if (type.value && typeMaterial.value) {
                calcTotalValue = Math.floor(areaValue * typeMaterialValue * typeValue);
                calcTotalValue += rubl;
            } else {
                calcTotalValue = 0;
            }
            calcTotal.value = calcTotalValue;
        };


        calcBlock.addEventListener('input', () => {
            if (type.value === '--' || typeMaterial.value === '--' || area.value === '') {
                calcTotal.value = '';
            } else if (type.value !== '--' && typeMaterial.value !== '--' && area.value !== '') {
                calculate();
            }
        });
    }
}; 