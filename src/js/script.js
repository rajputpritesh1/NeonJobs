// Add animation class when element is in viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.glass-card, .stat-number, .job-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(elementPosition < screenPosition) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Add floating elements dynamically
document.addEventListener('DOMContentLoaded', function() {
    const shapes = ['<i class="fas fa-code"></i>', '<i class="fas fa-microchip"></i>', '<i class="fas fa-server"></i>', 
                    '<i class="fab fa-react"></i>', '<i class="fab fa-node-js"></i>', '<i class="fas fa-database"></i>'];
    
    for(let i = 0; i < 12; i++) {
        const shape = document.createElement('div');
        shape.className = 'floating-element neon-accent';
        shape.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
        shape.style.fontSize = (Math.random() * 20 + 10) + 'px';
        shape.style.left = Math.random() * 100 + 'vw';
        shape.style.top = Math.random() * 100 + 'vh';
        shape.style.animationDuration = (Math.random() * 10 + 10) + 's';
        shape.style.animationDelay = (Math.random() * 5) + 's';
        document.body.appendChild(shape);
    }
});
