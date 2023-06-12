let playBtn = document.getElementsByClassName("play")[0];
let pauseBtn = document.getElementsByClassName("pause")[0];
let restartBtn = document.getElementsByClassName("restart")[0];
let mainTimeSet = document.getElementsByClassName("time_Set")[0];
let miniTimeSet = document.getElementsByClassName("time_Set_Mini")[0];

let hours =0;
let minutes =0;
let second =0;
let miliSec =0;
let timeRunning;

function timeRouteSystem (){
    miliSec +=1
    if(miliSec === 100){
        miliSec =0;
        second +=1;
        if(second === 60){
            second=0;
            minutes +=1;
            if(minutes === 60){
                minutes=0;
                hours+=1;
            }
        }

    }
    let hourText =hours <10 ?    "0"+hours.toString() : hours;
    let minuteText =minutes<10 ? "0"+minutes.toString() : minutes;
    let secondText =second <10 ? "0"+second.toString() : second;

    mainTimeSet.innerHTML =hourText+":"+minuteText+":"+secondText;
    miniTimeSet.innerHTML=miliSec;
    // console.log(hours,minutes,second,miliSec);

}




playBtn.addEventListener("click",()=>{
    clearInterval(timeRunning);
     timeRunning =setInterval(timeRouteSystem,7);
})

pauseBtn.addEventListener("click",()=>{

    clearInterval(timeRunning);
})
restartBtn.addEventListener("click",()=>{
    clearInterval(timeRunning);
     hours =0;
     minutes =0;
     second =0;
     miliSec =0;

    mainTimeSet.innerHTML="00:00:00";
    miniTimeSet.innerHTML="000";
})