// This JavaScript code is not strictly necessary for the navigation bar to work.
// It's just an example of how you could add some interactivity to the navigation bar.

const navbarItems = document.querySelectorAll('.navbar-item');

navbarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Do something when a navbar item is clicked, e.g., navigate to a different page.
        console.log('Clicked on:', item.textContent);
    });
});