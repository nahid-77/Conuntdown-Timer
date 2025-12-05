const endDate = new Date("December 5, 2025 20:25:00").getTime();
const startDate = new Date().getTime();


let x = setInterval(function updateTimer(){

    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // Time calculations for days, hours, minutes and seconds
    // 1 day = 24 hours = 24 * 60 * 60 * 1000 milliseconds

    const days = Math.floor(distancePending / (24 *60 * 60 * 1000));
    const hours = Math.floor((distancePending % (24 *60 * 60 *1000))/ (60 *60 *1000));
    const minutes = Math.floor((distancePending % (60 *60*1000)) / (60 *1000));
    const seconds = Math.floor((distancePending % (60 *1000)) / 1000);

    // Populating the values in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Calculating Progress
    const totalDistance = endDate -startDate;
    const progressPercentage = (distanceCovered / totalDistance) * 100;

    // Updating the progress bar width
    document.getElementById("progress-bar").style.width = progressPercentage + "%";

    if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);

