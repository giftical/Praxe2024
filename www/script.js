document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.slideButton');
    const gif = document.querySelector('.slideGif');

    button.addEventListener('click', () => {
        gif.classList.toggle('active');
    });
});