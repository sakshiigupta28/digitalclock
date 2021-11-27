function clock(){
    
    var date = new Date(); 
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();

    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("AM-PM");
    var am = "AM"

   
    if(hh >= 12){
        hh = hh - 12;
        am = "PM";
     }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;

    

    hours.innerHTML = hh;
    minutes.innerHTML = mm;
    seconds.innerHTML = ss;
    ampm.innerHTML = am;


}



setInterval (clock,1000);

function settime() {
    var set = document.getElementById("select-time").value;
    var hour = new Date().getHours();

    if(Number(set) == hour) {
        document.getElementById("right-bottom2").style.backgroundImage = "url(wakeup1.jpg)";
        document.getElementById('right-bottom1').innerHTML="GOOD MORNING!!!!!";
    }

    

    {var set = document.getElementById("select-time1").value;
    var hour = new Date().getHours();

    if(Number(set) == hour) {
        document.getElementById("right-bottom2").style.backgroundImage = "url(morning.png)";
        document.getElementById('right-bottom1').innerHTML="LET'S HAVE LUNCH!!!";
    }
};


    {var set = document.getElementById("select-time2").value;
    var hour = new Date().getHours();

    if(Number(set) == hour) {
        document.getElementById("right-bottom2").style.backgroundImage = "url(night.jpg)";
        document.getElementById('right-bottom1').innerHTML="GOOD NIGHT!!!!";
    }
};
};



