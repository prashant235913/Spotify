// console.log("Welcome to Spotify");

// // Initialize variables
// let songIndex = 0;
// let audioelement = new Audio(); // Start with no song
// let masterplay = document.getElementById('masterplay');
// let mybottom = document.getElementById('mybottom');
// let gif = document.getElementById('gif');

// // Array of songs with correct file paths
// let songs = [
//     { songname: '2002', filepath: '2002.mp3' },
//     { songname: 'Love', filepath: 'Love.mp3' },
//     { songname: 'Birthday', filepath: 'Birthday.mp3' },
//     { songname: 'Friends', filepath: 'Friends.mp3' }
// ];

// // Function to play the selected song
// function playSong(index) {
//     // If a song is already playing, pause it
//     if (!audioelement.paused && audioelement.src) {
//         audioelement.pause();
//     }

//     // Update songIndex and change audioelement source
//     songIndex = index;
//     audioelement.src = songs[songIndex].filepath;

//     // Play the new song
//     audioelement.play();

//     // Update UI
//     masterplay.classList.remove('fa-circle-play');
//     masterplay.classList.add('fa-circle-pause');
//     gif.style.opacity = 1;
// }

// // Event listeners for song buttons
// document.getElementById('b1').addEventListener('click', () => playSong(0)); // Play song 1
// document.getElementById('b2').addEventListener('click', () => playSong(1)); // Play song 2
// document.getElementById('b3').addEventListener('click', () => playSong(2)); // Play song 3
// document.getElementById('b4').addEventListener('click', () => playSong(3)); // Play song 4

// // Play/Pause functionality for the masterplay button
// masterplay.addEventListener('click', () => {
//     if (audioelement.paused || audioelement.currentTime <= 0) {
//         audioelement.play();
//         masterplay.classList.remove('fa-circle-play');
//         masterplay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;
//     } else {
//         audioelement.pause();
//         masterplay.classList.remove('fa-circle-pause');
//         masterplay.classList.add('fa-circle-play');
//         gif.style.opacity = 0;
//     }
// });

// // Progress bar update
// audioelement.addEventListener('timeupdate', () => {
//     let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
//     mybottom.value = progress;
// });

// // Seek functionality for the progress bar
// mybottom.addEventListener('change', () => {
//     // audioelement.currentTime = (mybottom.value * audioelement.duration) / 100;
//     const newTime = (mybottom.value * audioelement.duration) / 100;
//     audioelement.currentTime = newTime;
// });

console.log("Spotify Clone Loaded");

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progress-bar');
let gif = document.getElementById('gif');
let currentSong = document.getElementById('currentSong');

let songs = [
    { songname: '2002', filepath: '2002.mp3' },
    { songname: 'Birthday', filepath: 'Birthday.mp3' },
    { songname: 'Friends', filepath: 'Friends.mp3' },
    { songname: 'Alarm', filepath: 'Alarm.mp3' }
];

let audioElement = new Audio(songs[songIndex].filepath);

// Play/Pause Master Button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.classList.remove('hidden');
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.classList.add('hidden');
    }
});

// Forward button functionality (10 seconds forwafard)
document.getElementById('forward').addEventListener('click', () => {
    if (audioElement.currentTime + 10 < audioElement.duration) {
        audioElement.currentTime += 10; // Skip forward 10 seconds
    } else {
        audioElement.currentTime = audioElement.duration; // Jump to the end if less than 10 seconds remaining
    }
});

// Backward button functionality (10 seconds backward)
document.getElementById('backward').addEventListener('click', () => {
    if (audioElement.currentTime - 10 > 0) {
        audioElement.currentTime -= 10; // Go backward 10 seconds
    } else {
        audioElement.currentTime = 0; // Jump to the start if less than 10 seconds from the beginning
    }
});

// Update Progress Bar
audioElement.addEventListener('timeupdate', () => {
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.value = progress;
});

// Seek the Song
progressBar.addEventListener('change', () => {
    audioElement.currentTime = (progressBar.value / 100) * audioElement.duration;
});

// Play Specific Song
function playSong(index) {
    audioElement.src = songs[index].filepath;
    currentSong.textContent = songs[index].songname;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.classList.remove('hidden');
}

// Song Buttons
document.getElementById('play1').addEventListener('click', () => playSong(0));
document.getElementById('play2').addEventListener('click', () => playSong(1));
document.getElementById('play3').addEventListener('click', () => playSong(2));
document.getElementById('play4').addEventListener('click', () => playSong(3));
