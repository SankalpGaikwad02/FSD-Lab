function validateForm() {

    // Fetch values from input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;

    // Name Validation
    if (name === "") {
        alert("Name must not be empty");
        return false;
    }

    // Email Validation
    if (email === "") {
        alert("Email must not be empty");
        return false;
    }

    // Basic Email Format Check
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter valid email address");
        return false;
    }

    // Password Validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Mobile Validation
    if (isNaN(mobile) || mobile.length !== 10) {
        alert("Enter valid 10-digit mobile number");
        return false;
    }

    // If all validations pass
    alert("Form submitted successfully!");
    return true;
}