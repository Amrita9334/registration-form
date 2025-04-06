document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;
    
    // Clear previous error messages
    clearErrors();
    
    // Validate first name
    const fname = document.getElementById('fname').value;
    if (fname === "") {
        showError('fnameError', "First Name is required");
        valid = false;
    }
    
    // Validate last name
    const lname = document.getElementById('lname').value;
    if (lname === "") {
        showError('lnameError', "Last Name is required");
        valid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        showError('emailError', "Email is required");
        valid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', "Invalid email format");
        valid = false;
    }
    
    // Validate password
    const password = document.getElementById('password').value;
    if (password === "") {
        showError('passwordError', "Password is required");
        valid = false;
    }
    
    // Validate confirm password
    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword === "") {
        showError('confirmPasswordError', "Confirm Password is required");
        valid = false;
    } else if (confirmPassword !== password) {
        showError('confirmPasswordError', "Passwords do not match");
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        // Form can be submitted or additional processing here
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(error => {
        error.textContent = '';
        error.style.display = 'none';
    });
}