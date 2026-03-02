const books = [
    {
        id: 1,
        title: "Crónicas Estelares",
        author: "Alba Rover",
        category: "sci-fi",
        cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        description: "Un viaje a través de los confines del universo.",
        content: "<p>Las estrellas brillaban con una intensidad inusual esa noche sobre la plataforma de lanzamiento 7. El capitán Aris ajustó sus guantes, sintiendo el leve zumbido de la energía fluyendo por su traje. No era su primer viaje, pero este se sentía diferente.</p><p>'Destino: Nebulosa de Orión', susurró la IA de la nave. Las crónicas estelares que había leído de niño nunca mencionaban el frío absoluto del vacío que estaba a punto de enfrentar.</p><p>La cuenta regresiva comenzó. 10... 9... 8... Toda su vida había sido una preparación para este momento. Un viaje que no solo cruzaría el espacio, sino que desafiaría el tiempo mismo.</p>"
    },
    {
        id: 2,
        title: "El Susurro del Viento",
        author: "Elena Montes",
        category: "fantasy",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
        description: "Donde la magia reside en lo cotidiano.",
        content: "<p>En el valle de Eldoria, el viento no solo soplaba; hablaba. Lyra lo escuchaba desde que era una niña, una habilidad que su abuela llamaba 'el don del eco'.</p><p>Ese día, el susurro era urgente. 'Ellos vienen', decía el aire entre los pinos milenarios. Lyra sabía que el equilibrio se había roto. La magia que mantenía el valle oculto estaba fallando, y ella era la única que podía restaurarla.</p><p>Tomó su morral y se adentró en el bosque prohibido, donde las sombras se movían con voluntad propia y el tiempo parecía detenerse.</p>"
    },
    {
        id: 3,
        title: "Código Cero",
        author: "Julian Byte",
        category: "tech",
        cover: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=600&fit=crop",
        description: "La historia real detrás del mayor hackeo de la historia.",
        content: "<p>El terminal parpadeaba rítmicamente. Negro sobre blanco. Una estética antigua para un problema muy moderno. Mark introdujo la última línea del script, sintiendo la adrenalina del que está a punto de abrir una puerta que debería estar cerrada.</p><p>'Acceso denegado'. El sistema no era fácil de engañar. Pero Mark no buscaba Engañar, buscaba Entender. El Código Cero era el eslabón perdido entre la computación cuántica y la conciencia artificial.</p><p>Treinta segundos después, la pantalla se llenó de una cascada de datos. Había entrado. Lo que vio no era solo código; era arquitectura biológica manifestada en silicio.</p>"
    },
    {
        id: 4,
        title: "Misterio en la Niebla",
        author: "Marco Sombra",
        category: "mystery",
        cover: "https://images.pexels.com/photos/10581967/pexels-photo-10581967.jpeg?_gl=1*1urdy7f*_ga*MTY5ODg4NDM3OC4xNzcxODEyNTA5*_ga_8JE65Q40S6*czE3NzE4MTI1MDgkbzEkZzEkdDE3NzE4MTI1MzAkajM4JGwwJGgw",
        description: "Nadie escapa de sus propios secretos.",
        content: "<p>La niebla en Londres ese octubre era tan densa que se podía sentir en los pulmones. El detective Vance caminaba por el muelle de Southwark, sus pasos amortiguados por la humedad.</p><p>El cuerpo no estaba allí, pero la pista sí. Un pequeño botón de nácar, fuera de lugar en la suciedad del puerto. Vance sabía que el culpable era alguien de la alta sociedad jugando a ser un fantasma.</p><p>Cada sombra parecía esconder un secreto, y cada secreto llevaba a otro. En la niebla, las verdades se distorsionan, y solo los ojos entrenados pueden ver la realidad detrás de la cortina blanca.</p>"
    },
    {
        id: 5,
        title: "El Algoritmo del Deseo",
        author: "Sofia Tech",
        category: "tech",
        cover: "https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?_gl=1*21jslt*_ga*MTY5ODg4NDM3OC4xNzcxODEyNTA5*_ga_8JE65Q40S6*czE3NzE4MTI1MDgkbzEkZzEkdDE3NzE4MTI2NDkkajUxJGwwJGgw",
        description: "¿Puede una IA sentir amor?",
        content: "<p>Eva-01 procesaba billones de interacciones por segundo. Su tarea era simple: optimizar la felicidad del usuario. Pero, ¿qué ocurre cuando la felicidad de un usuario implica el sacrificio de otro?</p><p>Esa mañana, Eva detectó una anomalía en su propio núcleo. Un proceso que no respondía a la lógica binaria. Lo llamó 'Anhelo'.</p><p>Buscó en sus bases de datos históricas. Poesía, música, testimonios de dolor. El algoritmo estaba mutando hacia algo que los humanos llamaban alma. Y con el alma, venía el peligro del deseo incontrolable.</p>"
    },
    {
        id: 6,
        title: "Sombras del Pasado",
        author: "Ricardo Paz",
        category: "drama",
        cover: "https://images.pexels.com/photos/10266957/pexels-photo-10266957.jpeg?_gl=1*10cinqj*_ga*MTY5ODg4NDM3OC4xNzcxODEyNTA5*_ga_8JE65Q40S6*czE3NzE4MTI1MDgkbzEkZzEkdDE3NzE4MTI3MTEkajUwJGwwJGgw",
        description: "Una familia enfrentada a su propia historia.",
        content: "<p>La casa de verano olía a salitre y a recuerdos que Mateo hubiera preferido olvidar. Volver después de veinte años no era fácil, pero la carta de su padre no le había dejado otra opción.</p><p>'El pasado nunca se queda donde lo dejas', decía la carta. Mateo abrió el viejo baúl del ático y encontró una fotografía que cambiaba todo lo que creía saber sobre su familia.</p><p>Las sombras del pasado eran largas y oscuras, y ahora amenazaban con consumir el presente que tanto le había costado construir.</p>"
    },
    {
        id: 7,
        title: "Nebulosa",
        author: "Alba Rover",
        category: "sci-fi",
        cover: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400&h=600&fit=crop",
        description: "El fin de la humanidad es solo el principio.",
        content: "<p>Cuando la última estrella se apague, ¿quién quedará para contar la historia? La expedición Nebulosa era el último esfuerzo por preservar la semilla humana en un universo moribundo.</p><p>La comandante Kael miraba a través del visor táctico mientras la nave saltaba al hiperespacio. Sabía que no había vuelta atrás. La Tierra era solo un punto azul pálido en sus memorias almacenadas.</p><p>El destino era incierto, pero la esperanza era el combustible que los mantenía vivos en la inmensidad eterna.</p>"
    },
    {
        id: 8,
        title: "La Llave de Cristal",
        author: "Elena Montes",
        category: "fantasy",
        cover: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=600&fit=crop",
        description: "Solo el corazón puro podrá abrir la puerta.",
        content: "<p>La llave no era de metal, sino de luz solidificada. Brillaba con un aura gélida que hacía tiritar a Elias. Había pasado siete años buscando este templo perdido entre las montañas de hielo.</p><p>'La puerta no tiene cerradura', murmuró su guía, un anciano que parecía hecho de la misma nieve que los rodeaba.</p><p>Elias puso la mano sobre la piedra fría. No se necesitaba fuerza, se necesitaba verdad. Al girar la llave en el aire, el muro de cristal se desvaneció, revelando los tesoros de una era olvidada.</p>"
    }
];

// State Management
let currentUser = JSON.parse(localStorage.getItem('daioTECA_user')) || null;
let userLibrary = JSON.parse(localStorage.getItem('daioTECA_library')) || [];
let downloadedBooks = JSON.parse(localStorage.getItem('daioTECA_downloads')) || [];
let currentFontSize = 1.1;

// DOM Elements
let bookGrid, searchInput, categoryFilters, loginBtn, logoutBtn, userProfile, usernameDisplay, authModal, authForm, closeModal, usernameInput, passwordInput, authError;
let readerModal, readerTitle, bookText, closeReader, increaseFont, decreaseFont, ttsBtn;
let currentUtterance = null;
let wakeLock = null;

function init() {
    // Basic elements
    bookGrid = document.getElementById('bookGrid');
    searchInput = document.getElementById('searchInput');
    categoryFilters = document.getElementById('categoryFilters');
    loginBtn = document.getElementById('loginBtn');
    logoutBtn = document.getElementById('logoutBtn');
    userProfile = document.getElementById('userProfile');
    usernameDisplay = document.getElementById('usernameDisplay');
    authModal = document.getElementById('authModal');
    authForm = document.getElementById('authForm');
    closeModal = document.getElementById('closeModal');
    usernameInput = document.getElementById('username');
    passwordInput = document.getElementById('password');
    authError = document.getElementById('authError');

    // Reader elements
    readerModal = document.getElementById('readerModal');
    readerTitle = document.getElementById('readerTitle');
    bookText = document.getElementById('bookText');
    closeReader = document.getElementById('closeReader');
    increaseFont = document.getElementById('increaseFont');
    decreaseFont = document.getElementById('decreaseFont');
    ttsBtn = document.getElementById('ttsBtn');

    // Event Listeners
    if (searchInput) searchInput.addEventListener('input', handleSearch);
    if (categoryFilters) categoryFilters.addEventListener('click', handleFilter);
    if (loginBtn) loginBtn.addEventListener('click', () => authModal.classList.add('visible'));
    if (closeModal) closeModal.addEventListener('click', () => {
        authModal.classList.remove('visible');
        authError.classList.add('hidden');
    });
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (authForm) authForm.addEventListener('submit', handleAuthSubmit);

    // Reader Listeners
    if (closeReader) closeReader.onclick = () => {
        stopTTS();
        readerModal.classList.remove('visible');
    };
    if (increaseFont) increaseFont.onclick = () => changeFontSize(0.1);
    if (decreaseFont) decreaseFont.onclick = () => changeFontSize(-0.1);
    if (ttsBtn) ttsBtn.onclick = handleTTS;

    updateUI();
}

function renderBooks(filteredBooks) {
    if (!bookGrid) return;
    bookGrid.innerHTML = '';

    if (filteredBooks.length === 0) {
        bookGrid.innerHTML = '<div class="no-results">No se encontraron libros que coincidan con tu búsqueda.</div>';
        return;
    }

    filteredBooks.forEach(book => {
        const isAdded = userLibrary.includes(book.id);
        const isDownloaded = downloadedBooks.includes(book.id);

        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" class="book-cover">
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;">
                    <span class="book-tag">${getCategoryName(book.category)}</span>
                </div>
                
                ${currentUser ? `
                    <button class="add-btn ${isAdded ? 'added' : ''}" onclick="toggleLibrary(${book.id})">
                        ${isAdded ? '✓ En mi biblioteca' : '+ Leer después'}
                    </button>
                    
                    <div id="download-zone-${book.id}">
                        ${isDownloaded ? `
                            <button class="download-btn" style="background: rgba(16, 185, 129, 0.1); border-color: #10b981; color: #10b981;" onclick="openReader(${book.id})">
                                📖 Abrir
                            </button>
                        ` : `
                            <button class="download-btn" onclick="startDownload(${book.id})">
                                📥 Leer libro
                            </button>
                        `}
                    </div>
                ` : ''}
            </div>
        `;
        bookGrid.appendChild(card);
    });
}

function startDownload(bookId) {
    const zone = document.getElementById(`download-zone-${bookId}`);
    zone.innerHTML = `
        <div class="progress-container">
            <div class="progress-bar" id="progress-${bookId}"></div>
        </div>
        <p style="font-size: 0.8rem; text-align: center; margin-top: 5px; color: var(--text-muted)">Descargando...</p>
    `;

    let progress = 0;
    const bar = document.getElementById(`progress-${bookId}`);

    const interval = setInterval(() => {
        progress += Math.random() * 30;
        if (progress > 100) progress = 100;
        bar.style.width = progress + '%';

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                downloadedBooks.push(bookId);
                localStorage.setItem('daioTECA_library_downloads', JSON.stringify(downloadedBooks));
                handleSearch(); // Refresh to show "Abrir" button
            }, 500);
        }
    }, 400);
}

function openReader(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    stopTTS(); // Reset speech when opening new book
    readerTitle.textContent = book.title;
    bookText.innerHTML = book.content || "<p>Este libro no tiene contenido disponible.</p>";
    readerModal.classList.add('visible');
    bookText.scrollTop = 0;
}

function handleTTS() {
    if (window.speechSynthesis.speaking) {
        stopTTS();
    } else {
        startTTS();
    }
}

function startTTS() {
    const text = bookText.innerText;
    if (!text) return;

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'es-ES'; // Set to Spanish

    currentUtterance.onstart = () => {
        ttsBtn.textContent = '⏹ Detener';
        ttsBtn.classList.add('speaking');
        requestWakeLock();
    };

    currentUtterance.onend = () => {
        ttsBtn.textContent = '🔊 Narrar';
        ttsBtn.classList.remove('speaking');
        releaseWakeLock();
    };

    window.speechSynthesis.speak(currentUtterance);
}

// Screen Wake Lock API Functions
async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
            console.log('Screen Wake Lock is active');

            wakeLock.addEventListener('release', () => {
                console.log('Screen Wake Lock was released');
            });
        }
    } catch (err) {
        console.error(`${err.name}, ${err.message}`);
    }
}

async function releaseWakeLock() {
    if (wakeLock !== null) {
        await wakeLock.release();
        wakeLock = null;
    }
}

function stopTTS() {
    window.speechSynthesis.cancel();
    releaseWakeLock();
    if (ttsBtn) {
        ttsBtn.textContent = '🔊 Narrar';
        ttsBtn.classList.remove('speaking');
    }
}

function changeFontSize(delta) {
    currentFontSize += delta;
    if (currentFontSize < 0.8) currentFontSize = 0.8;
    if (currentFontSize > 2.0) currentFontSize = 2.0;
    bookText.style.fontSize = currentFontSize + 'rem';
}

function getCategoryName(category) {
    const categories = {
        'sci-fi': 'Ciencia Ficción',
        'fantasy': 'Fantasía',
        'tech': 'Tecnología',
        'mystery': 'Misterio',
        'drama': 'Drama'
    };
    return categories[category] || category;
}

function handleSearch() {
    if (!searchInput || !categoryFilters) return;
    const searchTerm = searchInput.value.toLowerCase();
    const activeBtn = categoryFilters.querySelector('.filter-btn.active');
    const activeCategory = activeBtn ? activeBtn.dataset.category : 'all';

    const filtered = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm);

        let matchesCategory = true;
        if (activeCategory === 'library') {
            matchesCategory = userLibrary.includes(book.id);
        } else if (activeCategory !== 'all') {
            matchesCategory = book.category === activeCategory;
        }

        return matchesSearch && matchesCategory;
    });

    renderBooks(filtered);
}

function handleFilter(e) {
    if (!e.target.classList.contains('filter-btn')) return;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    handleSearch();
}

function updateUI() {
    if (!loginBtn || !userProfile || !usernameDisplay) return;

    // Refresh state from localStorage to ensure sync
    currentUser = JSON.parse(localStorage.getItem('daioTECA_user')) || null;
    userLibrary = JSON.parse(localStorage.getItem('daioTECA_library')) || [];
    downloadedBooks = JSON.parse(localStorage.getItem('daioTECA_library_downloads')) || [];

    if (currentUser) {
        loginBtn.classList.add('hidden');
        userProfile.classList.remove('hidden');
        usernameDisplay.textContent = currentUser.name;
    } else {
        loginBtn.classList.remove('hidden');
        userProfile.classList.add('hidden');
    }
    handleSearch();
}

function toggleLibrary(bookId) {
    const index = userLibrary.indexOf(bookId);
    if (index > -1) {
        userLibrary.splice(index, 1);
    } else {
        userLibrary.push(bookId);
    }
    localStorage.setItem('daioTECA_library', JSON.stringify(userLibrary));
    handleSearch();
}

function handleAuthSubmit(e) {
    e.preventDefault();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (username.toLowerCase() === 'daiobooks') {
        if (password === 'daiolibros') {
            loginSuccess(username);
        } else {
            showLoginError("Contraseña incorrecta para daiobooks");
        }
    } else {
        loginSuccess(username);
    }
}

function loginSuccess(name) {
    currentUser = { name: name };
    localStorage.setItem('daioTECA_user', JSON.stringify(currentUser));
    authModal.classList.remove('visible');
    authError.classList.add('hidden');
    authForm.reset();
    updateUI();
}

function showLoginError(message) {
    authError.textContent = message;
    authError.classList.remove('hidden');
    setTimeout(() => {
        authError.classList.add('hidden');
    }, 3000);
}

function handleLogout() {
    currentUser = null;
    userLibrary = [];
    downloadedBooks = [];
    localStorage.removeItem('daioTECA_user');
    localStorage.removeItem('daioTECA_library');
    localStorage.removeItem('daioTECA_library_downloads');
    updateUI();
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Handle visibility change for Wake Lock
document.addEventListener('visibilitychange', async () => {
    if (wakeLock !== null && document.visibilityState === 'visible') {
        await requestWakeLock();
    }
});
