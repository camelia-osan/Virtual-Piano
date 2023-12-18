# Virtual-Piano
HTML, CSS and JS web project


### Description
*Virtual-Piano* is a web project that displays a small piano with 12 keys (7 white keys and 5 black keys). Each piano key has a letter wrote on it which represents the keyboard key the user has to press in order to play that piano key (A, S, D, F, G, H and J for white keys and W, E, T, Y and U for black keys). The keys have different sounds (.mp3 audio files that are included in the *sounds* folder). No sound will play if another key, that is not on the piano, is pressed.


Currently, this project works on desktop only, but I'm looking forward to make the phone version aswel.


### Tools
For this project, I wrote by hand both the structure using *HTML5* and the design using *CSS3*. I used vanilla JavaScript to ensure the functionality.

- HTML
  
The whole content is divided in two containers - one that contains the white keys and one that contains the black keys. The piano keys are *kbd*s tags.

The audio files are .mp3 files that are named after each letter on the piano.

- CSS
  
Elements were styled using *Flexbox*. I used relative measurement units for better screen compatibility and different classes for some black keys in order to position them on the piano body.


The screen compatibility is covered by the media queries.

- JavaScript

First, I created an audio object that was used to search the right audio file and then play it. Then, I checked which keyboard key was pressed with *addEventListener* and played the correct sound for it. It works for both small and caps lock letters.
