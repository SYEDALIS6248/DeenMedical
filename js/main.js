document.addEventListener('DOMContentLoaded', () => {
    // Auto-collapse Navbar on Mobile After Link Click
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('mainNav');
    
    if (menuToggle) {
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (menuToggle.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(menuToggle) || new bootstrap.Collapse(menuToggle);
                    bsCollapse.hide();
                }
            });
        });
    }
});