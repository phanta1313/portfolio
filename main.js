document.addEventListener('DOMContentLoaded', function() {
    
    const langButton = document.getElementById('lang');
    const mainEn = document.querySelector('.main-en');
    const mainRu = document.querySelector('.main-ru');

    let lang = localStorage.getItem("lang");

    if (lang == "RU"){
        mainEn.style.display = 'none';
        mainRu.style.display = 'block';
        langButton.innerHTML = '<i class="fas fa-language me-2"></i>RU';
    } else {
        mainEn.style.display = 'block';
        mainRu.style.display = 'none';
        langButton.innerHTML = '<i class="fas fa-language me-2"></i>EN';
    }

    function createParticles() {
        const particlesContainer = document.querySelector('.particles');
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 5 + 2;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = Math.random() * 10 + 15;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}vw`;
            particle.style.top = `${posY}vh`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();
    
    langButton.addEventListener('click', function() {
        if (mainEn.style.display === 'none') {
            mainEn.style.display = 'block';
            mainRu.style.display = 'none';
            langButton.innerHTML = '<i class="fas fa-language me-2"></i>EN';
            localStorage.setItem("lang", "EN")
        } else {
            mainEn.style.display = 'none';
            mainRu.style.display = 'block';
            langButton.innerHTML = '<i class="fas fa-language me-2"></i>RU';
            localStorage.setItem("lang", "RU")
        }
    });
});