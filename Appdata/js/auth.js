// Gerenciamento de autenticação
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Configurar busca
    setupSearch();

    // Configurar máscaras
    setupMasks();

    // Atualizar header do usuário
    updateUserHeader();

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (validateLogin(email, password)) {
                loginUser(email, password);
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                cpf: document.getElementById('cpf').value,
                birthdate: document.getElementById('birthdate').value,
                password: document.getElementById('password').value,
                confirmPassword: document.getElementById('confirmPassword').value,
                newsletter: document.getElementById('newsletter').checked
            };

            if (validateRegister(formData)) {
                registerNewUser(formData);
            }
        });
    }
});

// Validação do login
function validateLogin(email, password) {
    let isValid = true;

    // Reset erros
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });

    // Validar email
    if (!email) {
        showError('email', 'Email é obrigatório');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Email inválido');
        isValid = false;
    }

    // Validar senha
    if (!password) {
        showError('password', 'Senha é obrigatória');
        isValid = false;
    } else if (password.length < 6) {
        showError('password', 'Senha deve ter pelo menos 6 caracteres');
        isValid = false;
    }

    return isValid;
}

// Validar formato de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostrar erro no campo
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    const formGroup = field.closest('.form-group');
    if (!formGroup) return;

    formGroup.classList.add('error');

    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }

    errorElement.textContent = message;
}

// Login do usuário
function loginUser(email, password) {
    const submitBtn = document.querySelector('#loginForm button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Simular loading
    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;

    // Simular requisição AJAX
    setTimeout(() => {
        // Verificar se é um usuário de teste
        if (email === 'admin@eletrotech.com' && password === '123456') {
            const user = {
                id: 1,
                name: 'Administrador',
                email: email,
                phone: '(11) 99999-9999',
                address: 'Rua Exemplo, 123 - São Paulo, SP'
            };

            localStorage.setItem('user', JSON.stringify(user));
            showSuccessMessage();
        } else {
            // Simular verificação no "banco de dados"
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                delete user.password; // Remover senha do objeto
                localStorage.setItem('user', JSON.stringify(user));
                showSuccessMessage();
            } else {
                showError('password', 'Email ou senha incorretos');
                submitBtn.classList.remove('btn-loading');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        }
    }, 1500);
}

// Mostrar mensagem de sucesso
function showSuccessMessage() {
    const successModal = document.createElement('div');
    successModal.className = 'success-modal';
    successModal.style.display = 'flex';
    successModal.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Login realizado com sucesso!</h3>
            <p>Redirecionando para a página inicial...</p>
        </div>
    `;

    document.body.appendChild(successModal);

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

// Logout
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Verificar se usuário está logado
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user && window.location.pathname.includes('perfil.html')) {
        window.location.href = 'login.html';
    }
    return user;
}

// Cadastro de novo usuário
function registerUser(userData) {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar se email já existe
    if (users.find(u => u.email === userData.email)) {
        return { success: false, message: 'Email já cadastrado' };
    }

    // Verificar se CPF já existe
    if (userData.cpf && users.find(u => u.cpf === userData.cpf)) {
        return { success: false, message: 'CPF já cadastrado' };
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    return { success: true };
}

// Validação do cadastro
function validateRegister(formData) {
    let isValid = true;

    // Reset erros
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error');
    });

    // Validar nome
    if (!formData.name) {
        showError('name', 'Nome é obrigatório');
        isValid = false;
    }

    // Validar email
    if (!formData.email) {
        showError('email', 'Email é obrigatório');
        isValid = false;
    } else if (!isValidEmail(formData.email)) {
        showError('email', 'Email inválido');
        isValid = false;
    }

    // Validar senha
    if (!formData.password) {
        showError('password', 'Senha é obrigatória');
        isValid = false;
    } else if (formData.password.length < 6) {
        showError('password', 'Senha deve ter pelo menos 6 caracteres');
        isValid = false;
    }

    // Validar confirmação de senha
    if (!formData.confirmPassword) {
        showError('confirmPassword', 'Confirme sua senha');
        isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
        showError('confirmPassword', 'Senhas não coincidem');
        isValid = false;
    }

    // Validar CPF (se preenchido)
    if (formData.cpf && !isValidCPF(formData.cpf)) {
        showError('cpf', 'CPF inválido');
        isValid = false;
    }

    return isValid;
}

// Validar CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;

    // Validação simples de CPF (pode ser melhorada)
    return cpf.length === 11;
}

// Mostrar sucesso no cadastro
function showRegisterSuccess() {
    const successModal = document.createElement('div');
    successModal.className = 'success-modal';
    successModal.style.display = 'flex';
    successModal.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Cadastro realizado com sucesso!</h3>
            <p>Redirecionando para a página de login...</p>
        </div>
    `;

    document.body.appendChild(successModal);

    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Função para registrar novo usuário
function registerNewUser(formData) {
    const submitBtn = document.querySelector('#registerForm button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Simular loading
    submitBtn.classList.add('btn-loading');
    submitBtn.disabled = true;

    // Simular requisição AJAX
    setTimeout(() => {
        const result = registerUser({
            id: Date.now(), // ID único baseado no timestamp
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            cpf: formData.cpf,
            birthdate: formData.birthdate,
            password: formData.password,
            newsletter: formData.newsletter,
            created_at: new Date().toISOString()
        });

        if (result.success) {
            showRegisterSuccess();
        } else {
            showError('email', result.message);
            submitBtn.classList.remove('btn-loading');
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    }, 1500);
}

// Configurar máscaras
function setupMasks() {
    const phoneInput = document.getElementById('phone');
    const cpfInput = document.getElementById('cpf');

    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.substring(0, 11);

            if (value.length > 10) {
                value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            } else if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/(\d{0,2})/, '($1');
            }

            e.target.value = value;
        });
    }

    if (cpfInput) {
        cpfInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.substring(0, 11);

            if (value.length > 9) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
            } else if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d{0,3})/, '$1.$2');
            }

            e.target.value = value;
        });
    }
}

// Verificar se usuário está logado e atualizar header
function updateUserHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const loginBtn = document.getElementById('login-btn');

    if (user && loginBtn) {
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${user.name}`;
        loginBtn.href = 'perfil.html';
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