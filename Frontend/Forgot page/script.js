function resetPassword() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        alert('Password reset link has been sent to ' + email);
    } else {
        alert('Please enter a valid email address.');
    }
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email); // Removed the misplaced text
}
