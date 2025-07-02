document.addEventListener('DOMContentLoaded', () => {
    const questionPopup = document.getElementById('questionPopup');
    const closePopupBtn = document.getElementById('closePopup');
    const menuIcon = document.getElementById('menuIcon');
    const fullscreenMenu = document.getElementById('fullscreenMenu');
    const closeMenuBtn = document.getElementById('closeMenu');
    const menuLinks = document.querySelectorAll('.fullscreen-menu ul li a');

    // Show pop-up on page load
    // Using setTimeout to ensure the page renders first before showing popup,
    // and to simulate a slight delay if desired.
    setTimeout(() => {
        questionPopup.classList.add('active');
    }, 500); // Shows popup after 0.5 seconds

    // Close pop-up
    closePopupBtn.addEventListener('click', () => {
        questionPopup.classList.remove('active');
    });

    // Open fullscreen menu
    menuIcon.addEventListener('click', () => {
        fullscreenMenu.classList.add('active');
    });

    // Close fullscreen menu
    closeMenuBtn.addEventListener('click', () => {
        fullscreenMenu.classList.remove('active');
    });

    // Close menu when a link is clicked (for smooth scrolling)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            fullscreenMenu.classList.remove('active');
            // Optional: Smooth scroll to section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
