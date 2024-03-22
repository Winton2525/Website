let audio = new Audio("media/Amaterasu.mp3"); // (A. Frdaus. 2020)
function playAmaterasu() {
    audio.play();
}
let amaterasu = document.getElementById("amaterasu");
if (amaterasu) {
    amaterasu.addEventListener("click", playAmaterasu);
} else {
    console.error("Element with ID 'amaterasu' not found.");
}