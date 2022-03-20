const timer = (deadline) => {
    const days = document.querySelectorAll('.count_1>span');
    const hours = document.querySelectorAll('.count_2>span');
    const minutes = document.querySelectorAll('.count_3>span');
    const seconds = document.querySelectorAll('.count_4>span');
    const countdown = document.getElementsByClassName('countdown-text');

    const getTimeRemaning = () => {
        const addZero = elem => elem < 10 ? `0${elem}` : elem;

        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;

        if (dateStop <= dateNow) {
            for (let i = 0; i < countdown.length; i++) {
                countdown[i].childNodes[0].textContent = "Акция закончилась!Ждите новых!!!";
            }
        }

        let days = addZero(Math.floor(timeRemaining / 60 / 60 / 24));
        let hours = addZero(Math.floor(timeRemaining / 60 / 60) % 24);
        let minutes = addZero(Math.floor((timeRemaining / 60) % 60));
        let seconds = addZero(Math.floor(timeRemaining % 60));

        if (dateStop < dateNow) {
            days = addZero(0);
            hours = addZero(0);
            minutes = addZero(0);
            seconds = addZero(0);
            clearInterval(updateClock);
        }

        return { timeRemaining, days, hours, minutes, seconds };
    };

    const updateClock = () => {
        let getTime = getTimeRemaning();
        for (let i = 0; i < 2; i++) {
            days[i].textContent = getTime.days;
            hours[i].textContent = getTime.hours;
            minutes[i].textContent = getTime.minutes;
            seconds[i].textContent = getTime.seconds;
        }
        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000);
        }
    };
    updateClock();
};

export default timer;