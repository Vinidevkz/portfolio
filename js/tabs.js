// Script para gerenciar as abas de conteúdo
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const menuToggle = document.querySelector('.menu-toggle');
    const topNav = document.querySelector('.top-nav');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-links a');

    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');

            if (window.innerWidth <= 900 && topNav) {
                topNav.classList.remove('mobile-menu-open');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });

    if (menuToggle && topNav) {
        menuToggle.addEventListener('click', function() {
            const isOpen = topNav.classList.toggle('mobile-menu-open');
            this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            this.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 900 && topNav) {
                topNav.classList.remove('mobile-menu-open');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
});
