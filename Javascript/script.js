//accion del boton enviar
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje, ' + document.getElementById('nombre').value + '! Te responderé pronto.');
    this.reset();
});

// aumenta los iconos de red
document.addEventListener("DOMContentLoaded", () => {
    const iconos = document.querySelectorAll(".icono-red");

    iconos.forEach(icono => {
        icono.addEventListener("mouseenter", () => {
            icono.style.transform = "translateY(-5px)";
            icono.style.transition = "transform 0.3s ease";
        });

        icono.addEventListener("mouseleave", () => {
            icono.style.transform = "translateY(0)";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-subir");

    // Mostrar u ocultar el botón según el scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    });

    // Desplazar hacia arriba suavemente
    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});