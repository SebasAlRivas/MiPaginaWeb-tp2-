document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje, ' + document.getElementById('nombre').value + '! Te responderé pronto.');
    this.reset();
});