const listaProdutos = [
    // --- PEIXES (10 itens) ---
    { id: 1, cat: "peixes", classe: "acara", nome: "Acará Disco Blue", preco: "180,00", icon: "🐠" },
    { id: 2, cat: "peixes", classe: "neon", nome: "Neon Cardinal", preco: "4,50", icon: "🐟" },
    { id: 3, cat: "peixes", classe: "bandeira", nome: "Bandeira Marmorato", preco: "28,00", icon: "🐠" },
    { id: 4, cat: "peixes", classe: "guppy", nome: "Guppy Show", preco: "15,00", icon: "🐟" },
    { id: 5, cat: "peixes", classe: "molinesia", nome: "Molinésia Negra", preco: "12,00", icon: "🐠" },
    { id: 6, cat: "peixes", classe: "betta", nome: "Betta Halfmoon Special", preco: "45,00", icon: "🐟" },
    { id: 7, cat: "peixes", classe: "corydora", nome: "Corydora Albina", preco: "12,00", icon: "🐡" },
    { id: 8, cat: "peixes", classe: "kinguio", nome: "Kinguio Oranda Red", preco: "85,00", icon: "🐠" },
    { id: 9, cat: "peixes", classe: "mato-grosso", nome: "Mato Grosso Véu", preco: "8,00", icon: "🐟" },
    { id: 10, cat: "peixes", classe: "ramirezi", nome: "Ramirezi Electric Blue", preco: "35,00", icon: "🐠" },
    
    // --- AQUÁRIOS (10 itens) ---
    { id: 41, cat: "aquarios", classe: "extra-clear-10", nome: "Extra Clear 10L", preco: "110,00", icon: "💎" },
    { id: 42, cat: "aquarios", classe: "extra-clear-20", nome: "Extra Clear 20L", preco: "190,00", icon: "💎" },
    { id: 43, cat: "aquarios", classe: "extra-clear-40", nome: "Extra Clear 40L", preco: "350,00", icon: "💎" },
    { id: 61, cat: "aquarios", classe: "curvo-10", nome: "Curvo Frontal 10L", preco: "145,00", icon: "🌊" },
    { id: 62, cat: "aquarios", classe: "curvo-30", nome: "Curvo Frontal 30L", preco: "280,00", icon: "🌊" },
    { id: 71, cat: "aquarios", classe: "nano-reef", nome: "Nano Reef Pro 15L", preco: "420,00", icon: "🏖️" },
    { id: 72, cat: "aquarios", classe: "beteira", nome: "Beteira de Luxo 2L", preco: "45,00", icon: "💠" },
    { id: 73, cat: "aquarios", classe: "sextavado", nome: "Sextavado Decor", preco: "160,00", icon: "💎" },
    { id: 74, cat: "aquarios", classe: "hospital", nome: "Aquário Hospital 5L", preco: "60,00", icon: "🏥" },
    { id: 75, cat: "aquarios", classe: "plug-play", nome: "Smart Tank 50L (Full)", preco: "1.250,00", icon: "📱" },

    // --- FILTROS (10 itens) ---
    { id: 81, cat: "filtros", classe: "hangon-100", nome: "Hang-on 100 L/H", preco: "65,00", icon: "⚙️" },
    { id: 82, cat: "filtros", classe: "hangon-300", nome: "Hang-on XP 300 L/H", preco: "120,00", icon: "⚙️" },
    { id: 83, cat: "filtros", classe: "hangon-600", nome: "Hang-on Max 600 L/H", preco: "210,00", icon: "⚙️" },
    { id: 84, cat: "filtros", classe: "canister-mini", nome: "Mini Canister 400 L/H", preco: "380,00", icon: "📦" },
    { id: 85, cat: "filtros", classe: "canister-pro", nome: "Canister Pro 1200 L/H", preco: "850,00", icon: "📦" },
    { id: 86, cat: "filtros", classe: "interno-sub", nome: "Filtro Interno Submerso", preco: "45,00", icon: "🌀" },
    { id: 87, cat: "filtros", classe: "esponja", nome: "Filtro de Esponja Bio", preco: "25,00", icon: "🧽" },
    { id: 88, cat: "filtros", classe: "uv-cleaner", nome: "Filtro UV Esterilizador", preco: "290,00", icon: "🟣" },
    { id: 89, cat: "filtros", classe: "sump-box", nome: "Sump Lateral Custom", preco: "180,00", icon: "📐" },
    { id: 90, cat: "filtros", classe: "skimmer", nome: "Protein Skimmer Nano", preco: "320,00", icon: "🧼" },

    // --- LUMINÁRIAS (10 itens) ---
    { id: 111, cat: "luminarias", classe: "led-slim-20", nome: "LED Slim White 20cm", preco: "45,00", icon: "💡" },
    { id: 112, cat: "luminarias", classe: "led-slim-40", nome: "LED Slim White 40cm", preco: "85,00", icon: "💡" },
    { id: 113, cat: "luminarias", classe: "rgb-power", nome: "RGB Power WRGB 30cm", preco: "165,00", icon: "🌈" },
    { id: 114, cat: "luminarias", classe: "rgb-pro", nome: "RGB Pro Bluetooth 60cm", preco: "480,00", icon: "📱" },
    { id: 115, cat: "luminarias", classe: "led-actinica", nome: "LED Actínica (Azul)", preco: "110,00", icon: "🔵" },
    { id: 116, cat: "luminarias", classe: "spot-plantado", nome: "Spot Plantado 10W", preco: "95,00", icon: "🌱" },
    { id: 117, cat: "luminarias", classe: "clipe-led", nome: "Clipe LED Nano", preco: "35,00", icon: "📎" },
    { id: 118, cat: "luminarias", classe: "calha-dupla", nome: "Calha Dupla T5 LED", preco: "220,00", icon: "📏" },
    { id: 119, cat: "luminarias", classe: "led-noturno", nome: "Moonlight Noturna", preco: "55,00", icon: "🌙" },
    { id: 120, cat: "luminarias", classe: "aquario-full", nome: "Painel Full Spectrum", preco: "650,00", icon: "☀️" }
];
function renderizarProdutos(produtosFiltrados) {
    const grid = document.getElementById('mainGrid');
    grid.innerHTML = "";

    produtosFiltrados.forEach(p => {
        const card = document.createElement('div');
        // Adiciona as classes para o CSS aplicar o estilo e a imagem
        card.className = `product-card ${p.cat} ${p.classe}`;
        
        card.innerHTML = `
            <div class="product-img">
                <span class="product-icon">${p.icon}</span>
            </div>
            <div class="product-info">
                <h3>${p.nome}</h3>
                <span class="price">R$ ${p.preco}</span>
                <a href="pagamento.html" class="btn-buy">Comprar</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Lógica dos Filtros
const btns = document.querySelectorAll('.filter-btn');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const categoria = btn.getAttribute('data-filter');
        const filtrados = categoria === 'all' 
            ? listaProdutos 
            : listaProdutos.filter(prod => prod.cat === categoria);
        
        renderizarProdutos(filtrados);
    });
});

// Inicializar a página
renderizarProdutos(listaProdutos);