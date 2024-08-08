document.getElementById('waitlist-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('email-input');
    const email = emailInput.value;

    if (validateEmail(email)) {
        // Construct the form URL with the email input
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfYhZJ8SuLnB_lQG_eN6TmLH1dEAUXsVDM-ezPgh_1IqzYdxw/formResponse";
        const formData = new FormData();
        formData.append("entry.1169098805", email); // Replace entry.1169098805 with the actual entry ID

        fetch(formUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
        })
        .then(() => {
            alert('Thank you for signing up!');
            emailInput.value = ''; // Clear the input field
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
