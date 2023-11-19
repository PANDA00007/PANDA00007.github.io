document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío predeterminado del formulario

        // Limpiar los campos después de enviar el formulario
        const inputFields = document.querySelectorAll('.input-box input');
        inputFields.forEach(function(input) {
            input.value = ''; // Establecer el valor del campo en vacío
        });

        // Aquí podrías agregar el código para enviar los datos del formulario (si es necesario)
        // ...

        // O mostrar un mensaje de confirmación, redirigir, etc.
        // ...
    });
});
