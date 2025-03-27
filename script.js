function changeColor() {
    // Animation des cœurs
    createHearts();

    // Changer la couleur du fond en dégradé
    document.body.style.transition = 'background 1s ease-in-out';
    const colors = ['#FFB6C1', '#FF69B4', '#FF1493', '#FF6347'];
    document.body.style.background = `linear-gradient(45deg, ${colors[Math.floor(Math.random() * colors.length)]}, ${colors[Math.floor(Math.random() * colors.length)]})`;
}

function createHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.classList.add('hearts-container');
    document.body.appendChild(heartsContainer);

    const numHearts = 10;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('span');
        heart.textContent = '💖';
        heart.classList.add('heart');
        heartsContainer.appendChild(heart);
        
        // Animation pour les cœurs
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        heart.style.animation = `heartAnimation 1.5s ease-in-out forwards ${i * 0.1}s`;
    }

    // Supprimer les cœurs après animation
    setTimeout(() => {
        heartsContainer.remove();
    }, 2000);
}
