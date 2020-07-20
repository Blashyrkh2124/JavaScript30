// Function: when called finds the div and audiofile associated with the specific key.
// It resets the audio to zero, in order for it to be able to play repetitavely, instead of waiting for it to finish.
// Then it plays the audio.
// Then it adds the class 'playing' to the selected div, in order for the CSS transition to initiate.
// The if function ends the function if no audio file for the pressed key is defined so that no faulty or blank console logs are created.
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return; // if no key is bound end function
  audio.currentTime = 0; // on keypress reset audio file
  audio.play();
  key.classList.add('playing');
};


// Function: when called it listens for the transform event.
// If the event is found it removes the class  'playing' from 'this'
// 'this' refers back to the addEventListener called.
// so this removes the class 'playing' from a div with the class key.
function removeTransition (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
};

// selects all with the class 'key'.
const keys = document.querySelectorAll('.key');
// toggles through all different divs found with  'key' and adds an event listener.
// when the tranition ends, initiates 'removeTransition' function.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Adds addEventListener to the window.
// When a key is pressed, function 'playSound' is initated.
window.addEventListener('keydown', playSound);
