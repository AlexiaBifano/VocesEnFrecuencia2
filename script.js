// JavaScript para manejar el menú móvil
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

// Evento de clic para alternar la visibilidad de la lista de navegación
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});




// CARRUSEL AUTOMATICO
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

// Función para mostrar el slide actual
function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active')); // Remueve la clase active de todos los slides
    slides[index].classList.add('active'); // Añade la clase active al slide actual
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
}

// Event listeners para los botones de navegación
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);





//CARD SLIDER
let currentIndex = 0;

function moveSlider(sliderId, direction) {
    const slider = document.querySelector(`#${sliderId} .card-slider`);
    const cards = slider.children;
    const totalCards = cards.length;

    currentIndex += direction;

    // Asegúrate de que el índice esté dentro del rango
    if (currentIndex < 0) {
        currentIndex = totalCards - 1; // Volver al último si está al inicio
    } else if (currentIndex >= totalCards) {
        currentIndex = 0; // Volver al inicio si está al final
    }

    // Mueve el slider
    const offset = -currentIndex * (300 + 15); // 300 es el ancho de la tarjeta y 15 el espacio entre ellas
    slider.style.transform = `translateX(${offset}px)`;
}

// Restablecer el índice cuando la ventana se redimensiona para una experiencia responsiva
window.addEventListener('resize', () => {
  document.querySelectorAll('.slider-container').forEach(container => {
      container.setAttribute('data-current-index', 0);
      const slider = container.querySelector('.slider');
      const cardsPerView = window.innerWidth < 768 ? 1 : 3;
      const width = slider.clientWidth / cardsPerView;
      slider.style.transform = `translateX(0px)`;
  });
});



//CONTACTO
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

