window.onload = function () {
    const form = document.querySelector('.newsletter form');
    const emailInput = document.querySelector('#email');
    const messageDiv = document.querySelector('.message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop page reload

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            return;
        }

        messageDiv.innerHTML =
            `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;

        emailInput.value = ""; // Clear input field
    });
};
