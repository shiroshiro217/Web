const image = document.querySelector('.image-section img');
// image = 'img/bear.jpg'

window.addEventListener('scroll', function() {
    const imagePosition = image.getBoundingClientRect();

    if (imagePosition.top < window.innerHeight) {
        image.classList.remove('hidden');
    }
});