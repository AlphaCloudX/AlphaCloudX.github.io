document.addEventListener("DOMContentLoaded", function () {
    // Get all the anchor links in the navigation bar
    const navLinks = document.querySelectorAll('.nav-bar-section a');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(e) {
        e.preventDefault();

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);

        // Find the target section
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});
