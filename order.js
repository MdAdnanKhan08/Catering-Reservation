document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const eventName = document.getElementById('event-name').value;
    const eventDate = document.getElementById('event-date').value;
    const eventLocation = document.getElementById('event-location').value;
    const servingTime = document.getElementById('serving-time').value;
    const partySize = document.getElementById('party-size').value;
    const where = document.getElementById('where').value;

    // Check if all fields are filled
    if (name && phone && email && eventName && eventDate && eventLocation && servingTime && partySize && where) {
        // Save data to localStorage
        const orderData = {
            name, 
            phone, 
            email, 
            eventName, 
            eventDate, 
            eventLocation, 
            servingTime, 
            partySize, 
            where
        };
        localStorage.setItem('orderData', JSON.stringify(orderData));

        alert('Reservation submitted successfully!');

        // Redirect to adminorder.html to view the order
        window.location.href = "adminorder.html";
    } else {
        alert('Please fill out all required fields.');
    }
});
