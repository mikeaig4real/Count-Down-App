const futureDate = document.querySelector('h3');
let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let mins = document.querySelector('.mins');
let secs = document.querySelector('.secs');

class UI {
    timeLeft(time) {
        let timeLeft = new Date(time) - new Date;
        return timeLeft;
    }

    getDate(date) {
        let days = date / (1000 * 60 * 60 * 24);
        let hours = days % 1 * 24;
        let mins = hours % 1 * 60;
        let secs = mins % 1 * 60;
        return [days, hours, mins, secs].map(time => ('' + Math.floor(time)).padStart(2,'0'));
    }

    setDate(arr) {
        days.innerText = arr[0];
        hours.innerText = arr[1];
        mins.innerText = arr[2];
        secs.innerText = arr[3];
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI;
    setInterval(() => {
        console.log(ui.setDate(ui.getDate(ui.timeLeft(futureDate.innerText))))
    },1000)
})


