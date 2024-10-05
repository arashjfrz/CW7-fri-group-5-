
function updateTime(){

    let time = new Date();
    let Hour = time.getHours();
    let Minute = time.getMinutes();
    let Second = time.getSeconds();

    document.getElementById("hour-number").innerHTML = Hour;
    document.getElementById("minute-number").innerHTML = Minute;
    document.getElementById("second-number").innerHTML = Second;

    location.reload();
 };

 updateTime();
 setInterval(updateTime, 1000);
    
