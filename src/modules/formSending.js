const formSending = () => {
    const sendData = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
        }

        return await response.json();
    };

    const formHorizontal = document.querySelectorAll('.form-horizontal');
    const fio = document.querySelectorAll('[placeholder="ваше имя"]');
    const tel = document.querySelectorAll('[placeholder="ваш телефон"]');
    let data = {};

    fio.forEach(inputfio => {
        tel.forEach(inputtel => {
            inputfio.addEventListener('blur', (event) => {
                if (event.target.value.length > 1) {
                    event.target.value = event.target.value.replace(/[^а-яА-Яa-zA-Z]/gi, '');
                } else {
                    event.target.value = '';
                }
            });
            inputtel.addEventListener('blur', (event) => {
                if (event.target.value.length < 16) {
                    event.target.value = event.target.value.replace(/[^+\d]/g, '');
                } else {
                    event.target.value = '';
                }
            });
            data = {
                name: inputfio.value,
                tel: inputtel.value,
            };
        });
    });

    console.log(data);

    formHorizontal.forEach(elem => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();

            //const formData = new FormData(formHorizontal);

            //formData.set('order', JSON.stringify(data));
            const carList = JSON.stringify(data);

            sendData('https://jsonplaceholder.typicode.com/posts', carList)
                .then(() => {
                    elem.reset();
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    });

};

export default formSending;