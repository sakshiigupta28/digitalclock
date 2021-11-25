function clock(){
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var ampm = document.getElementById("AM-PM");
    
  

    var time =  new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();


    if(a > 12){
        a = a-12;
    }
  
    if(a == 0){

    
    }

    a = (a < 10) ? "0" + a : a;
    b = (b < 10) ? "0" + b : b;
    c = (c < 10) ? "0" + c : c;


    hours.innerHTML = a;
    minutes.innerHTML = b;
    seconds.innerHTML = c;
    
   
}



setInterval (clock,1000);

function settime() {
     console.log("hekopohu");
    var set = document.getElementById("select-time").value;
    var hour = new Date().getHours;

    if(set == hour) {
        document.getElementById("right-bottom2").style.backgroundImage = "url(morning.png)";
        document.getElementById("right-bottom1").innerHTML="IT'S MORNING TIME";
    }
};

/*
party.addEventListener("click" , settime)

function settime(){
    //console.log("hekopohu");
    var set = document.getElementById("select-time").value;
    var Hour = new Date().getHours();

    if(set == Hour){
        document.getElementById("right-bottom2").style.backgroundImage = "url(morning.png)";
        document.getElementById('right-bottom1').innerHTML="LET'S HAVE LUNCH!!!";
    }
};
    */
