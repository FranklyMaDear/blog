// Βασική JavaScript για animations και interactivity
document.addEventListener('DOMContentLoaded', function() {
    
    // Animated elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    // Observe all category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.animationPlayState = 'paused';
        observer.observe(card);
    });

    // Add click effects
    document.querySelectorAll('.category-card, .nav-btn').forEach(element => {
        element.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Random emoji animation for fun
    const emojis = ['✨', '🌟', '🎉', '🔥', '💫', '⭐', '💖', '🚀'];
    const animatedEmoji = document.querySelector('.animated-emoji');
    
    if (animatedEmoji) {
        setInterval(() => {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            animatedEmoji.style.transform = 'scale(0.8)';
            setTimeout(() => {
                animatedEmoji.textContent = randomEmoji;
                animatedEmoji.style.transform = 'scale(1)';
            }, 150);
        }, 3000);
    }
});

// Simple loading state for buttons
function showLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="loading"></span> Φόρτωση...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
    }, 1500);
}
