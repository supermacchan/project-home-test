document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navLink');
  
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor link behavior
            const targetId = link.getAttribute('href'); // Get the target section ID
            // Scroll smoothly to the target section
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  });