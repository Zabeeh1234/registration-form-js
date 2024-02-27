document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.container form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const firstName = document.getElementById('First_name').value;
        const lastName = document.getElementById('Last_name').value;
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Password').value;

        if (validateForm(firstName, lastName, email, password)) {
            alert('Form submitted successfully!');
            // You can add code here to handle the form submission, e.g., sending data to a server
        }
    });

    function validateForm(firstName, lastName, email, password) {
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            alert('Please fill in all fields');
            return false;
        }

        // Add more custom validation logic if needed

        return true;
    }
});
