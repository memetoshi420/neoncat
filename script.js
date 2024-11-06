// Copy contract address functionality
function copyAddress() {
    const address = document.querySelector('.contract-address').textContent;
    navigator.clipboard.writeText(address).then(() => {
        const button = document.querySelector('.copy-button');
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add random flicker effect to neon elements
const neonElements = document.querySelectorAll('.neon-text');
neonElements.forEach(element => {
    setInterval(() => {
        if (Math.random() < 0.01) { // 1% chance to flicker
            element.style.opacity = '0.7';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 50);
        }
    }, 100);
}); 