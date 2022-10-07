console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3')
let masterplay=document.getElementById('masterplay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songitem=Array.from(document.getElementsByClassName('songItem'))
let masterSongName=document.getElementById('masterSongName')


let songs=[
    {songName:"let her go",filePath: "song/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"love yourself",filePath: "song/2.mp3",coverPath: "covers/2.jpg"},
    {songName:"barking",filePath: "song/3.mp3",coverPath: "covers/3.jpg"},
    {songName:"one dance",filePath: "song/4.mp3",coverPath: "covers/4.jpg"},
    {songName:"wiggle",filePath: "song/5.mp3",coverPath: "covers/5.jpg"},
    {songName:"sorry",filePath: "song/6.mp3",coverPath: "covers/6.jpg"},
    {songName:"tu aake dekhle",filePath: "song/7.mp3",coverPath: "covers/7.jpg"},
]

songitem.forEach((element,i) => {
    // console.log(element,i);
    // element.getElementsByTagName('img')[0].src= songs[i].coverPath
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName
});



masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    gif.style.opacity=1;

    }
    else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
    gif.style.opacity=0;


    }
})
audioElement.addEventListener('timeupdate',()=>{
   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const allPlays=()=>{
   
    Array.from(document.getElementsByClassName('songItemPLay')).forEach((element)=>{
       
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')


    })



}

Array.from(document.getElementsByClassName('songItemPLay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       
        allPlays();
        songIndex=parseInt(e.target.id)
        // console.log(e.target);
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src=`songs/${songIndex+1}.mp3`
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity=1;
        audioElement.currentTime=0;
        
         masterplay.classList.remove('fa-circle-play')
         masterplay.classList.add('fa-circle-pause')


    })
})

    document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity=1;
    audioElement.currentTime=0;
    
     masterplay.classList.remove('fa-circle-play')
     masterplay.classList.add('fa-circle-pause')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    gif.style.opacity=1;
    audioElement.currentTime=0;
    
     masterplay.classList.remove('fa-circle-play')
     masterplay.classList.add('fa-circle-pause')
})




