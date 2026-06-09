// Script para gerenciar o modo noturno
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (!themeToggle) {
        console.error('Botão de tema não encontrado!');
        return;
    }
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateButtonIcon(true);
    }
    
    themeToggle.addEventListener('click', function() {
        console.log('Botão clicado!');
        body.classList.toggle('dark-mode');
        
        const isDarkMode = body.classList.contains('dark-mode');
        console.log('Modo noturno ativado:', isDarkMode);
        
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        updateButtonIcon(isDarkMode);
    });
    
    function updateButtonIcon(isDarkMode) {
        const icon = themeToggle.querySelector('i');
        if (isDarkMode) {
            icon.className = 'fas fa-sun';
            themeToggle.title = 'Modo claro';
        } else {
            icon.className = 'fas fa-moon';
            themeToggle.title = 'Modo noturno';
        }
    }
});
