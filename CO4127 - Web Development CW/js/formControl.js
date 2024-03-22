function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate a login process (Current username = "Harry" / password = "pass")
    if (username === "Harry" && password === "pass") {
        // Successful login
        // Call the showNotification function to display a welcome message in myForm
        showNotification("Welcome back, " + username + "!");
    } else {
        // Failed login
        // Display an error message as a popup!
        alert("Invalid username or password. Please try again.");
    }
    return false; // Prevent the form from submitting and refreshing the page
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.add("show");

    setTimeout(function() {
        notification.classList.remove("show");
    }, 2000); // Hide the notification after 2 seconds
}