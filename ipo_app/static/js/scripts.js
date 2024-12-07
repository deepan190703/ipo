document.addEventListener('DOMContentLoaded', function() {
    // Add any custom JavaScript code here

    // Example: Toggle password visibility
    const passwordToggle = document.querySelector('#password-toggle');
    const passwordField = document.querySelector('#password');

    if (passwordToggle && passwordField) {
        passwordToggle.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});
