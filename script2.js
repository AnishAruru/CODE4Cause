document.getElementById('meetingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Form validation
    const email = document.getElementById('email').value;
    const business = document.getElementById('business').value;
    const time = document.getElementById('time').value;

    if (!email || !business || !time) {
        alert('Please fill in all fields.');
        return;
    }

    // Create the form data
    const formData = new FormData(this);

    // Send the form data using fetch API
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Meeting booked successfully!');
            this.reset();
        } else {
            alert('Failed to book the meeting. Please try again.');
        }
    }).catch(error => {
        console.error('Error:', error);
        alert('Failed to book the meeting. Please try again.');
    });
});
