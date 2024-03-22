let audio = new Audio("media/Rasengan.mp3"); // (G. Escobedo, 2023)
function playRasengan() {
    audio.play();
}
let rasengan = document.getElementById("rasengan");
if (rasengan) {
    rasengan.addEventListener("click", playRasengan);
} else {
    console.error("Element with ID 'rasengan' not found.");
}