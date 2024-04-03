"use strict";

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const contenidos = document.querySelectorAll('.bloques');
    

    items.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('active')) {
                // Si el elemento no tiene la clase 'active'
                items.forEach(element => {
                    // Quita la clase 'active' de todos los elementos
                    element.classList.remove('active');
                });
                contenidos.forEach(contenido => {
                    // Oculta todos los contenidos
                    contenido.classList.add('none');
                });
                item.classList.add('active'); // Agrega la clase 'active' al elemento clickeado
                var bloqueSeleccionado = document.querySelectorAll('.item.active .bloques')
                console.log(bloqueSeleccionado);
                bloqueSeleccionado.forEach(elemento =>{
                    elemento.classList.remove('none');
                });
            } else {
                // Si el elemento ya tiene la clase 'active', quítala
                item.classList.remove('active');
                contenidos.forEach(contenido => {
                    // Oculta los contenidos
                    contenido.classList.add('none');
                });
            }
        });
    });
});

