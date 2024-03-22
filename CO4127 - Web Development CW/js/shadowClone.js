let audio = new Audio("media/Shadow_Clone.mp3"); //(Kayah, 2018)
function playShadow_Clone() {
    audio.play();
}
let shadowclone = document.getElementById("shadowclone");
if (shadowclone) {
    shadowclone.addEventListener("click", playShadow_Clone);
} else {
    console.error("Element with ID 'shadowclone' not found.");
}