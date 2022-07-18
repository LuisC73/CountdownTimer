const countdown = () =>{
    const endDate = new Date("Sep 31, 2022 00:00:00").getTime(),
        nowDate = new Date().getTime(),
        $days = document.getElementById('days'),
        $hours = document.getElementById('hours'),
        $minutes = document.getElementById('minutes'),
        $seconds = document.getElementById('seconds');

    let differenceTime = endDate - nowDate;
    
    const seconds = 1000,
        minutes = seconds * 60,
        hours = minutes * 60,
        days = hours * 24;

    let timeDays = Math.floor(differenceTime / days),
        timeHours = Math.floor((differenceTime % days) / hours),
        timeMinutes = Math.floor((differenceTime % hours) / minutes),
        timeSeconds = Math.floor((differenceTime % minutes) / seconds);    

    timeDays = (timeDays < 10) ? '0' + timeDays : timeDays;
    timeHours = (timeHours < 10) ? '0' + timeHours : timeHours;
    timeMinutes = (timeMinutes < 10) ? '0' + timeMinutes : timeMinutes;
    timeSeconds = (timeSeconds < 10) ? '0' + timeSeconds : timeSeconds;
    
    $days.innerText = timeDays;
    $hours.innerText = timeHours;
    $minutes.innerText = timeMinutes;
    $seconds.innerText = timeSeconds;
}

setInterval(countdown,1000)