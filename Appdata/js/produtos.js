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
        description: "Processador Intel Core i9-13900K 13ª geração, 24 núcleos (8P+16E), até 5.8GHz"
    },
    {
        id: 2,
        name: "Processador AMD Ryzen 9 7950X",
        price: 3299.99,
        image: "https://m.media-amazon.com/images/I/5116zdA9uyL.jpg",
        category: "processadores",
        brand: "amd",
        featured: true,
        description: "Processador AMD Ryzen 9 7950X, 16 núcleos, 32 threads, até 5.7GHz, AM5"
    },
    {
        id: 3,
        name: "Processador Intel Core i7-13700K",
        price: 2199.99,
        image: "https://m.media-amazon.com/images/I/515lU6LNpsL.jpg",
        category: "processadores",
        brand: "intel",
        featured: false,
        description: "Processador Intel Core i7-13700K 13ª geração, 16 núcleos (8P+8E), até 5.4GHz"
    },
    {
        id: 4,
        name: "Processador AMD Ryzen 7 7700X",
        price: 1899.99,
        image: "https://images.kabum.com.br/produtos/fotos/378413/processador-amd-ryzen-7-7700x-5-4ghz-max-turbo-cache-40mb-am5-8-nucleos-video-integrado-100-100000591wof_1662136328_gg.jpg",
        category: "processadores",
        brand: "amd",
        featured: false,
        description: "Processador AMD Ryzen 7 7700X, 8 núcleos, 16 threads, até 5.4GHz, AM5"
    },
    {
        id: 5,
        name: "Processador Intel Core i5-13600K",
        price: 1399.99,
        image: "https://m.media-amazon.com/images/I/61lNEpDfdcL.jpg",
        category: "processadores",
        brand: "intel",
        featured: false,
        description: "Processador Intel Core i5-13600K 13ª geração, 14 núcleos (6P+8E), até 5.1GHz"
    },
    {
        id: 6,
        name: "Processador AMD Ryzen 5 7600X",
        price: 1249.99,
        image: "https://images.kabum.com.br/produtos/fotos/378414/processador-amd-ryzen-5-7600x-5-3ghz-max-turbo-cache-38mb-am5-6-nucleos-video-integrado-100-100000593wof_1662137195_gg.jpg",
        category: "processadores",
        brand: "amd",
        featured: false,
        description: "Processador AMD Ryzen 5 7600X, 6 núcleos, 12 threads, até 5.3GHz, AM5"
    },

    // ===== PLACAS DE VÍDEO =====
    {
        id: 7,
        name: "Placa de Vídeo RTX 4090 24GB",
        price: 12499.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mJ2YJTcz8XyuPwS7JDhh_kA7Shyqwu62MA&s",
        category: "placas-video",
        brand: "nvidia",
        featured: true,
        description: "Placa de Vídeo NVIDIA GeForce RTX 4090 24GB GDDR6X, DLSS 3"
    },
    {
        id: 8,
        name: "Placa de Vídeo RX 7900 XTX 24GB",
        price: 6499.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiLR2Ncgrn9AIG2RuD2tVIQ1ROckIadW-mw&s",
        category: "placas-video",
        brand: "amd",
        featured: true,
        description: "Placa de Vídeo AMD Radeon RX 7900 XTX 24GB GDDR6"
    },
    {
        id: 9,
        name: "Placa de Vídeo RTX 4070 Ti 12GB",
        price: 4899.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEEcYX-A_InByZCHyQUrqR3brupqcDim1_g&s",
        category: "placas-video",
        brand: "nvidia",
        featured: false,
        description: "Placa de Vídeo NVIDIA GeForce RTX 4070 Ti 12GB GDDR6X"
    },
    {
        id: 10,
        name: "Placa de Vídeo RX 7800 XT 16GB",
        price: 3799.99,
        image: "https://images3.kabum.com.br/produtos/fotos/576423/placa-de-video-rx-7800xt-gaming-16g-xfx-speedster-qick319-radeon-16gb-ddr6-hdmi-3xdp-3-fan-rx-78tqickf9_1719595732_gg.jpg",
        category: "placas-video",
        brand: "amd",
        featured: false,
        description: "Placa de Vídeo AMD Radeon RX 7800 XT 16GB GDDR6"
    },
    {
        id: 11,
        name: "Placa de Vídeo RTX 4060 Ti 8GB",
        price: 2699.99,
        image: "https://m.media-amazon.com/images/I/51WynZQZehL.jpg",
        category: "placas-video",
        brand: "nvidia",
        featured: false,
        description: "Placa de Vídeo NVIDIA GeForce RTX 4060 Ti 8GB GDDR6"
    },
    {
        id: 12,
        name: "Placa de Vídeo RX 7700 XT 12GB",
        price: 2999.99,
        image: "https://images9.kabum.com.br/produtos/fotos/525889/placa-de-video-rx-7700-xt-gaming-oc-12g-amd-radeon-gigabyte-12gb-gddr6-192bits-rgb-gv-r77xtgaming-oc-12gd_1734614450_gg.jpg",
        category: "placas-video",
        brand: "amd",
        featured: false,
        description: "Placa de Vídeo AMD Radeon RX 7700 XT 12GB GDDR6"
    },

    // ===== MEMÓRIA RAM =====
    {
        id: 13,
        name: "Memória RAM 32GB DDR5 5600MHz",
        price: 649.99,
        image: "https://www.kingstonstore.com.br/cdn/shop/products/FuryDIMM1_78d8eced-0355-45f2-add0-6ddaf2d9d8bc.jpg?v=1646775760&width=1445",
        category: "memoria",
        brand: "corsair",
        featured: true,
        description: "Memória RAM Corsair Vengeance 32GB (2x16) DDR5 5600MHz"
    },
    {
        id: 14,
        name: "Memória RAM 16GB DDR4 3200MHz",
        price: 289.99,
        image: "https://www.kingstonstore.com.br/cdn/shop/files/KFBL1_7fd4a4ca-14cf-4306-a4c9-adb5a5bce979.jpg?v=1733173354",
        category: "memoria",
        brand: "kingston",
        featured: false,
        description: "Memória RAM Kingston Fury Beast 16GB (2x8) DDR4 3200MHz"
    },
    {
        id: 15,
        name: "Memória RAM 64GB DDR5 6000MHz",
        price: 1299.99,
        image: "https://m.media-amazon.com/images/I/717xrBf92wL._AC_UF894,1000_QL80_.jpg",
        category: "memoria",
        brand: "gskill",
        featured: false,
        description: "Memória RAM G.Skill Trident Z5 64GB (2x32) DDR5 6000MHz RGB"
    },
    {
        id: 16,
        name: "Memória RAM 8GB DDR4 2666MHz",
        price: 159.99,
        image: "https://a-static.mlcdn.com.br/470x352/memoria-ram-para-notebook-8gb-ddr4-pcware-whs84s8az-2666mhz/magazineluiza/227268900/e509a1186afd780ed347d7f34c60ec55.jpg",
        category: "memoria",
        brand: "crucial",
        featured: false,
        description: "Memória RAM Crucial 8GB DDR4 2666MHz para Notebook"
    },

    // ===== ARMAZENAMENTO =====
    {
        id: 17,
        name: "SSD 2TB NVMe M.2",
        price: 799.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlr3-DrBLxgXqoIg6QDFZj2sa_d1aeVl59Kw&s",
        category: "armazenamento",
        brand: "samsung",
        featured: true,
        description: "SSD Samsung 970 EVO Plus 2TB NVMe M.2, leitura 3500MB/s"
    },
    {
        id: 18,
        name: "SSD 1TB NVMe M.2",
        price: 449.99,
        image: "https://scarcom.vtexassets.com/arquivos/ids/160889/153842_1.jpg?v=638766078532800000",
        category: "armazenamento",
        brand: "western-digital",
        featured: false,
        description: "SSD Western Digital Black SN770 1TB NVMe M.2"
    },
    {
        id: 19,
        name: "HD 4TB 7200RPM",
        price: 699.99,
        image: "https://cdn.awsli.com.br/600x700/2618/2618561/produto/223151732/st4000ne001-seagate-hd-interno-sata-4tb-7200-rpm-ironwolf-pro-f3393675-zdgemhycpj.jpg",
        category: "armazenamento",
        brand: "seagate",
        featured: false,
        description: "HD Seagate IronWolf Pro 4TB 7200RPM para NAS"
    },
    {
        id: 20,
        name: "SSD 500GB SATA",
        price: 229.99,
        image: "https://m.media-amazon.com/images/I/71J7UiZKvlL.jpg",
        category: "armazenamento",
        brand: "kingston",
        featured: false,
        description: "SSD Kingston A400 500GB SATA III 2.5\""
    },

    // ===== PERIFÉRICOS =====
    {
        id: 21,
        name: "Teclado Mecânico Fizz Sunrise",
        price: 199.99,
        image: "https://cdn.awsli.com.br/2500x2500/1318/1318167/produto/215727955/k6c5d5-1-z1gvdpegnx.PNG",
        category: "perifericos",
        brand: "redragon",
        featured: false,
        description: "Teclado Mecânico Redragon Fizz RGB Switch Blue"
    },
    {
        id: 22,
        name: "Mouse Gamer Sem Fio",
        price: 249.99,
        image: "https://edifier.com.br/media/catalog/product/cache/eba5f2f163b55172c022905d0dc2efd7/g/3/g3m-4.jpg",
        category: "perifericos",
        brand: "razer",
        featured: false,
        description: "Mouse Gamer Edifier G3M Pro Sem Fio Dual Mode"
    },
    {
        id: 23,
        name: "Headset Gamer 7.1 Surround",
        price: 349.99,
        image: "https://www.logitechstore.com.br/media/catalog/product/cache/105e6f420716e0751863c4b81f527d17/h/e/headseat-g-pro-3_2.png",
        category: "perifericos",
        brand: "hyperx",
        featured: false,
        description: "Headset Gamer Logitech G Pro X 7.1 Surround Sound"
    },
    {
        id: 24,
        name: "Mousepad Gamer XXL",
        price: 99.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeV1fsya0gBpvxSTVJur9VyNT8TxXyd3vGAw&s",
        category: "perifericos",
        brand: "steelseries",
        featured: false,
        description: "Mousepad Gamer SteelSeries QcK Heavy XXL 900x400mm"
    },
    {
        id: 25,
        name: "Webcam Full HD 1080p",
        price: 299.99,
        image: "https://m.media-amazon.com/images/I/41350ojJDtL.jpg",
        category: "perifericos",
        brand: "logitech",
        featured: false,
        description: "Webcam Logitech C920s Pro Full HD 1080p com Microfone"
    },
    {
        id: 26,
        name: "Controle Xbox Series X",
        price: 449.99,
        image: "https://m.media-amazon.com/images/I/61bh+T2v7SL.jpg",
        category: "perifericos",
        brand: "microsoft",
        featured: false,
        description: "Controle Microsoft Xbox Series X Wireless Carbon Black"
    },

    // ===== MONITORES =====
    {
        id: 27,
        name: "Monitor Gamer 27' 144Hz",
        price: 1399.99,
        image: "https://www.gamemax-br.com/img/produtos/1542873214.png",
        category: "monitores",
        brand: "asus",
        featured: false,
        description: "Monitor Gamer GameMax 27' 144Hz 1ms IPS FHD"
    },
    {
        id: 28,
        name: "Monitor 32' 4K UHD",
        price: 1999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwgaiyF9F_xCZ7uCOQXY9UTWf3jRd5s9JAEw&s",
        category: "monitores",
        brand: "samsung",
        featured: false,
        description: "Monitor Samsung 32' 4K UHD 60Hz Smart TV"
    },
    {
        id: 29,
        name: "Monitor Ultrawide 34'",
        price: 2599.99,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pg-nxsw34-bl016.jpg",
        category: "monitores",
        brand: "lg",
        featured: false,
        description: "Monitor LG UltraGear 34' Curvo WQHD 160Hz 1ms"
    },
    {
        id: 30,
        name: "Monitor Gamer Curvo 27'",
        price: 1699.99,
        image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/222195",
        category: "monitores",
        brand: "samsung",
        featured: false,
        description: "Monitor Gamer Samsung Odyssey G5 27' Curvo 144Hz QHD"
    },

    // ===== CADEIRAS =====
    {
        id: 31,
        name: "Cadeira Gamer Profissional",
        price: 899.99,
        image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/ihgvfhuo/33793.jpg",
        category: "cadeiras",
        brand: "dXRacer",
        featured: false,
        description: "Cadeira Gamer DXRacer Classic Series com Almofadas"
    },
    {
        id: 32,
        name: "Cadeira Gamer Racing",
        price: 699.99,
        image: "https://cdn.awsli.com.br/600x450/1677/1677101/produto/66847909/3da91ba63b.jpg",
        category: "cadeiras",
        brand: "gtplayer",
        featured: false,
        description: "Cadeira Gamer Xperience Ultra com Base Giratória"
    },
    {
        id: 33,
        name: "Cadeira Ergonômica Executiva",
        price: 599.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmIwfGAE4zqtZ3S-iKFOC_UFthWGogRWjKw&s",
        category: "cadeiras",
        brand: "flexform",
        featured: false,
        description: "Cadeira Ergonômica Flexform Gamma com Apoio Cabeça"
    },
    {
        id: 34,
        name: "Cadeira Gamer Premium",
        price: 1299.99,
        image: "https://www.comfy.com.br/media/ergofull2.webp",
        category: "cadeiras",
        brand: "noblechairs",
        featured: false,
        description: "Cadeira Gamer Comfy Ergofull 5D Premium Couro Sintético"
    },

    // ===== PC GAMER =====
    {
        id: 35,
        name: "PC Gamer RTX 4070 + i7",
        price: 8999.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mnq-bXs4uEgGo6ekA6R26xnDeCn0zP6G6LVWzAAMGVPucWu-IIcyq5LNKbdR1iijmjQ&usqp=CAU=3",
        category: "pc",
        brand: "asus",
        featured: true,
        description: "PC Gamer ASUS ROG com RTX 4070, Intel Core i7, 16GB RAM, 1TB SSD"
    },
    {
        id: 36,
        name: "PC Gamer RX 7800 XT + Ryzen 7",
        price: 7499.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPsmUu6yhI1wGBfcV09gT7J1jsrpEnE157LzEWTlr6C_uwUbfwry6zIfoyQUTqrw7SCA&usqp=CAU",
        category: "pc",
        brand: "msi",
        featured: false,
        description: "PC Gamer MSI com RX 7800 XT, AMD Ryzen 7, 16GB RAM, 1TB SSD"
    },
    {
        id: 37,
        name: "PC Gamer RTX 4060 + i5",
        price: 5499.99,
        image: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/222270",
        category: "pc",
        brand: "dell",
        featured: false,
        description: "PC Gamer Dell G15 com RTX 4060, Intel Core i5, 16GB RAM, 512GB SSD"
    },
    {
        id: 38,
        name: "PC Gamer RX 7600 + Ryzen 5",
        price: 4599.99,
        image: "https://shopinfo.vteximg.com.br/arquivos/ids/1722386-1000-1000/1.png?v=638895846525100000",
        category: "pc",
        brand: "acer",
        featured: false,
        description: "PC Gamer Acer Nitro com RX 7600, AMD Ryzen 5, 16GB RAM, 512GB SSD"
    },

    // ===== HARDWARE (Placas-mãe, Fontes, etc) =====
    {
        id: 39,
        name: "Placa-Mãe B550 ASUS",
        price: 1199.99,
        image: "https://m.media-amazon.com/images/I/81QyMksmunL._AC_UF894,1000_QL80_.jpg",
        category: "hardware",
        brand: "asus",
        featured: false,
        description: "Placa-Mãe ASUS TUF Gaming B550-PLUS AMD AM4"
    },
    {
        id: 40,
        name: "Fonte 750W CORSAIR CX750",
        price: 499.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc1462JVOHeGVpbKXyHCMAtGBPiByeHHDDww&s",
        category: "hardware",
        brand: "corsair",
        featured: false,
        description: "Fonte Corsair CX750 750W 80 Plus Bronze"
    },
    {
        id: 41,
        name: "Water Cooler 240mm Rise Mode",
        price: 349.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSR7RaILXy3i0QUcAA2HZ-LQ5S2Nvm8KCOqA&s",
        category: "hardware",
        brand: "nzxt",
        featured: false,
        description: "Water Cooler Rise Mode Pichau P240 240mm RGB"
    },
    {
        id: 42,
        name: "Gabinete Aigo TGT Atx",
        price: 299.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBDwW3BXUJKFxE6iTB9jL_GqnV5tA9VEeyQ&s",
        category: "hardware",
        brand: "coolermaster",
        featured: false,
        description: "Gabinete Gamer Aigo TGT com 3 Fans RGB, Mid Tower"
    },

    // ===== PROMOÇÕES =====
    {
        id: 43,
        name: "SSD 500GB NVMe - PROMO",
        price: 199.99,
        originalPrice: 279.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiEn7CO-jylyoyvqg6CU4ghm1fmyhJ6LQulw&s",
        category: "promocoes",
        brand: "kingston",
        featured: true,
        description: "SSD Kingston NV2 500GB NVMe M.2 - Promoção Relâmpago"
    },
    {
        id: 44,
        name: "Mouse Gamer - PROMO",
        price: 99.99,
        originalPrice: 149.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxgC5J7o4uM9MLQ4m9p5JsSD00romUDuF1w&s",
        category: "promocoes",
        brand: "redragon",
        featured: false,
        description: "Mouse Gamer Redragon Cobra M711 RGB 10000DPI - Oferta"
    },
    {
        id: 45,
        name: "Teclado Mecânico - PROMO",
        price: 179.99,
        originalPrice: 249.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT7v4_hBRpFke1LOCdKc_wpQk8rkIifTQiNw&s",
        category: "promocoes",
        brand: "redragon",
        featured: false,
        description: "Teclado Mecânico Redragon Kumara K552 RGB - Promoção"
    },
    {
        id: 46,
        name: "Headset Gamer - PROMO",
        price: 149.99,
        originalPrice: 219.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAM-jux9oXUsKdqx6XFqA32me0fOoWoTAh5w&s",
        category: "promocoes",
        brand: "havit",
        featured: false,
        description: "Headset Gamer Havit HV-H2002d 7.1 Surround - Oferta"
    },
    {
        id: 47,
        name: "Cooler para Processador Air - PROMO",
        price: 129.99,
        originalPrice: 189.99,
        image: "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pg-dks-x01blk14524.jpg",
        category: "promocoes",
        brand: "pichau",
        featured: false,
        description: "Cooler CPU Pichau Glacier X01 120mm RGB - Promocional"
    },
    {
        id: 48,
        name: "Hub USB 3.0 7 Portas - PROMO",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWz4Ky02lDn03E5KI9NMUMoQCKibcI33pjtg&s",
        category: "promocoes",
        brand: "tp-link",
        featured: false,
        description: "Hub USB 3.0 TP-Link 7 Portas com Alimentação Externa - Oferta"
    }
];

// Gerenciamento da página de produtos
document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
    setupFilters();
    setupSorting();
});

// Carregar produtos baseado nos parâmetros da URL
function loadProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('categoria');
    const search = urlParams.get('search');

    let filteredProducts = [...products];

    // Filtrar por categoria
    if (category) {
        filteredProducts = filteredProducts.filter(product =>
            product.category === category
        );

        // Atualizar título da página
        const pageTitle = document.querySelector('.page-header h1');
        if (pageTitle) {
            const categoryNames = {
                'pc': 'PC Gamer',
                'hardware': 'Hardware',
                'processadores': 'Processadores',
                'placas-video': 'Placas de Vídeo',
                'memoria': 'Memória RAM',
                'armazenamento': 'Armazenamento',
                'perifericos': 'Periféricos',
                'monitores': 'Monitores',
                'cadeiras': 'Cadeiras Gamer',
                'promocoes': 'Promoções'
            };
            pageTitle.textContent = categoryNames[category] || 'Produtos';
        }
    }

    // Filtrar por busca
    if (search) {
        const searchTerm = search.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );

        // Atualizar título da página
        const pageTitle = document.querySelector('.page-header h1');
        if (pageTitle) {
            pageTitle.textContent = `Resultados para: "${search}"`;
        }
    }

    renderProducts(filteredProducts, 'productsGrid');
    updateProductsCount(filteredProducts.length);
}

// Configurar filtros
function setupFilters() {
    const priceRange = document.getElementById('priceRange');
    const maxPrice = document.getElementById('maxPrice');
    const filterBtn = document.querySelector('.btn-filter');

    if (priceRange && maxPrice) {
        priceRange.addEventListener('input', function () {
            maxPrice.textContent = `R$ ${parseInt(this.value).toLocaleString()}`;
        });
    }

    if (filterBtn) {
        filterBtn.addEventListener('click', applyFilters);
    }
}

// Aplicar filtros
function applyFilters() {
    const priceRange = document.getElementById('priceRange');
    const maxPrice = parseInt(priceRange.value);
    const brandCheckboxes = document.querySelectorAll('.brand-filters input:checked');
    const selectedBrands = Array.from(brandCheckboxes).map(cb => cb.value);

    let filteredProducts = products.filter(product => product.price <= maxPrice);

    if (selectedBrands.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedBrands.includes(product.brand)
        );
    }

    renderProducts(filteredProducts, 'productsGrid');
    updateProductsCount(filteredProducts.length);
}

// Configurar ordenação
function setupSorting() {
    const sortSelect = document.getElementById('sort');

    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            sortProducts(this.value);
        });
    }
}

// Ordenar produtos
function sortProducts(sortBy) {
    let sortedProducts = [...products];

    switch (sortBy) {
        case 'price-asc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Relevância (padrão)
            break;
    }

    renderProducts(sortedProducts, 'productsGrid');
}

// Atualizar contador de produtos
function updateProductsCount(count) {
    const countElement = document.getElementById('productsCount');
    if (countElement) {
        countElement.textContent = count;
    }
}

// Renderizar produtos
function renderProducts(productsToRender, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    if (productsToRender.length === 0) {
        container.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 48px; color: #ddd; margin-bottom: 20px;"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente ajustar os filtros ou buscar por outros termos</p>
            </div>
        `;
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        // Verificar se tem preço promocional
        const priceDisplay = product.originalPrice
            ? `<div class="product-price-promo">
           <div>
               <span class="product-old-price">R$ ${product.originalPrice.toFixed(2)}</span>
           </div>
           <div>
               <span class="product-new-price">R$ ${product.price.toFixed(2)}</span>
               <span class="product-discount-badge">
                   -${Math.round((1 - product.price / product.originalPrice) * 100)}%
               </span>
           </div>
       </div>`
            : `<div class="product-price">R$ ${product.price.toFixed(2)}</div>`;

        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Imagem+Não+Disponível'">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                ${priceDisplay}
                <div class="product-installments">10x de R$ ${(product.price / 10).toFixed(2)} sem juros</div>
                <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        container.appendChild(productCard);
    });

    // Adicionar event listeners aos botões
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Função para adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

// Função para atualizar o contador do carrinho
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(element => {
        element.textContent = cartCount;
    });
}

// Função para mostrar notificação
function showNotification(message, type = 'success') {
    // Remove notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="close-notification">&times;</button>
    `;

    // Estilos da notificação
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
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    // Botão de fechar
    notification.querySelector('.close-notification').addEventListener('click', () => {
        notification.remove();
    });

    // Auto-remove após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Configurar busca na página de produtos
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

// E atualize a função DOMContentLoaded no produtos.js para:
document.addEventListener('DOMContentLoaded', function () {
    loadProducts();
    setupFilters();
    setupSorting();
    setupSearch(); // ← ADICIONE ESTA LINHA
});

// Configurar paginação
function setupPagination(filteredProducts) {
    const productsPerPage = 15; // 5x3 = 15 produtos por página
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const paginationContainer = document.getElementById('pagination');

    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';

    // Botão Anterior
    const prevButton = document.createElement('button');
    prevButton.className = 'page-btn';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener('click', () => changePage(currentPage - 1));
    paginationContainer.appendChild(prevButton);

    // Botões de página
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'page-btn';
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => changePage(i));
        paginationContainer.appendChild(pageButton);
    }

    // Botão Próximo
    const nextButton = document.createElement('button');
    nextButton.className = 'page-btn';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.addEventListener('click', () => changePage(currentPage + 1));
    paginationContainer.appendChild(nextButton);

    updatePaginationUI(1, totalPages);
}

// Variável global para controlar a página atual
let currentPage = 1;
let currentProducts = [];

// Mudar de página
function changePage(page) {
    const productsPerPage = 15;
    const totalPages = Math.ceil(currentProducts.length / productsPerPage);

    if (page < 1 || page > totalPages) return;

    currentPage = page;
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = currentProducts.slice(startIndex, endIndex);

    renderProducts(paginatedProducts, 'productsGrid');
    updatePaginationUI(page, totalPages);
    updateProductsCount(currentProducts.length, paginatedProducts.length, page, productsPerPage);
}

// Atualizar UI da paginação
function updatePaginationUI(currentPage, totalPages) {
    const pageButtons = document.querySelectorAll('.page-btn');

    pageButtons.forEach((button, index) => {
        button.classList.remove('active', 'disabled');

        // Botão anterior
        if (index === 0) {
            button.disabled = currentPage === 1;
            if (currentPage === 1) button.classList.add('disabled');
        }
        // Botões de página
        else if (index <= totalPages) {
            if (index === currentPage) button.classList.add('active');
        }
        // Botão próximo
        else if (index === totalPages + 1) {
            button.disabled = currentPage === totalPages;
            if (currentPage === totalPages) button.classList.add('disabled');
        }
    });
}

// Atualizar contador de produtos
function updateProductsCount(total, showing, page, perPage) {
    const countElement = document.getElementById('productsCount');
    if (countElement) {
        const start = ((page - 1) * perPage) + 1;
        const end = Math.min(page * perPage, total);
        countElement.textContent = `${start}-${end} de ${total}`;
    }
}

// ATUALIZE a função loadProducts() para usar paginação:
function loadProducts() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('categoria');
    const search = urlParams.get('search');

    let filteredProducts = [...products];

    // Filtrar por categoria
    if (category) {
        filteredProducts = filteredProducts.filter(product =>
            product.category === category
        );

        // Atualizar título da página
        const pageTitle = document.querySelector('.page-header h1');
        if (pageTitle) {
            const categoryNames = {
                'pc': 'PC Gamer',
                'hardware': 'Hardware',
                'processadores': 'Processadores',
                'placas-video': 'Placas de Vídeo',
                'memoria': 'Memória RAM',
                'armazenamento': 'Armazenamento',
                'perifericos': 'Periféricos',
                'monitores': 'Monitores',
                'cadeiras': 'Cadeiras Gamer',
                'promocoes': 'Promoções'
            };
            pageTitle.textContent = categoryNames[category] || 'Produtos';
        }
    }

    // Filtrar por busca
    if (search) {
        const searchTerm = search.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );

        // Atualizar título da página
        const pageTitle = document.querySelector('.page-header h1');
        if (pageTitle) {
            pageTitle.textContent = `Resultados para: "${search}"`;
        }
    }

    // Atualizar produtos atuais e configurar paginação
    currentProducts = filteredProducts;
    setupPagination(filteredProducts);
    changePage(1); // Mostrar primeira página
}