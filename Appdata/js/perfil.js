// Gerenciamento do perfil do usuário
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    loadUserProfile();
    setupProfileTabs();
    updateCartCount();
    setupSearch();
    loadOrderHistory();
    loadWishlist();
});

// Verificar se usuário está logado
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return user;
}

// Carregar perfil do usuário
function loadUserProfile() {
    const user = checkAuth();
    if (!user) return;

    // Atualizar header
    const userNameElement = document.getElementById('user-name');
    if (userNameElement) userNameElement.textContent = user.name;
    
    // Atualizar perfil
    const profileUserName = document.getElementById('profile-user-name');
    const profileUserEmail = document.getElementById('profile-user-email');
    
    if (profileUserName) profileUserName.textContent = user.name;
    if (profileUserEmail) profileUserEmail.textContent = user.email;
    
    // Atualizar dados pessoais
    updatePersonalInfo(user);
}

// Atualizar informações pessoais
function updatePersonalInfo(user) {
    const elements = {
        'info-name': user.name,
        'info-email': user.email,
        'info-phone': user.phone || 'Não informado',
        'info-cpf': user.cpf || 'Não informado',
        'info-birthdate': user.birthdate || 'Não informada',
        'info-address': user.address || 'Não informado'
    };

    for (const [id, value] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    }
}

// Configurar abas do perfil
function setupProfileTabs() {
    const menuItems = document.querySelectorAll('.menu-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remover active de todos
            menuItems.forEach(i => i.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Adicionar active no selecionado
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            const targetTab = document.getElementById(tabId);
            if (targetTab) targetTab.classList.add('active');
        });
    });
}

// Logout
function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    }
}

// Configurar busca
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

// Atualizar contador do carrinho
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Carregar histórico de pedidos
function loadOrderHistory() {
    const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
    const ordersList = document.getElementById('orders-list');
    
    if (!ordersList) return;
    
    if (orders.length === 0) {
        ordersList.innerHTML = `
            <div class="no-orders">
                <i class="fas fa-shopping-bag"></i>
                <h3>Nenhum pedido encontrado</h3>
                <p>Você ainda não realizou nenhuma compra</p>
                <a href="produtos.html" class="btn btn-primary">Começar a Comprar</a>
            </div>
        `;
        return;
    }
    
    // Ordenar pedidos por data (mais recente primeiro)
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    ordersList.innerHTML = orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <div class="order-info">
                    <h4>Pedido #${order.id}</h4>
                    <span class="order-date">${new Date(order.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div class="order-status ${order.status}">
                    ${getStatusText(order.status)}
                </div>
            </div>
            <div class="order-details">
                <div class="order-total">
                    <strong>Total: R$ ${order.total.toFixed(2)}</strong>
                </div>
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-product">
                            <span class="product-name">${item.name}</span>
                            <span class="product-quantity">Qtd: ${item.quantity}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Obter texto do status
function getStatusText(status) {
    const statusMap = {
        'confirmado': 'Confirmado',
        'processando': 'Processando',
        'enviado': 'Enviado',
        'entregue': 'Entregue',
        'cancelado': 'Cancelado'
    };
    return statusMap[status] || status;
}

// Carregar lista de desejos
function loadWishlist() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const wishlistGrid = document.getElementById('wishlist-grid');
    
    if (!wishlistGrid) return;
    
    if (wishlist.length === 0) {
        wishlistGrid.innerHTML = `
            <div class="no-wishlist">
                <i class="fas fa-heart"></i>
                <h3>Sua lista de desejos está vazia</h3>
                <p>Adicone produtos que você gostaria de comprar no futuro</p>
                <a href="produtos.html" class="btn btn-primary">Explorar Produtos</a>
            </div>
        `;
        return;
    }
    
    // Implementar renderização da lista de desejos aqui
}

// Editar perfil
function editProfile() {
    const user = checkAuth();
    if (!user) return;
    
    // Implementar edição de perfil aqui
    alert('Funcionalidade de edição de perfil será implementada em breve!');
}

// Alterar senha
function changePassword() {
    // Implementar alteração de senha aqui
    alert('Funcionalidade de alteração de senha será implementada em breve!');
}