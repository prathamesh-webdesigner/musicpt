console.log('Spotify clone');

// Initialize the Variables 
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    { songName: "Deva Shree Ganesha - Agneepath", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Dheeme Dheeme - Tony Kakkar", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Manali Trance - Yo Yo Honey Singh", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Raataan Lambiyan - Shershaah", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Mercy - Badshah", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Saiyaan Ji - Yo Yo Honey Singh", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Kanta Laga - Tony Kakkar", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Dil Sambhal ja jara - Jaher ", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Kata laga Uii Maaa - Neha Kakkar", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Abi Na jai chhod ke - Old Song  - Kishor kumar", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]
// For change songs name and image 
songItems.forEach((Element, i) => {
    console.log(songItems, i);
    Element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    Element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle Play pause Click 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Listen to Event 
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar(ProgressBAr) for running progressbar with audio

    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.remove('fa-pause-circle');
        Element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
    Element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        masterSongName.innerText= songs[songIndex].songName;
        gif.style.opacity = 1;
    });
})

// next previous button click and change the song 
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText= songs[songIndex].songName;
    gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText= songs[songIndex].songName;
    gif.style.opacity = 1;
})

