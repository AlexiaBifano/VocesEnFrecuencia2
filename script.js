// JavaScript para manejar el menú móvil
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// Evento de clic para alternar la visibilidad de la lista de navegación
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});


// Carrusel automático
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

// Función para mostrar el slide actual
function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// Función para avanzar automáticamente los slides
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Avanzar al siguiente slide
    showSlide(currentSlide);
}

// Iniciar el carrusel mostrando el primer slide
showSlide(currentSlide);

// Intervalo para el auto-slide cada 5 segundos
setInterval(autoSlide, 5000);

// Funciones para navegación manual
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Avanzar al siguiente slide
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Retroceder al slide anterior
    showSlide(currentSlide);
}

// Event listeners para los botones de navegación
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);



// Card Slider
// Datos de las tarjetas para cada slider
const cardData = {
    // Cultura y Sociedad 
    cardSlider1: [
        { image: './imagen/mary-educ.jpg', title: 'La Voz de los Nahuas', description: 'En "La Voz de los Nahuas", nos adentramos en el universo mitológico de los Mexicas, una civilización que floreció en Mesoamérica antes de la llegada de los españoles. Cada episodio se centrará en una deidad específica, revelando su historia, simbolismo y significado en la cultura Nahua.', url: "https://open.spotify.com/show/68fPxQQtjNg7rMakSFjUqI "},
        { image: './imagen/val-entre.png', title: 'Revelando Generos', description: 'Revelando Géneros es un espacio que busca ampliar el panorama musical del público, al aprender sobre los orígenes, un poco de historia, exponentes e instrumentos de algunos géneros musicales, junto a ello recordar o dar a conocer bandas, artistas y canciones que enriquezcan culturalmente a los oyentes', url:"https://open.spotify.com/show/1TvtDQnMou1Eu11mEbAsAi?si=TahFPCCRRA6UPVHBjmOxsQ" },
        { image: './imagen/luisa-entre.png', title: 'Dirección al corazón', description: 'Hola, bienvenido al podcast sobre la aventura de crecer, mudarse y comenzar de nuevo. A través de experiencias personales y momentos de introspección, explorar el cambio, la soledad, la nostalgia y las conexiones que nos ayudan a encontrar nuestro camino donde cada historia es una lección y cada desafío, una oportunidad para crecer.', url: "https://open.spotify.com/show/0u05AukAp6Ex0pOhSpvnfa?si=978acaa7fb2d4964 "},
        { image: './imagen/karen-cul.jpeg', title: 'De Casa a la Universidad: Bitácora de un Foráneo', description: 'De La Casa a la Universidad: Bitácora de un Foráneo es un podcast realizado para las y los compañeros universitarios, en especial a los que tuvieron que mudarse de ciudad, estado e incluso de país para ir a estudiar. Este podcast busca contar los pros y los contras de ser un estudiante foráneo desde diferentes experiencias y dar consejos, recomendaciones e incluso palabras de aliento para los compañeros que tienen pensado dar este gran paso.', url: "https://podcasters.spotify.com/pod/show/karench" }
    ], // Coma añadida aquí para separar cardSlider1 del siguiente elemento
    
    // Educacion e Informacion
    cardSlider2: [
        { image: './imagen/nao-actu.jpeg', title: 'Voces sin tabú', description: 'Voces sin tabú es un podcast en el que se habla sobre relaciones y salud mental. Un espacio en el que diferentes personas nos comparten su experiencia y nos dan una reflexión que a todos no puede servir', url: " https://open.spotify.com/show/0xufNj4GO3uNqNHgOfTBKe " },
        { image: './imagen/karol-educ.png', title: 'Amor en altibajos ', description: 'Explora las complejidades de las relaciones amorosas, abordando temas como las crisis, los momentos críticos y las estrategias para superar dificultades en pareja. Cada episodio ofrece consejos prácticos, reflexiones y testimonios de parejas, con el objetivo de ayudar a las personas a entender y fortalecer sus relaciones en medio de los altibajos naturales del amor.', url: "⁠https://open.spotify.com/show/0eVgmr8sMlS4YkiANmmmiF" },
        { image: './imagen/f2-educ.jpeg', title: 'Renacer Propio', description: 'Te Inspiraremos a reconocer su valor y amor propio, mostrándote que es posible salir de relaciones tóxicas y vivir una vida plena sin depender de una pareja amorosa o alguna amistad que te quita tu propio brillo.', url: "https://open.spotify.com/show/07DkpY5d4qqbCbKYpu7XEm?si=cG4ISdjnSN-3vritFSH9Lg " },
        { image: './imagen/jesus.png', title: 'Tragedia en busca de la gloria', description: 'En este podcast se contarán diversas historias trágicas ocurridas en los deportes, donde estos atletas eran o empezaban a hacer reconocidos entre el público pero, lamentablemente la vida les dio un giro inesperado.', url: "https://open.spotify.com/user/31m2zrpn7yq2ztnrvltm5z5qdsaa?si=hR6fZkMGT6OoFa854EQIjA " },
        { image: './imagen/jorge-educ.png', title: 'El mundo detrás de la puerta', description: 'Podcast donde se cuentan caos de crímenes que impactaron a la sociedad ', url: "https://open.spotify.com/episode/0qZvg5AezV5g8xnQEi5SbV?si=sCleksfRSB-Vy73EL7iOCw " }
    ],

    // Entretenimiento y Arte
    cardSlider3: [
        { image: './imagen/joso-entre.png', title: 'Telarañas Universales ', description: 'Hola, sean bienvenidos a este su programa Telarañas Universales, este espacio es dedicado a compartir con ustedes las diferentes variantes de Spider-man a través del multiverso', url: "https://open.spotify.com/show/4xc1mEsF5AShTYwvMM9HOh?si=SJvoEgjfQW2OQmQIf2OWow " },
        { image: './imagen/fabi-entre.png', title: '⁠Líricamente Irreverente', description: 'Líricamente irreverente es un podcast donde presentamos música con temática de crítica social y como con estas canciones han sido un mensaje de consciencia para la sociedad.', url: "⁠https://open.spotify.com/show/1MxuLf5uxQG7xw57TP49kw?si=bsTjRSsIQiufkAzyXh_BUg" },
        { image: './imagen/andy-entre.png', title: 'Anomalia 37', description: 'Anomalía 37 nos lleva a un universo postapocalíptico donde una niña de 12 años, superdotada y con una condición que la obliga a usar audífonos, percibe fenómenos que otros ignoran. En su lucha por sobrevivir, encuentra a Edwin y juntos enfrentan criaturas peligrosas y el oscuro origen de un virus que amenaza múltiples realidades', url: "https://open.spotify.com/show/555w6L0KtvuHwAUoVrahMl?si=GRZQMvFxQUCEPXhIGsSPog " },
        { image: './imagen/juan-entre.png', title: 'Ecos de la melancolía', description: 'Ecos de la melancolía es un podcast un espacio para dar a conocer más a detalle música rock, indie, entre muchas otras dando a conocer un poco mas sobre los artistas y la letra de sus canciones', url: "https://open.spotify.com/show/6wk1aB93u8RBuoF9fzO156 " },
        { image: './imagen/lalo-entre.jpeg', title: 'La vida con Lalo', description: 'Un podcast de anécdotas con humor negro, que refleja que hasta en las peores de las circunstancias puedes ver lo gracioso en la vida, con una dinámica de distintos anfitriones para hablar de temas en específico', url: "https://open.spotify.com/show/1uLKRdV3mBUXWfFIxQ08XD?si=61Ji97VyR96bxtMxvyu8JQ" },
        { image: './imagen/f3-entre.jpeg', title: 'Ecos del Cosmo', description: 'Un podcast donde exploramos los misterios del cosmos y buscamos una explicación a lo ocurrido en la astrología y cual es el impacto en nuestras vidas. Estrellas , destino, camino.', url: "https://open.spotify.com/show/5NEDiI7LHDT5AUAvy8L01o"},
        { image: './imagen/isma-entre.png', title: 'La cueva del pequeñín', description: 'Es un podcast donde se cuenta las historias más aterradoras sobre duendes, gnomos y hermitaños, historia que te harán sudar de miedo, que no te dejarán dormir por las noches e historia muy fuera de esta mundo.', url: "https://open.spotify.com/show/0mRMFFXCGBEatBbebSiUn9?si=fwPj9SnuS6ut6me_MzErRg" }
    ],

    // Entrevistas y Testimonios
    cardSlider4: [
        { image: './imagen/diana-tes.png', title: 'Voces del mundo', description: 'En “voces del mundo” conoceremos la vida de los estudiantes foráneos, donde descubriremos sus experiencias personales, ofreciendo consejos útiles para futuros estudiantes, y fomentar el intercambio cultural. Y motivar a las personas a estudiar en Puebla.', url: "https://podcasters.spotify.com/pod/show/voces-del-mundo" },
        { image: './imagen/josh-tes.png', title: 'Lejos de casa', description: 'Un podcast donde podremos escuchar a los foraneos y personas que han salido de su hogar en busqueda de sus sueños y metas, contandonos asi sus experiencias', url: "https://open.spotify.com/show/5UtJCKBHQahFMdCZH2l6n2?si=dAWjC6tPSq-qyi3nHQiMtg"},
        { image: './imagen/dani-tes.png', title: 'Depportando', description: '"Hola a depportando" es un podcast que celebra las vidas y logros de deportistas mexicanos. A través de relatos íntimos y entrevistas, se exploran sus trayectorias, desafíos y triunfos, revelando la pasión que los impulsa. Desde figuras icónicas hasta talentos emergentes, cada episodio invita a inspirarse en sus experiencias y a conocer el lado humano del deporte en México.', url: "https://open.spotify.com/show/2k0EFp5r5XJKBn22tTp719?si=GRNXnpNGRDCNMiiaBrh3sw" },
        { image: './imagen/f1-tes.jpeg', title: 'Zona de juego', description: 'Explora lo mejor del futbol en un solo lugar. Análisis de los partidos, historias detrás de los jugadores y debates sobre las figuras más destacadas del deporte. Únete cada semana para vivir la pasión del futbol sin limites.', url: "https://open.spotify.com/show/34CFI6oWqNlYDfa9yb0G95" },
        
    ],

    // Actualidad
    cardSlider5: [
        { image: './imagen/aylen-act.png', title: 'Carreteras en Alerta', description: 'Descripción Actualidad 1' },
        { image: './imagen/jovani-act.jpeg', title: ' La tecnología en la educación', description: 'Avance acerca de la tecnología en la educación lo que debes saber acerca de como la tecnología transforme la educación desde metodologías hasta la innovación.', url: "https://open.spotify.com/episode/27qtFnVdzbcnzxmTjeE36Y?si=3hjMxgHaSpuoytWMqDngzw&t=0"},
        { image: 'https://via.placeholder.com/300x200', title: 'Actualidad 3', description: 'Descripción Actualidad 3' }
    ]
};


// Función para agregar las tarjetas a cada slider
function addCards(sliderId, data) {
    const cardSlider = document.getElementById(sliderId);
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${item.image}" alt="Card Image">
            <a href="${item.url}" target="_blank" class="card-button">Spotify</a>
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
            </div>`;
        
        cardSlider.appendChild(card);
    });
}


// Agregar tarjetas a cada slider
for (const [sliderId, data] of Object.entries(cardData)) {
    addCards(sliderId, data);
}

// Funciones para navegar entre los sliders
let currentPosition = {};

function slideRight(sliderId) {
    if (!currentPosition[sliderId]) {
        currentPosition[sliderId] = 0;
    }
    const cardSlider = document.getElementById(sliderId);
    const cardWidth = 320; // Ajusta el ancho de la tarjeta según sea necesario
    if (currentPosition[sliderId] > -(cardSlider.children.length - 1) * cardWidth) {
        currentPosition[sliderId] -= cardWidth;
        cardSlider.style.transform = `translateX(${currentPosition[sliderId]}px)`;
    }
}

function slideLeft(sliderId) {
    if (!currentPosition[sliderId]) {
        currentPosition[sliderId] = 0;
    }
    const cardSlider = document.getElementById(sliderId);
    const cardWidth = 320; // Ajusta el ancho de la tarjeta según sea necesario
    if (currentPosition[sliderId] < 0) {
        currentPosition[sliderId] += cardWidth;
        cardSlider.style.transform = `translateX(${currentPosition[sliderId]}px)`;
    }
}



document.querySelector('.register-btn').addEventListener('click', function(event) {
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput.value) {
        alert("Por favor, introduce tu correo electrónico.");
        event.preventDefault(); // Evita que el formulario se envíe
    } else {
        alert("Gracias por registrarte!");
        // Aquí puedes agregar la lógica para enviar el formulario
    }
});
