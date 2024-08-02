document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('numberInput');
    const maxDigits = 10; // Set the maximum number of digits

    input.addEventListener('input', () => {
        let value = input.value;
        
        // Remove any non-digit characters
        value = value.replace(/\D/g, '');

        // Limit the length of the input
        if (value.length > maxDigits) {
            value = value.slice(0, maxDigits);
        }

        // Update the input field value
        input.value = value;
    });
});
