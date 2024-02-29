function displayTime() {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes(); 
    const sec = dateTime.getSeconds(); 
    const session = document.getElementById('session'); 

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    let hr = hrs; // Use a different variable to avoid modifying the original hours

    if (hrs > 12) {
        hr = hrs - 12;
    }

    document.getElementById('hours').innerHTML = (hr < 10) ? '0' + hr : hr;
    document.getElementById('minute').innerHTML = (min < 10) ? '0' + min : min;
    document.getElementById('second').innerHTML = (sec < 10) ? '0' + sec : sec;

}

setInterval(displayTime, 1000);
