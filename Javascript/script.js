document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje, ' + document.getElementById('nombre').value + '! Te responderé pronto.');
    this.reset();
});
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