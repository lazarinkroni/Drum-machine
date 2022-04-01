function playSound(e) {
  // Selecting the Key Codes Audio
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Selecting the Key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Stop Function from runing
  audio.currentTime = 0;
  // Invoking the function Play Audio
  audio.play();
  // Adding a class that changes the style in css
  key.classList.add("playing");
}

// Creating a function that removes the trasition
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip it if it is not a transform
  this.classList.remove("playing"); // Remove the class css playing trasnition effect
}

const keys = document.querySelectorAll(".key"); // Selecting key
keys.forEach(key => key.addEventListener("transitionend", removeTransition)); // Listenig to key trasition that will be removed

// We listening for keydown
window.addEventListener("keydown", playSound);
