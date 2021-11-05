function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var am = document.getElementById("AM_PM");

    var time =  new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();


    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    
}

setInterval (clock,1000)

function settime(){

    var set = document.getElementById('select-time').value;
    var Hour = new Date().getHours();

    if(set == Hour){
        document.getElementById('right-bottom2').style.backgroundImage = "url(./../night.jpg)";
        document.getElementById('right-bottom2').style.innerHTML="LET'S HAVE LUNCH!!!";
    }
}