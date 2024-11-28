document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('gallery');
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '');
    
    let imagePrefix;
    switch (currentPage) {
        case 'bicicleteada':
            imagePrefix = 'bicicleteada-galeria-';
            break;
        case 'expo-rural':
            imagePrefix = 'expo-';
            break;
        case 'lectura-por-placer':
            imagePrefix = 'lpp-galeria-';
            break;
        case 'parlamento-estudiantil':
            imagePrefix = 'parlamento-galeria-';
            break;
        case 'prensa-difusion':
            imagePrefix = 'prensa-galeria-';
            break;
        case 'tisa':
            imagePrefix = 'tisa-galeria-';
            break;
        default:
            imagePrefix = 'default-galeria-';
    }

    const imageDirectory = `images/${currentPage}/`;
    let imageIndex = 1;

    function loadImage() {
        const imagePath = `${imageDirectory}${imagePrefix}${imageIndex}.webp`;
        const img = document.createElement('img');
        img.src = imagePath;
        img.classList.add('gallery-item', 'animate__animated', 'animate__fadeIn');

        img.onerror = function() {
            // Detenemos el proceso si no se encuentra la imagen.
            console.log(`No se encontró la imagen: ${imagePath}`);
        };

        img.onload = function() {
            imageContainer.appendChild(img);
            imageIndex++;
            loadImage(); // Llama a la función para intentar cargar la siguiente imagen.
        };
    }

    // Inicia la carga de imágenes.
    loadImage();
});
