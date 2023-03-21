let songIndex=0;
let audioelement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let mybar=document.getElementById('mybar');
let gif=document.getElementById('gif');
let mastername=document.getElementById('mastername');
let songs = [
   {songName:"Dil nu",filePath:"1.mp3"},
   {songName:"Ajab si",filePath:"2.mp3"},
   {songName:"Apna bana la",filePath:"3.mp3"},
   {songName:"Perfect",filePath:"4.mp3"},
   {songName:"jaan nisaar",filePath:"5.mp3"},
]
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
});
audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    mybar.value=progress;
})
mybar.addEventListener('change',()=>
{
    audioelement.currentTime=(mybar.value*audioelement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src=`${songIndex+1}.mp3`;
        mastername.innerHTML=songs[songIndex].songName;
        gif.style.opacity=1;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })

})
document.getElementById('next').addEventListener('click',()=>
{
    if(songIndex>=5)
    {
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioelement.src=`${songIndex+1}.mp3`;
    mastername.innerHTML=songs[songIndex].songName;
    gif.style.opacity=1;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>
{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioelement.src=`${songIndex+1}.mp3`;
    mastername.innerHTML=songs[songIndex].songName;
    gif.style.opacity=1;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

})