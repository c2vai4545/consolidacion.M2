/* Este codigo JavaScript agrega un listener al elemento form con el id 'contactForm'. Cuando el form 
sea enviado, la fucion provista como segundo argumento sera ejecutada. */
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Formulario enviado con éxito!');
});
