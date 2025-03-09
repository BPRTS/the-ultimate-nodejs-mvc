document.addEventListener('DOMContentLoaded', () => {
    console.log('Main JavaScript file loaded.');

    // Example of client-side functionality
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});