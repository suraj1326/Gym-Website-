// Function to toggle password visibility
function togglePasswordVisibility() {
    var password1 = document.getElementById("password1");
    var password2 = document.getElementById("password2");

    if (password1.type === "password") {
        password1.type = "text";
        password2.type = "text";
    } else {
        password1.type = "password";
        password2.type = "password";
    }
}

// Function to validate the form
function validateForm() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var errorMessage = document.querySelector(".error-message");

    // Reset error message
    errorMessage.innerText = "";

    // Check if fullname is empty or less than 6 characters
    if (fullname.trim().length <= 5) {
        errorMessage.innerText = "Full name must be more than 5 characters.";
        return false;
    }

    // Check if email is empty or invalid format
    if (email === "" || !validateEmail(email)) {
        errorMessage.innerText = "Please enter a valid email.";
        return false;
    }

    // Check if password1 is empty or less than 8 characters
    if (password1 === "" || password1.length < 8) {
        errorMessage.innerText = "Password must be at least 8 characters.";
        return false;
    }

    // Check if passwords match
    if (password1 !== password2) {
        errorMessage.innerText = "Passwords do not match.";
        return false;
    }

    // If no errors and passwords match, redirect to login.html
    window.location.href = 'login.html';
}

// Function to validate email format
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
