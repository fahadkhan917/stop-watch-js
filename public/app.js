


var min=0;
var sec=0;
var msec=0;
var headmin=document.getElementById("min");
var headsec=document.getElementById("sec");
var headmsec=document.getElementById("msec");
var interval;

function timer(){
msec++;
headmsec.innerHTML=msec;
if(msec>=60){
sec++;
headsec.innerHTML=sec;
msec=0;
}
else if(sec>=60){
min++;
sec=0;
headmin.innerHTML=min;

}



}

function strt(){
    interval=setInterval(timer,10);
   var st=document.getElementById("st").style.visibility="hidden";

}

function stop(){
clearInterval(interval);
    
}


function reset(){
    min=0;
    sec=0;
    msec=0;
    headmin.innerHTML=min;
    headsec.innerHTML=sec;
    headmsec.innerHTML=msec;
    stop();
    
    }
    