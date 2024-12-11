// Animación de la caja
const animationBox = document.querySelector('.animation-box');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
    animationBox.style.transition = 'transform 2s';
    animationBox.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        animationBox.style.transform = 'rotate(0deg)';
    }, 2000);
});

// Reproducir sonido
const playSound = document.getElementById('playSound');
const audio = document.getElementById('audio');

playSound.addEventListener('click', () => {
    audio.play();
});
