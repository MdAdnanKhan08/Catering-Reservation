document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function () {
            alert('Logging out...');
            window.location.href = "index.html";  // Redirect to home page
        });
    }

    const uploadProductForm = document.getElementById('upload-product-form');
    
    uploadProductForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productDescription = document.getElementById('product-description').value;

        if (productName && productPrice && productDescription) {
            alert('Product uploaded successfully!');
            console.log({
                productName,
                productPrice,
                productDescription
            });
        } else {
            alert('Please fill in all the fields.');
        }
    });

    // Toggle navbar on smaller screens
    const navbarToggle = document.getElementById('navbar-toggle');
    const navLinks = document.getElementById('nav-links');

    navbarToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
