// Script para gerenciar as abas de conteúdo
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Ativar a primeira aba (Currículo) por padrão
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
    }
    
    // Adicionar evento de clique para cada botão
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remover classe 'active' de todos os botões e conteúdos
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Adicionar classe 'active' ao botão e conteúdo clicados
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});
