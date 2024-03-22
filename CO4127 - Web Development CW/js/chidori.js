let audio = new Audio("media/Chidori.mp3"); // (J. Tapalla, 2021)
function playChidori() {
    audio.play();
}
let chidori = document.getElementById("chidori");
if (chidori) {
    chidori.addEventListener("click", playChidori);
} else {
    console.error("Element with ID 'chidori' not found.");
}