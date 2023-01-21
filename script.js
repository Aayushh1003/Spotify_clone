console.log("Welcome to Spotify");

// initialize the variables
let songIndex = 0;
// let songItemPlayInd = 0;
let audio_ele = new Audio('songs/3.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterPlaySong = document.getElementById('masterPlaySong');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));


let music = [
    { songName: "Mirrors", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "hum", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "4am", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "higher", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Mirrors", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Mirrors", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Mirrors", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Mirrors", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Mirrors", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Mirrors", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];

songitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = music[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = music[i].songName;
})

// audio_ele.play();

// handel play/pause
// masterPlay.addEventListener('click' , function(){
//     if(audio_ele.paused || audio_ele.currentTime<=0){
//         audio_ele.play();
//     }
//     console.log("clicked");
// })

masterPlay.addEventListener('click', () => {
    if (audio_ele.paused || audio_ele.currentTime <= 0) {
        audio_ele.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
            // element.getElementsByTagName('songItemPlay')[0].src = music[i].coverPath;
            document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-play-circle');
            document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-pause-circle');
    
        gif.style.opacity = 1;
    }

    else {
        audio_ele.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-pause-circle');
        document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listen to events
audio_ele.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audio_ele.currentTime / audio_ele.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audio_ele.currentTime = (myprogressbar.value * audio_ele.duration) / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {


        element.addEventListener('click', (e) => {

            if(audio_ele.paused || audio_ele.currentTime<=0){
                console.log(e.target);
                makeAllPlays();
                songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                audio_ele.src = `songs/${songIndex + 1}.mp3`;
                masterPlaySong.innerText = music[songIndex].songName;
                audio_ele.currentTime = 0;
                audio_ele.play();
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
            }
            
            else{

                audio_ele.pause();
                makeAllPlays();
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                // audio_ele.src = `songs/${songIndex + 2}.mp3`;
                // audio_ele.currentTime = 0;
                // audio_ele.play();
                // audio_ele.play();

                // console.log(e.target);
                // makeAllPlays();
                // songIndex = parseInt(e.target.id);
                // e.target.classList.remove('fa-play-circle');
                // e.target.classList.add('fa-pause-circle');
                // audio_ele.src = `songs/${songIndex + 1}.mp3`;
                // masterPlaySong.innerText = music[songIndex].songName;
                // audio_ele.currentTime = 0;
                // audio_ele.play();
                // masterPlay.classList.remove('fa-play-circle');
                // masterPlay.classList.add('fa-pause-circle');

            }
        })
    



    // else{
    //     myAudioId.play();
    //     masterPlay.classList.remove('fa-play-circle');
    //     masterPlay.classList.add('fa-pause-circle');
    // }


})

document.getElementById('next').addEventListener('click', () => {

    if (songIndex >= 9) {
        songIndex = 0;
    }

    else {
        songIndex += 1;
    }

    audio_ele.src = `songs/${songIndex + 1}.mp3`;
    masterPlaySong.innerText = music[songIndex].songName;
    audio_ele.currentTime = 0;
    audio_ele.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-play-circle');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-pause-circle');
    document.getElementsByClassName('songItemPlay')[songIndex-1].classList.remove('fa-pause-circle');
    document.getElementsByClassName('songItemPlay')[songIndex-1].classList.add('fa-play-circle');
    // songItemPlay.classList.remove('fa-pause-circle');
    // songItemPlay.classList.add('fa-play-circle');


})
document.getElementById('previous').addEventListener('click', () => {

    if (songIndex <= 0) {
        songIndex = 0;
    }

    else {
        songIndex -= 1;
    }

    audio_ele.src = `songs/${songIndex + 1}.mp3`;
    masterPlaySong.innerText = music[songIndex].songName;
    audio_ele.currentTime = 0;
    audio_ele.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-play-circle');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-pause-circle');
    document.getElementsByClassName('songItemPlay')[songIndex-1].classList.remove('fa-pause-circle');
    document.getElementsByClassName('songItemPlay')[songIndex-1].classList.add('fa-play-circle');
    
})



