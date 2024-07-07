const generateButton = document.getElementById('generateButton');
const fartSound = document.getElementById('fartSound');
const pitchControl = document.getElementById('pitch');
const durationControl = document.getElementById('duration');

generateButton.addEventListener('click', () => {
    const pitchValue = pitchControl.value;
    const durationValue = durationControl.value;
    
    fartSound.pause();
    fartSound.currentTime = 0;
    fartSound.playbackRate = pitchValue;
    fartSound.play();
    
    setTimeout(() => {
        fartSound.pause();
    }, durationValue * 1000);
});
