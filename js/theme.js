// Script para gerenciar o modo noturno
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeButtons = document.querySelectorAll('.theme-toggle-btn');

    if (themeButtons.length === 0) {
        console.error('Botões de tema não encontrados!');
        return;
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateButtonIcons(true);
    }

    themeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            body.classList.toggle('dark-mode');

            const isDarkMode = body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            updateButtonIcons(isDarkMode);
        });
    });

    function updateButtonIcons(isDarkMode) {
        themeButtons.forEach(function(button) {
            const icon = button.querySelector('i');
            if (icon) {
                if (isDarkMode) {
                    icon.className = 'fas fa-sun';
                    button.title = 'Modo claro';
                } else {
                    icon.className = 'fas fa-moon';
                    button.title = 'Modo noturno';
                }
            }
        });
    }
});
