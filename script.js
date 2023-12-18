let audio = new Audio();    // create an audio object

// Play the sound binded to each letter
// No sound will play if the user presses a letter that it's not on the piano
document.addEventListener('keydown', function (event) {
    // Bind sound to the white keys
    if (event.key === 'A' || event.key === 'a') {
        audio.src = 'sounds/A.mp3';
        audio.play();
    } else if (event.key === 'S' || event.key === 's') {
        audio.src = 'sounds/S.mp3';
        audio.play();
    } else if (event.key === 'D' || event.key === 'd') {
        audio.src = 'sounds/D.mp3';
        audio.play();
    } else if (event.key === 'F' || event.key === 'f') {
        audio.src = 'sounds/F.mp3';
        audio.play();
    } else if (event.key === 'G' || event.key === 'g') {
        audio.src = 'sounds/G.mp3';
        audio.play();
    } else if (event.key === 'H' || event.key === 'h') {
        audio.src = 'sounds/H.mp3';
        audio.play();
    } else if (event.key === 'J' || event.key === 'j') {
        audio.src = 'sounds/J.mp3';
        audio.play();
    } // white keys

    // Bind sound to the black keys
    else if (event.key === 'W' || event.key === 'w') {
        audio.src = 'sounds/W.mp3';
        audio.play();
    } else if (event.key === 'E' || event.key === 'e') {
        audio.src = 'sounds/E.mp3';
        audio.play();
    } else if (event.key === 'T' || event.key === 't') {
        audio.src = 'sounds/T.mp3';
        audio.play();
    } else if (event.key === 'Y' || event.key === 'y') {
        audio.src = 'sounds/Y.mp3';
        audio.play();
    } else if (event.key === 'U' || event.key === 'u') {
        audio.src = 'sounds/U.mp3';
        audio.play();
    } // black keys
});