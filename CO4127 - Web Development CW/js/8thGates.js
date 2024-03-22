let audio = new Audio("media/Eight_Inner_Gates.mp3"); // (Extram Llama sx, 2022)
function playEightGate() {
    audio.play();
}
let EightGate = document.getElementById("EightGate");
if (EightGate) {
    EightGate.addEventListener("click", playEightGate);
} else {
    console.error("Element with ID 'EightGate' not found.");
}