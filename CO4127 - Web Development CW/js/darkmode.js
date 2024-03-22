var checkbox = document.getElementById("darkmode-toggle");

checkbox.addEventListener('change', function () {
    document.body.classList.toggle("dark-theme");
});