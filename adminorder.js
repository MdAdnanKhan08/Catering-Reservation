// Get the stored order data from localStorage
const orderData = JSON.parse(localStorage.getItem('orderData'));

// Check if there's any order data to display
if (orderData) {
    // Create the HTML content to display the order details
    const orderDetails = `
        <p><strong>Name:</strong> ${orderData.name}</p>
        <p><strong>Phone:</strong> ${orderData.phone}</p>
        <p><strong>Email:</strong> ${orderData.email}</p>
        <p><strong>Event Name:</strong> ${orderData.eventName}</p>
        <p><strong>Event Date:</strong> ${orderData.eventDate}</p>
        <p><strong>Event Location:</strong> ${orderData.eventLocation}</p>
        <p><strong>Serving Time:</strong> ${orderData.servingTime}</p>
        <p><strong>Party Size:</strong> ${orderData.partySize}</p>
        <p><strong>Where:</strong> ${orderData.where}</p>
    `;

    // Display the order details inside the order-details div
    document.getElementById('order-details').innerHTML = orderDetails;
} else {
    document.getElementById('order-details').innerHTML = '<p>No order data found.</p>';
}
