

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-btn');
    menuBtn.innerHTML = '&#9776;'; // Icono de hamburguesa
    document.body.appendChild(menuBtn);

    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    // Cerrar el menú desplegable cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
            navbar.classList.remove('show');
        }
    });
});
