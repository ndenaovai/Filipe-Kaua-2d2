// Funções comuns a todas as páginas
function checkAndUpdateUserHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loginBtn = document.getElementById('login-btn');

    console.log('checkAndUpdateUserHeader executado - Usuário:', user);

    if (user && loginBtn) {
        // EM TODAS AS PÁGINAS: Mostra apenas o primeiro nome
        const firstName = user.name.split(' ')[0];
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${firstName}`;
        loginBtn.href = 'perfil.html';

        console.log('Usuário logado - Nome mostrado:', firstName);

        // Adicionar opção de logout se não existir
        addLogoutButton();
    } else if (loginBtn) {
        // Resetar para login se não estiver logado
        loginBtn.innerHTML = '<i class="fas fa-user"></i> Entrar';
        loginBtn.href = 'login.html';
        console.log('Usuário não logado');

        // Remover botão de logout se existir
        removeLogoutButton();
    }
}

function addLogoutButton() {
    if (!document.querySelector('.logout-btn')) {
        const logoutBtn = document.createElement('a');
        logoutBtn.href = '#';
        logoutBtn.className = 'logout-btn';
        logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> Sair';
        logoutBtn.style.cssText = `
            margin-left: 10px;
            color: #dc3545;
            font-size: 14px;
            text-decoration: none;
            padding: 5px 10px;
            border-radius: 4px;
            background: #f8f9fa;
            transition: all 0.3s ease;
        `;

        logoutBtn.onmouseover = function () {
            this.style.background = '#dc3545';
            this.style.color = 'white';
        };

        logoutBtn.onmouseout = function () {
            this.style.background = '#f8f9fa';
            this.style.color = '#dc3545';
        };

        logoutBtn.onclick = function (e) {
            e.preventDefault();
            if (confirm('Tem certeza que deseja sair?')) {
                localStorage.removeItem('user');
                window.location.href = 'index.html';
            }
        };

        const loginBtn = document.getElementById('login-btn');
        if (loginBtn && loginBtn.parentNode) {
            loginBtn.parentNode.appendChild(logoutBtn);
        }
    }
}

function removeLogoutButton() {
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.remove();
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + (parseInt(item.quantity) || 0), 0);
    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = cartCount;
    });
}

function setupSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    if (searchInput && searchButton) {
        const performSearch = () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                window.location.href = `produtos.html?search=${encodeURIComponent(searchTerm)}`;
            }
        };

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Inicialização COM FORÇA - executa depois que a página carrega completamente
function initializeCommon() {
    console.log('initializeCommon executado em:', window.location.pathname);
    checkAndUpdateUserHeader();
    updateCartCount();
    setupSearch();
}

// Executa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeCommon);

// Executa também quando a página terminar de carregar completamente
window.addEventListener('load', initializeCommon);

// Executa um pouco depois, para garantir que outros scripts tenham terminado
setTimeout(initializeCommon, 100);