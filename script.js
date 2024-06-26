function openContact() {
    var isAdmin = confirm('Are you an admin?'); // Prompt for admin confirmation

    if (isAdmin) {
        var adminNumber = prompt('Enter admin number:'); // Prompt for admin number

        // Check if the admin number is correct
        if (adminNumber === '159') {
            var phoneNumber = 'tel:+917042480990';
            var emailAddress = 'mailto:viratvansh9@gmail.com';
            var contactName = 'VANSH in 3D';

            // Open phone number link
            window.open(phoneNumber, '_blank');

            // Open email link
            window.open(emailAddress, '_blank');
        } else {
            alert('Access denied. Only authorized admins allowed.'); // Invalid admin number
        }
    } else {
        alert('Access denied. Only authorized admins allowed.'); // User is not an admin
    }
}
// Example JavaScript code
// You can add more functionality here if required
