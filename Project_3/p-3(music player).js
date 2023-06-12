let audioTag = document.getElementsByClassName("audio_Tag")[0];
let showSongBox = document.getElementsByClassName("show_Music_Box")[0];
let setTime = document.getElementsByClassName("time_set")[0];
let lineForUseInMusic = document.getElementsByClassName("time_line_Inner")[0];

let songs=[
    {name:"Music/Coldplay - Paradise (Official Video).mp3",                   title:"Coldplay - Paradise (Official Video)"},
    {name:"Music/French Montana - Unforgettable ft. Swae Lee.mp3",            title:"French Montana - Unforgettable ft. Swae Lee"},
    {name:"Music/MAGIC! - Rude (Official Video).mp3",                         title:"MAGIC! - Rude (Official Video)"},
    {name:"Music/OMI - Cheerleader (Felix Jaehn Remix) (Official Video) [Ultra Records].mp3",       title:"OMI - Cheerleader (Felix Jaehn Remix) (Official Video) "},
    {name:"Music/Post Malone, Swae Lee - Sunflower (Spider-Man_ Into the Spider-Verse).mp3",        title:"Post Malone, Swae Lee - Sunflower"}
]
for(let i=0; i<songs.length; i++){
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("innerDiv");
    innerDiv.appendChild(document.createTextNode((i+1).toString()+". "+songs[i].title));
    showSongBox.appendChild(innerDiv);

    innerDiv.addEventListener("click",()=>{
        audioTag.src=songs[i].name;
        audioTag.play();
        checkingMusic =i;
        checkingMusicTF=true;
        runningMusic();
    })
}
let timeForUseDuration;
let duration;
audioTag.addEventListener("loadeddata",()=>{

    duration = Math.floor(audioTag.duration);
     timeForUseDuration =timeChangeIntoUse(duration);
});
audioTag.addEventListener("timeupdate",()=>{

    let currentTime = Math.floor(audioTag.currentTime);
    let timeForUseCurrentTime =timeChangeIntoUse(currentTime);

    setTime.innerHTML = timeForUseCurrentTime+"/"+timeForUseDuration;

    let timeLineForMusic = (400/duration)*currentTime;
    lineForUseInMusic.style.width =timeLineForMusic+"px";

})
let timeChangeIntoUse = (useTime)=>{
    let minuteForMusic = Math.floor(useTime/60);
    let secondForMusic = useTime%60;

    let minuteForMusicText =minuteForMusic<10? "0"+minuteForMusic.toString() : minuteForMusic;
    let secondForMusicText =secondForMusic<10? "0"+secondForMusic.toString() : secondForMusic;

    return minuteForMusicText+":"+secondForMusicText;
}

//button section
let previousBtn = document.getElementsByClassName("previous")[0];
let playBtnForMusic = document.getElementsByClassName("playForMusic")[0];
let pauseBtnForMusic = document.getElementsByClassName("pauseForMusic")[0];
let nextBtn = document.getElementsByClassName("next")[0];

let checkingMusic =0;
let checkingMusicTF=false;
previousBtn.addEventListener("click",()=>{

    if(checkingMusic ===0){
        return;
    }
    checkingMusic -=1;
    audioTag.src=songs[checkingMusic].name;
    audioTag.play();
    checkingMusicTF =true;
    runningMusic();
})
playBtnForMusic.addEventListener("click",()=>{
    if(audioTag.currentTime ===0){
        audioTag.src=songs[checkingMusic].name;
        audioTag.play();
        checkingMusicTF=true;
        runningMusic();
    }else{
        audioTag.play();
        checkingMusicTF=true;
        runningMusic(); 
    }

})
pauseBtnForMusic.addEventListener("click",()=>{
    audioTag.pause();
    checkingMusicTF=false;
    runningMusic();
})
nextBtn.addEventListener("click",()=>{

    if(checkingMusic ===4){
        return;
    }
    checkingMusic +=1;
    audioTag.src=songs[checkingMusic].name;
    audioTag.play();
    checkingMusicTF=true;
    runningMusic();
})
let runningMusic =()=>{

    if(checkingMusicTF){

        playBtnForMusic.style.display ="none";
        pauseBtnForMusic.style.display ="inline-block";
    }else{

        playBtnForMusic.style.display ="inline-block";
        pauseBtnForMusic.style.display ="none";
    }
}