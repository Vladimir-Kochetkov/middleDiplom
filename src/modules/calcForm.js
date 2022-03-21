const calcForm = () => {
    const calcType = document.querySelector('#calc-type');
    const calcInput = document.querySelector('#calc-input');
    const calcTotal = document.getElementById('calc-total');
    const typeMaterial = document.querySelector('#calc-type-material');
    if (calcType.value === '' || calcInput.value === '') {
        calcTotal.value = '';
    }

    /* calcInput.value.match(/\d/g);
    const a = +calcInput.value * +calcType.value * +typeMaterial.value;
    calcTotal.value = +calcInput.value * +calcType.value * +typeMaterial.value;
    console.log(a); */

};

export default calcForm;