const handSecond = document.querySelector('.hand-seconds');
const handMinut = document.querySelector('.hand-minutes');
const handHours = document.querySelector('.hand-hours');

const showTime = document.querySelector('.showTime');

function clock(){
    const now = new Date();

    const timeSeconds = now.getSeconds();
    const rotateSeconds = ((timeSeconds / 60)*360 + 90);
    handSecond.style.transform = `rotate(${rotateSeconds}deg)`;

    const timeMinutes = now.getMinutes();
    const rotateMinutes = ((timeMinutes / 60)*360 + 90);
    handMinut.style.transform = `rotate(${rotateMinutes}deg)`;

    let timeHours = now.getHours();
    const rotateHours = ((timeHours/ 12)*360+90);
    handHours.style.transform = `rotate(${rotateHours}deg)`;

    if(timeHours > 12){
        timeHours = timeHours - 12;
    }

    showTime.innerHTML = `${timeHours} : ${timeMinutes} : ${timeSeconds}`;
}

setInterval(clock, 1000);