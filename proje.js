console.log("welcom to Headsphn");
//initialized the variable
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"chandSifarish",filePath:"songs/1.mp3",coverPath:"cover/cover1.jpg"},
    {songName:"rab ne bna di jodi",filePath:"songs/2.mp3",coverPath:"cover/cover2.jpg"},
    {songName:"thha",filePath:"songs/3.mp3",coverPath:"cover/cover3.jpg"},
    {songName:"MaanMeriJaan",filePath:"songs/4.mp3",coverPath:"cover/cover4.jpg"},
    {songName:"parish_trip",filePath:"songs/5.mp3",coverPath:"cover/cover5.jpg"},
    {songName:"rubicon",filePath:"songs/6.mp3",coverPath:"cover/cover6.jpg"},
    {songName:"salam-e-dil-ishq",filePath:"songs/1.mp3",coverPath:"cover/cover4.jpg"},
    {songName:"salam-e-jiggar-ishq",filePath:"songs/2.mp3",coverPath:"cover/cover3.jpg"},
    {songName:"salam-e-mohabat-ishq",filePath:"songs/3.mp3",coverPath:"cover/cover2.jpg"},
    {songName:"salam-e-pyaar-ishq",filePath:"songs/4.mp3",coverPath:"cover/cover1.jpg"},
]


songItem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].scr=songs[i].coverPath;
    element.getElementsByTagName("span")[0].innerText=songs[i].songName;
});
//audioElement.play();
//handle play/pause button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
    })

//listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration*100));
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
 audioElement.currentTime=progressbar.value*audioElement.duration/100;
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    
}
const makeAllStop=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
    })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');})
        
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
        audioElement.src= `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
        audioElement.src= `songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})