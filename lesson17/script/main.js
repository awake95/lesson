window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = ((dateStop - dateNow) / 1000),
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        };

        const timeEdit = (timeElement) => {
            if (timeElement < 10) {
                return '0' + timeElement;
            } else {
                return timeElement;
            }
        };

        let timerId;
        const updateClock = () => {

            let timer = getTimeRemaining();

            timerHours.textContent = timeEdit(timer.hours);
            timerMinutes.textContent = timeEdit(timer.minutes);
            timerSeconds.textContent = timeEdit(timer.seconds);

            if (timer.timeRemaining <= 0) {
                clearInterval(timerId);
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";  
                timerSeconds.textContent = "00";
            }
            
        }

        timerId = setInterval(updateClock, 1000);
        console.log(timerId);
        
        updateClock();

    }


    countTimer('26 february 2020');
})
