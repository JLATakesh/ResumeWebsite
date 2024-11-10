document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-link.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const contentId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(contentId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});