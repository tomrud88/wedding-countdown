
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const Wedding = '4 September 2021'

const countDown=()=>{

    const weddingDate = new Date(Wedding)
    const currentDate = new Date()

    const totalSeconds = (weddingDate - currentDate)/1000;

    const days = setTime(Math.floor(totalSeconds/3600/24))
    const hours = setTime(Math.floor(totalSeconds/3600)%24)
    const minutes = setTime(Math.floor(totalSeconds/60)%60)
    const seconds = setTime(Math.floor(totalSeconds)%60)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    
    function setTime(time){
        return time<10 ? (`0${time}`) : time;
    }
    

    console.log(days)
}

countDown()

setInterval(countDown,1000)