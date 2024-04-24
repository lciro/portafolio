// Función para desplazar la página al hacer clic en un enlace del menú
function scrollToSection(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace

    // Obtiene la altura del encabezado
    var headerHeight = document.querySelector('header').offsetHeight;

    // Obtiene el ID de la sección a la que se desplazará
    var targetId = this.getAttribute('href').substring(1);

    // Si el ID es 'top', la página se desplazará a la parte superior
    var targetPosition = targetId === 'top' ? 0 : document.getElementById(targetId).offsetTop - headerHeight;

    // Desplaza la página al lugar donde la sección es visible debajo del encabezado
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Desplazamiento suave
    });
}

// Obtiene todos los enlaces del menú
var menuLinks = document.querySelectorAll('header nav ul li a');

// Agrega un evento de clic a cada enlace del menú
menuLinks.forEach(function(link) {
    link.addEventListener('click', scrollToSection);
});
