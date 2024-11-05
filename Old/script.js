function switchTab(tabIndex) {
    // Remove active class from all tabs and content
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    tabs[tabIndex].classList.add('active');
    contents[tabIndex].classList.add('active');
}