// Dados dos produtos (mesma lista do main.js)
const products = [
    // ===== PROCESSADORES =====
    {
        id: 1,
        name: "Processador Intel Core i9-13900K",
        price: 2899.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjg_yFnCKA_WrTZtQTzWMh4LLUNo__LSJ5KA&s",
        category: "processadores",
        brand: "intel",
        featured: true,
        description: "Processador Intel Core i9 de 13ª geração com 24 núcleos"
    },
    {
        id: 2,
        name: "Processador AMD Ryzen 9 7950X",
        price: 3299.99,
        image: "https://m.media-amazon.com/images/I/5116zdA9uyL.jpg",
        category: "processadores",
        brand: "amd",
        featured: true,
        description: "Processador AMD Ryzen 9 7950X com 16 núcleos e 32 threads"
    },
    {
        id: 3,
        name: "Processador Intel Core i7-13700K",
        price: 1999.99,
        image: "https://m.media-amazon.com/images/I/515lU6LNpsL.jpg",
        category: "processadores",
        brand: "intel",
        featured: false,
        description: "Processador Intel Core i7 de 13ª geração com 16 núcleos"
    },
    {
        id: 4,
        name: "Processador AMD Ryzen 7 7700X",
        price: 1799.99,
        image: "https://images.kabum.com.br/produtos/fotos/378413/processador-amd-ryzen-7-7700x-5-4ghz-max-turbo-cache-40mb-am5-8-nucleos-video-integrado-100-100000591wof_1662136328_gg.jpg",
        category: "processadores",
        brand: "amd",
        featured: false,
        description: "Processador AMD Ryzen 7 7700X com 8 núcleos e 16 threads"
    },
    {
        id: 5,
        name: "Processador Intel Core i5-13600K",
        price: 1299.99,
        image: "https://m.media-amazon.com/images/I/61lNEpDfdcL.jpg",
        category: "processadores",
        brand: "intel",
        featured: false,
        description: "Processador Intel Core i5 de 13ª geração com 14 núcleos"
    },
    {
        id: 6,
        name: "Processador AMD Ryzen 5 7600X",
        price: 1199.99,
        image: "https://images.kabum.com.br/produtos/fotos/378414/processador-amd-ryzen-5-7600x-5-3ghz-max-turbo-cache-38mb-am5-6-nucleos-video-integrado-100-100000593wof_1662137195_gg.jpg",
        category: "processadores",
        brand: "amd",
        featured: false,
        description: "Processador AMD Ryzen 5 7600X com 6 núcleos e 12 threads"
    },

    // ===== PLACAS DE VÍDEO =====
    {
        id: 7,
        name: "Placa de Vídeo RTX 4090 24GB",
        price: 8999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mJ2YJTcz8XyuPwS7JDhh_kA7Shyqwu62MA&s",
        category: "placas-video",
        brand: "nvidia",
        featured: true,
        description: "Placa de vídeo NVIDIA GeForce RTX 4090 com 24GB GDDR6X"
    },
    {
        id: 8,
        name: "Placa de Vídeo RX 7900 XTX 24GB",
        price: 5999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiLR2Ncgrn9AIG2RuD2tVIQ1ROckIadW-mw&s",
        category: "placas-video",
        brand: "amd",
        featured: true,
        description: "Placa de vídeo AMD Radeon RX 7900 XTX com 24GB GDDR6"
    },
    {
        id: 9,
        name: "Placa de Vídeo RTX 4070 Ti 12GB",
        price: 4299.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEEcYX-A_InByZCHyQUrqR3brupqcDim1_g&s",
        category: "placas-video",
        brand: "nvidia",
        featured: false,
        description: "Placa de vídeo NVIDIA GeForce RTX 4070 Ti com 12GB GDDR6X"
    },
    {
        id: 10,
        name: "Placa de Vídeo RX 7800 XT 16GB",
        price: 3499.99,
        image: "https://images3.kabum.com.br/produtos/fotos/576423/placa-de-video-rx-7800xt-gaming-16g-xfx-speedster-qick319-radeon-16gb-ddr6-hdmi-3xdp-3-fan-rx-78tqickf9_1719595732_gg.jpg",
        category: "placas-video",
        brand: "amd",
        featured: false,
        description: "Placa de vídeo AMD Radeon RX 7800 XT com 16GB GDDR6"
    },
    {
        id: 11,
        name: "Placa de Vídeo RTX 4060 Ti 8GB",
        price: 2499.99,
        image: "https://m.media-amazon.com/images/I/51WynZQZehL.jpg",
        category: "placas-video",
        brand: "nvidia",
        featured: false,
        description: "Placa de vídeo NVIDIA GeForce RTX 4060 Ti com 8GB GDDR6"
    },
    {
        id: 12,
        name: "Placa de Vídeo RX 7700 XT 12GB",
        price: 2799.99,
        image: "https://images9.kabum.com.br/produtos/fotos/525889/placa-de-video-rx-7700-xt-gaming-oc-12g-amd-radeon-gigabyte-12gb-gddr6-192bits-rgb-gv-r77xtgaming-oc-12gd_1734614450_gg.jpg",
        category: "placas-video",
        brand: "amd",
        featured: false,
        description: "Placa de vídeo AMD Radeon RX 7700 XT com 12GB GDDR6"
    },

    // ===== MEMÓRIA RAM =====
    {
        id: 13,
        name: "Memória RAM 32GB DDR5 5600MHz",
        price: 899.99,
        image: "https://www.kingstonstore.com.br/cdn/shop/products/FuryDIMM1_78d8eced-0355-45f2-add0-6ddaf2d9d8bc.jpg?v=1646775760&width=1445",
        category: "memoria",
        brand: "corsair",
        featured: true,
        description: "Kit de memória RAM DDR5 32GB 5600MHz Corsair"
    },
    {
        id: 14,
        name: "Memória RAM 16GB DDR4 3200MHz",
        price: 399.99,
        image: "https://www.kingstonstore.com.br/cdn/shop/files/KFBL1_7fd4a4ca-14cf-4306-a4c9-adb5a5bce979.jpg?v=1733173354",
        category: "memoria",
        brand: "kingston",
        featured: false,
        description: "Kit de memória RAM DDR4 16GB 3200MHz Kingston Fury"
    },
    {
        id: 15,
        name: "Memória RAM 64GB DDR5 6000MHz",
        price: 1699.99,
        image: "https://m.media-amazon.com/images/I/717xrBf92wL._AC_UF894,1000_QL80_.jpg",
        category: "memoria",
        brand: "gskill",
        featured: false,
        description: "Kit de memória RAM DDR5 64GB 6000MHz G.Skill Trident Z5"
    },
    {
        id: 16,
        name: "Memória RAM 8GB DDR4 2666MHz",
        price: 249.99,
        image: "https://a-static.mlcdn.com.br/470x352/memoria-ram-para-notebook-8gb-ddr4-pcware-whs84s8az-2666mhz/magazineluiza/227268900/e509a1186afd780ed347d7f34c60ec55.jpg",
        category: "memoria",
        brand: "crucial",
        featured: false,
        description: "Memória RAM 8GB DDR4 2666MHz Crucial"
    },

    // ===== ARMAZENAMENTO =====
    {
        id: 17,
        name: "SSD 2TB NVMe M.2",
        price: 699.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlr3-DrBLxgXqoIg6QDFZj2sa_d1aeVl59Kw&s",
        category: "armazenamento",
        brand: "samsung",
        featured: true,
        description: "SSD NVMe M.2 2TB Samsung 970 EVO Plus"
    },
    {
        id: 18,
        name: "SSD 1TB NVMe M.2",
        price: 399.99,
        image: "https://scarcom.vtexassets.com/arquivos/ids/160889/153842_1.jpg?v=638766078532800000",
        category: "armazenamento",
        brand: "western-digital",
        featured: false,
        description: "SSD NVMe M.2 1TB Western Digital Black SN770"
    },
    {
        id: 19,
        name: "HD 4TB 7200RPM",
        price: 599.99,
        image: "https://cdn.awsli.com.br/600x700/2618/2618561/produto/223151732/st4000ne001-seagate-hd-interno-sata-4tb-7200-rpm-ironwolf-pro-f3393675-zdgemhycpj.jpg",
        category: "armazenamento",
        brand: "seagate",
        featured: false,
        description: "HD 4TB 7200RPM Seagate Barracuda"
    },
    {
        id: 20,
        name: "SSD 500GB SATA",
        price: 249.99,
        image: "https://m.media-amazon.com/images/I/71J7UiZKvlL.jpg",
        category: "armazenamento",
        brand: "kingston",
        featured: false,
        description: "SSD SATA 500GB Kingston A400"
    },

    // ===== PERIFÉRICOS =====
    {
        id: 21,
        name: "Teclado Mecânico Fizz Sunrise",
        price: 499.99,
        image: "https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/215727955/k6c5d5-1-z1gvdpegnx.PNG",
        category: "perifericos",
        brand: "redragon",
        featured: false,
        description: "Teclado mecânico RGB Logitech G Pro X"
    },
    {
        id: 22,
        name: "Mouse Gamer Sem Fio",
        price: 299.99,
        image: "https://edifier.com.br/media/catalog/product/cache/eba5f2f163b55172c022905d0dc2efd7/g/3/g3m-4.jpg",
        category: "perifericos",
        brand: "razer",
        featured: false,
        description: "Mouse gamer sem fio Razer DeathAdder V2 Pro"
    },
    {
        id: 23,
        name: "Headset Gamer 7.1 Surround",
        price: 399.99,
        image: "https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/h/e/headseat-g-pro-3_2.png",
        category: "perifericos",
        brand: "hyperx",
        featured: false,
        description: "Headset gamer 7.1 surround sound HyperX Cloud II"
    },
    {
        id: 24,
        name: "Mousepad Gamer XXL",
        price: 149.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeV1fsya0gBpvxSTVJur9VyNT8TxXyd3vGAw&s",
        category: "perifericos",
        brand: "steelseries",
        featured: false,
        description: "Mousepad gamer XXL SteelSeries QcK Heavy"
    },
    {
        id: 25,
        name: "Webcam Full HD 1080p",
        price: 349.99,
        image: "https://m.media-amazon.com/images/I/41350ojJDtL.jpg",
        category: "perifericos",
        brand: "logitech",
        featured: false,
        description: "Webcam Logitech C920s Full HD 1080p"
    },
    {
        id: 26,
        name: "Controle Xbox Series X",
        price: 399.99,
        image: "https://m.media-amazon.com/images/I/61bh+T2v7SL.jpg",
        category: "perifericos",
        brand: "microsoft",
        featured: false,
        description: "Controle Xbox Series X Wireless"
    },

    // ===== MONITORES =====
    {
        id: 27,
        name: "Monitor Gamer 27' 144Hz",
        price: 1599.99,
        image: "https://www.gamemax-br.com/img/produtos/1542873214.png",
        category: "monitores",
        brand: "asus",
        featured: false,
        description: "Monitor Gamer ASUS 27 polegadas 144Hz 1ms"
    },
    {
        id: 28,
        name: "Monitor 32' 4K UHD",
        price: 2299.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgaiyF9F_xCZ7uCOQXY9UTWf3jRd5s9JAEw&s",
        category: "monitores",
        brand: "samsung",
        featured: false,
        description: "Monitor Samsung 32 polegadas 4K UHD 60Hz"
    },
    {
        id: 29,
        name: "Monitor Ultrawide 34'",
        price: 2899.99,
        image: "https://images8.kabum.com.br/produtos/fotos/472908/monitor-gamer-lg-ultragear-lg-34-curvo-led-wqhd-ultrawide-160hz-1ms-displayport-e-hdmi-amd-freesync-premium-hdr10-99-srgb-34gp63a-b_1717591886_gg.jpg",
        category: "monitores",
        brand: "lg",
        featured: false,
        description: "Monitor Ultrawide LG 34 polegadas 144Hz"
    },
    {
        id: 30,
        name: "Monitor Gamer Curvo 27'",
        price: 1899.99,
        image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/222195",
        category: "monitores",
        brand: "samsung",
        featured: false,
        description: "Monitor Gamer Curvo Samsung 27' 240Hz"
    },

    // ===== CADEIRAS =====
    {
        id: 31,
        name: "Cadeira Gamer Profissional",
        price: 1299.99,
        image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/ihgvfhuo/33793.jpg",
        category: "cadeiras",
        brand: "dXRacer",
        featured: false,
        description: "Cadeira Gamer Profissional com apoio lombar"
    },
    {
        id: 32,
        name: "Cadeira Gamer Racing",
        price: 899.99,
        image: "https://www.comfy.com.br/media/catalog/product/c/a/cadeira_gamer_xperience_ultra_verde_base_girato_ria_1.webp",
        category: "cadeiras",
        brand: "gtplayer",
        featured: false,
        description: "Cadeira Gamer Racing Edition"
    },
    {
        id: 33,
        name: "Cadeira Ergonômica Executiva",
        price: 799.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmIwfGAE4zqtZ3S-iKFOC_UFthWGogRWjKw&s",
        category: "cadeiras",
        brand: "flexform",
        featured: false,
        description: "Cadeira Ergonômica Executiva com headrest"
    },
    {
        id: 34,
        name: "Cadeira Gamer Premium",
        price: 1599.99,
        image: "https://www.comfy.com.br/media/ergofull2.webp",
        category: "cadeiras",
        brand: "noblechairs",
        featured: false,
        description: "Cadeira Gamer Premium com couro sintético"
    },

    // ===== PC GAMER =====
    {
        id: 35,
        name: "PC Gamer RTX 4070 + i7",
        price: 7999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mnq-bXs4uEgGo6ekA6R26xnDeCn0zP6G6LVWzAAMGVPucWu-IIcyq5LNKbdR1iijmjQ&usqp=CAU=3",
        category: "pc",
        brand: "asus",
        featured: true,
        description: "PC Gamer completo com RTX 4070 e Intel Core i7"
    },
    {
        id: 36,
        name: "PC Gamer RX 7800 XT + Ryzen 7",
        price: 6999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPsmUu6yhI1wGBfcV09gT7J1jsrpEnE157LzEWTlr6C_uwUbfwry6zIfoyQUTqrw7SCA&usqp=CAU",
        category: "pc",
        brand: "msi",
        featured: false,
        description: "PC Gamer completo com RX 7800 XT e AMD Ryzen 7"
    },
    {
        id: 37,
        name: "PC Gamer RTX 4060 + i5",
        price: 4999.99,
        image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/222270",
        category: "pc",
        brand: "dell",
        featured: false,
        description: "PC Gamer Dell com RTX 4060 e Intel Core i5"
    },
    {
        id: 38,
        name: "PC Gamer RX 7600 + Ryzen 5",
        price: 4299.99,
        image: "https://shopinfo.vteximg.com.br/arquivos/ids/1722386-1000-1000/1.png?v=638895846525100000",
        category: "pc",
        brand: "acer",
        featured: false,
        description: "PC Gamer Acer com RX 7600 e AMD Ryzen 5"
    },

    // ===== HARDWARE (Placas-mãe, Fontes, etc) =====
    {
        id: 39,
        name: "Placa-Mãe B550 ASUS",
        price: 1899.99,
        image: "https://m.media-amazon.com/images/I/81QyMksmunL._AC_UF894,1000_QL80_.jpg",
        category: "hardware",
        brand: "asus",
        featured: false,
        description: "Placa-Mãe ASUS Z790 para Intel LGA 1700"
    },
    {
        id: 40,
        name: "Fonte 750W CORSAIR CX750",
        price: 699.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1462JVOHeGVpbKXyHCMAtGBPiByeHHDDww&s",
        category: "hardware",
        brand: "corsair",
        featured: false,
        description: "Fonte Corsair 850W 80 Plus Gold Modular"
    },
    {
        id: 41,
        name: "Water Cooler 240mm Rise Mode",
        price: 899.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSR7RaILXy3i0QUcAA2HZ-LQ5S2Nvm8KCOqA&s",
        category: "hardware",
        brand: "nzxt",
        featured: false,
        description: "Water Cooler NZXT Kraken 360mm RGB"
    },
    {
        id: 42,
        name: "Gabinete Aigo TGT Atx",
        price: 499.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBDwW3BXUJKFxE6iTB9jL_GqnV5tA9VEeyQ&s",
        category: "hardware",
        brand: "coolermaster",
        featured: false,
        description: "Gabinete Gamer Cooler Master TD500"
    },

    // ===== PROMOÇÕES =====
    {
        id: 43,
        name: "SSD 500GB NVMe - PROMO",
        price: 249.99,
        originalPrice: 349.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEn7CO-jylyoyvqg6CU4ghm1fmyhJ6LQulw&s",
        category: "promocoes",
        brand: "kingston",
        featured: true,
        description: "SSD NVMe 500GB Kingston NV2 - Promoção"
    },
    {
        id: 44,
        name: "Mouse Gamer - PROMO",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxgC5J7o4uM9MLQ4m9p5JsSD00romUDuF1w&s",
        category: "promocoes",
        brand: "redragon",
        featured: false,
        description: "Mouse Gamer Redragon Cobra - Promoção"
    },
    {
        id: 45,
        name: "Teclado Mecânico - PROMO",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7v4_hBRpFke1LOCdKc_wpQk8rkIifTQiNw&s",
        category: "promocoes",
        brand: "redragon",
        featured: false,
        description: "Teclado Mecânico Redragon Kumara - Promoção"
    },
    {
        id: 46,
        name: "Headset Gamer - PROMO",
        price: 199.99,
        originalPrice: 299.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAM-jux9oXUsKdqx6XFqA32me0fOoWoTAh5w&s",
        category: "promocoes",
        brand: "havit",
        featured: false,
        description: "Headset Gamer Havit HV-H2002d - Promoção"
    },
    {
        id: 47,
        name: "Cooler para Processador Air -PROMO",
        price: 199.99,
        originalPrice: 322.00,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pg-dks-x01blk14524.jpg",
        category: "promocoes",
        brand: "pichau",
        featured: false,
        description: "Cooler Air Cooler Master Hyper 212 para processadores"
    },
    {
        id: 48,
        name: "Hub USB 3.0 7 Portas - PROM",
        price: 129.99,
        originalPrice: 299.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWz4Ky02lDn03E5KI9NMUMoQCKibcI33pjtg&s",
        category: "promocoes",
        brand: "tp-link",
        featured: false,
        description: "Hub USB 3.0 com 7 portas e alimentação externa"
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    loadCartPage();
    setupEventDelegation();
});

// Carregar página do carrinho
function loadCartPage() {
    const cart = getCart();
    renderCartItems(cart);
    updateCartSummary(cart);
    loadRecommendedProducts();
    updateCartCount();
}

// Configurar delegação de eventos - VERSÃO MELHORADA
function setupEventDelegation() {
    document.addEventListener('click', function (e) {
        const target = e.target;

        // Botão AUMENTAR quantidade
        if (target.classList.contains('increase')) {
            e.preventDefault();
            e.stopPropagation();
            const productId = parseInt(target.getAttribute('data-id'));
            console.log('Aumentando produto:', productId);
            updateQuantity(productId, 1);
            return;
        }

        // Botão DIMINUIR quantidade
        if (target.classList.contains('decrease')) {
            e.preventDefault();
            e.stopPropagation();
            const productId = parseInt(target.getAttribute('data-id'));
            console.log('Diminuindo produto:', productId);
            updateQuantity(productId, -1);
            return;
        }

        // Botão REMOVER item
        if (target.classList.contains('remove-item') || target.closest('.remove-item')) {
            e.preventDefault();
            e.stopPropagation();
            const button = target.classList.contains('remove-item') ? target : target.closest('.remove-item');
            const productId = parseInt(button.getAttribute('data-id'));
            console.log('Removendo produto:', productId);
            const productName = getProductName(productId);

            if (confirm(`Tem certeza que deseja remover "${productName}" do carrinho?`)) {
                removeFromCart(productId);
            }
            return;
        }

        // Botão adicionar ao carrinho dos produtos recomendados - CORRIGIDO
        if (target.classList.contains('add-to-cart') || target.closest('.add-to-cart')) {
            e.preventDefault();
            e.stopPropagation();
            const button = target.classList.contains('add-to-cart') ? target : target.closest('.add-to-cart');
            const productId = parseInt(button.getAttribute('data-id'));
            console.log('Clicou em adicionar produto recomendado:', productId);
            addToCartRecommended(productId);
            return;
        }

        // Botão aplicar cupom
        if (target.id === 'applyCoupon' || target.closest('#applyCoupon')) {
            e.preventDefault();
            applyCoupon();
            return;
        }

        // Botão finalizar compra
        if (target.id === 'checkoutBtn' || target.closest('#checkoutBtn')) {
            e.preventDefault();
            checkout();
            return;
        }
    });
}

// Renderizar itens do carrinho - VERSÃO CORRIGIDA
function renderCartItems(cart) {
    const cartItems = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    const cartSummary = document.getElementById('cartSummary');
    const cartContent = document.querySelector('.cart-content');

    if (!cartItems) return;

    if (cart.length === 0) {
        // Layout quando carrinho está vazio
        if (cartContent) {
            cartContent.style.display = 'flex';
            cartContent.style.flexDirection = 'column';
            cartContent.style.alignItems = 'center';
            cartContent.style.minHeight = 'auto';
        }

        if (emptyCart) {
            emptyCart.style.display = 'flex';
            emptyCart.style.flexDirection = 'column';
            emptyCart.style.alignItems = 'center';
            emptyCart.style.justifyContent = 'center';
            emptyCart.style.textAlign = 'center';
            emptyCart.style.padding = '60px 40px';
            emptyCart.style.background = 'white';
            emptyCart.style.borderRadius = '8px';
            emptyCart.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            emptyCart.style.minHeight = '300px';
            emptyCart.style.width = '100%';
            emptyCart.style.marginBottom = '40px';

            emptyCart.innerHTML = `
                <div style="margin-bottom: 25px;">
                    <i class="fas fa-shopping-cart" style="font-size: 64px; color: #dee2e6;"></i>
                </div>
                <h3 style="color: #495057; font-size: 24px; margin-bottom: 15px; font-weight: 600;">
                    Seu carrinho está vazio
                </h3>
                <p style="color: #6c757d; font-size: 16px; margin-bottom: 30px;">
                    Adicione produtos incríveis ao seu carrinho!
                </p>
                <a href="produtos.html" class="btn" style="
                    background: #b10000; 
                    color: white; 
                    padding: 12px 30px; 
                    border-radius: 6px; 
                    text-decoration: none; 
                    font-weight: 600;
                    font-size: 16px;
                    transition: all 0.3s ease;
                ">
                    <i class="fas fa-arrow-left" style="margin-right: 8px;"></i>
                    Continuar Comprando
                </a>
            `;
        }

        // Esconder apenas o resumo, mas manter produtos recomendados
        if (cartSummary) cartSummary.style.display = 'none';

        // MOSTRAR produtos recomendados
        const recommendedSection = document.querySelector('.recommended-products');
        if (recommendedSection) {
            recommendedSection.style.display = 'block';
        }

        cartItems.innerHTML = '';
        return;
    }

    // Quando há itens no carrinho - restaurar layout normal
    if (cartContent) {
        cartContent.style.display = 'grid';
        cartContent.style.gridTemplateColumns = '1fr 350px';
        cartContent.style.minHeight = 'auto';
        cartContent.style.flexDirection = 'row';
        cartContent.style.alignItems = 'normal';
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';

    // Mostrar produtos recomendados
    const recommendedSection = document.querySelector('.recommended-products');
    if (recommendedSection) {
        recommendedSection.style.display = 'block';
    }

    // Renderizar itens do carrinho
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const priceDisplay = item.originalPrice
            ? `<div class="cart-item-price">
                   <span class="cart-item-old-price">R$ ${item.originalPrice.toFixed(2)}</span>
                   <span class="cart-item-new-price">R$ ${item.price.toFixed(2)}</span>
               </div>`
            : `<div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>`;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.setAttribute('data-product-id', item.id);
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-description">${item.description}</p>
                <div class="cart-item-sku">SKU: ${item.id}</div>
            </div>
            <div class="quantity-controls">
                <button type="button" class="quantity-btn decrease" data-id="${item.id}">-</button>
                <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                <button type="button" class="quantity-btn increase" data-id="${item.id}">+</button>
            </div>
            ${priceDisplay}
            <button type="button" class="remove-item" data-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Atualizar quantidade - VERSÃO CORRIGIDA
function updateQuantity(productId, change) {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex === -1) {
        console.log('Produto não encontrado no carrinho:', productId);
        return;
    }

    console.log('Quantidade antes:', cart[itemIndex].quantity);

    // Garantir que a quantidade seja um número
    cart[itemIndex].quantity = parseInt(cart[itemIndex].quantity);

    // Aplicar mudança
    cart[itemIndex].quantity += change;

    console.log('Quantidade depois:', cart[itemIndex].quantity);

    // Remover se quantidade for zero ou negativa
    if (cart[itemIndex].quantity <= 0) {
        console.log('Removendo produto do carrinho');
        cart.splice(itemIndex, 1);
    }

    saveCart(cart);
    loadCartPage(); // Recarrega toda a página
}

// Remover item do carrinho - VERSÃO CORRIGIDA
function removeFromCart(productId) {
    console.log('Removendo produto ID:', productId);
    let cart = getCart();
    const initialLength = cart.length;

    cart = cart.filter(item => item.id !== productId);

    if (cart.length === initialLength) {
        console.log('Produto não foi removido - não encontrado');
        return;
    }

    saveCart(cart);
    loadCartPage(); // Recarrega toda a página

    // Mostrar confirmação de remoção
    showNotification('Produto removido do carrinho', 'success');
}

// Obter nome do produto
function getProductName(productId) {
    const product = products.find(p => p.id === productId);
    return product ? product.name : 'Produto';
}

// Atualizar resumo do carrinho
function updateCartSummary(cart) {
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const discountEl = document.getElementById('discount');
    const totalEl = document.getElementById('total');

    if (!subtotalEl || !shippingEl || !discountEl || !totalEl) return;

    if (cart.length === 0) {
        subtotalEl.textContent = 'R$ 0,00';
        shippingEl.textContent = 'R$ 0,00';
        discountEl.textContent = '- R$ 0,00';
        totalEl.textContent = 'R$ 0,00';
        return;
    }

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 500 ? 0 : 29.90;
    const discount = calculateDiscount(subtotal);
    const total = subtotal + shipping - discount;

    subtotalEl.textContent = `R$ ${subtotal.toFixed(2)}`;
    shippingEl.textContent = shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`;
    discountEl.textContent = `- R$ ${discount.toFixed(2)}`;
    totalEl.textContent = `R$ ${total.toFixed(2)}`;
}

// Calcular desconto
function calculateDiscount(subtotal) {
    if (subtotal > 2000) return subtotal * 0.1;
    if (subtotal > 1000) return subtotal * 0.05;
    return 0;
}

// Aplicar cupom
function applyCoupon() {
    const couponInput = document.getElementById('couponInput');
    if (!couponInput) return;

    const coupon = couponInput.value.trim().toUpperCase();
    const validCoupons = ['ELETRO10', 'TECH15', 'PRIMEIRO5'];

    if (validCoupons.includes(coupon)) {
        showNotification(`Cupom ${coupon} aplicado!`, 'success');
    } else {
        showNotification('Cupom inválido', 'error');
    }

    couponInput.value = '';
}

// Finalizar compra
function checkout() {
    const cart = getCart();

    if (cart.length === 0) {
        showNotification('Seu carrinho está vazio', 'error');
        return;
    }

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
        showNotification('Faça login para finalizar a compra', 'error');
        setTimeout(() => window.location.href = 'login.html', 2000);
        return;
    }

    showNotification('Processando seu pedido...', 'success');

    setTimeout(() => {
        saveOrder(cart);
        clearCart();
        showNotification('Compra realizada com sucesso!', 'success');
        setTimeout(() => window.location.href = 'index.html', 2000);
    }, 2000);
}

// Salvar pedido
function saveOrder(cart) {
    const orders = JSON.parse(localStorage.getItem('userOrders')) || [];
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: [...cart],
        total: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
        status: 'confirmado'
    };
    orders.push(order);
    localStorage.setItem('userOrders', JSON.stringify(orders));
}

// Helper functions
function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Garantir que todas as quantidades sejam números
    return cart.map(item => ({
        ...item,
        quantity: parseInt(item.quantity) || 1
    }));
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + (parseInt(item.quantity) || 0), 0);
    document.querySelectorAll('.cart-count').forEach(el => {
        el.textContent = count;
    });
}

// Mostrar notificação
function showNotification(message, type = 'success') {
    // Remove notificação existente
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button type="button" class="close-notification">&times;</button>
    `;

    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    document.body.appendChild(notification);

    // Botão de fechar
    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.onclick = function () {
        notification.remove();
    };

    // Auto-remove após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Produtos recomendados - VERSÃO CORRIGIDA
function loadRecommendedProducts() {
    const container = document.getElementById('recommendedProducts');
    if (!container) return;

    const cart = getCart();
    const cartIds = cart.map(item => item.id);
    const available = products.filter(p => !cartIds.includes(p.id));
    const recommended = [...available].sort(() => 0.5 - Math.random()).slice(0, 6); // 6 produtos para 3x2

    container.innerHTML = '';

    recommended.forEach(product => {
        const priceDisplay = product.originalPrice
            ? `<div class="product-price">
                   <span class="product-old-price">R$ ${product.originalPrice.toFixed(2)}</span>
                   R$ ${product.price.toFixed(2)}
               </div>`
            : `<div class="product-price">R$ ${product.price.toFixed(2)}</div>`;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                ${priceDisplay}
                <div class="product-installments">10x de R$ ${(product.price / 10).toFixed(2)}</div>
                <button type="button" class="add-to-cart" data-id="${product.id}">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    console.log('Produtos recomendados carregados:', recommended.length);
}

// Adicionar produto recomendado ao carrinho - VERSÃO CORRIGIDA
function addToCartRecommended(productId) {
    console.log('Adicionando produto recomendado:', productId);

    const product = products.find(p => p.id === productId);
    if (!product) {
        console.log('Produto não encontrado:', productId);
        return;
    }

    let cart = getCart();
    console.log('Carrinho antes:', cart);

    const existingIndex = cart.findIndex(item => item.id === productId);

    if (existingIndex !== -1) {
        // Produto já existe no carrinho - aumentar quantidade
        cart[existingIndex].quantity += 1;
        console.log('Quantidade aumentada para:', cart[existingIndex].quantity);
    } else {
        // Adicionar novo produto ao carrinho
        const productToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.image,
            description: product.description,
            quantity: 1
        };
        cart.push(productToAdd);
        console.log('Novo produto adicionado:', productToAdd);
    }

    saveCart(cart);
    console.log('Carrinho depois:', getCart());

    // Recarregar toda a página do carrinho
    loadCartPage();
    showNotification(`${product.name} adicionado ao carrinho!`, 'success');
}