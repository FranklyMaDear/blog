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
// Προσθήκη στο υπάρχον script.js

// Digital Products functionality
function initializeProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                productItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
}

// Initialize όταν φορτωθεί η σελίδα
document.addEventListener('DOMContentLoaded', function() {
    initializeProductFilters();
    
    // Υπάρχον code...
});

// Purchase simulation
function simulatePurchase(productName) {
    const loadingStates = ['🔄 Processing...', '💳 Verifying payment...', '📦 Preparing download...', '✅ Almost done...'];
    let currentState = 0;
    
    const interval = setInterval(() => {
        if (currentState < loadingStates.length) {
            console.log(loadingStates[currentState]);
            currentState++;
        } else {
            clearInterval(interval);
            console.log(`🎉 Purchase complete! Thank you for buying ${productName}`);
        }
    }, 1000);
}
