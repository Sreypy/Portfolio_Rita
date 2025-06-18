document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation tabs
    const navTabs = document.querySelectorAll('.nav-tab');

    // Add click event listeners to navigation tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Get the tab data attribute
            const tabData = this.getAttribute('data-tab');

            // You can add navigation logic here
            console.log(`Navigating to: ${tabData}`);

            // Example: You could implement smooth scrolling to sections
            // or update the page content based on the selected tab
        });
    });

    // Add hover effects to resume button
    const resumeButton = document.querySelector('.resume-button');
    if (resumeButton) {
        resumeButton.addEventListener('click', function() {
            console.log('Resume button clicked');
            // Add your resume download or navigation logic here
        });
    }

    // Add smooth scrolling for better UX (optional)
    function smoothScrollTo(element) {
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Example: Add click handler for contact section navigation
    const contactTab = document.querySelector('[data-tab="contacts"]');
    const contactSection = document.querySelector('.contact-section');

    if (contactTab && contactSection) {
        contactTab.addEventListener('click', function() {
            setTimeout(() => {
                smoothScrollTo(contactSection);
            }, 100);
        });
    }
});
