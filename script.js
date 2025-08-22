 // Portfolio JavaScript - Advanced Animations and Interactions
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupScrollEffects();
        this.initializeTypingEffect();
        this.setupParticleSystem();
        this.initializeCounters();
        this.setupSkillBars();
        this.initializeContactForm();
        this.setupThemeToggle();
        this.initializeLoadingScreen();
        this.initializeTestimonialSlider();
        this.initializeStatisticsCounter();
        this.initializeNewsletterForm();
        this.initializeDownloadResume();
    }

    setupEventListeners() {
        // Navigation
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        hamburger?.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger?.classList.remove('active');
                navMenu?.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Back to top button
        const backToTopBtn = document.getElementById('back-to-top');
        backToTopBtn?.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        scrollIndicator?.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    initializeAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Add animation classes to elements
        const animatedElements = document.querySelectorAll(
            '.about-card, .skill-category, .project-card, .contact-card, .stat-item'
        );

        animatedElements.forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.style.animationDelay = `${index * 0.1}s`;
            observer.observe(el);
        });
    }

    setupScrollEffects() {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrollY = window.scrollY;
            const navbar = document.getElementById('navbar');
            const backToTopBtn = document.getElementById('back-to-top');

            // Navbar scroll effect
            if (scrollY > 100) {
                navbar?.classList.add('scrolled');
            } else {
                navbar?.classList.remove('scrolled');
            }

            // Back to top button visibility
            if (scrollY > 500) {
                backToTopBtn?.classList.add('visible');
            } else {
                backToTopBtn?.classList.remove('visible');
            }

            // Parallax effect for floating shapes
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrollY * speed);
                shape.style.transform = `translateY(${yPos}px)`;
            });

            // Active navigation link
            this.updateActiveNavLink();

            ticking = false;
        };

        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestScrollUpdate);
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    initializeTypingEffect() {
        const codeLines = document.querySelectorAll('.code-line');
        
        const typeWriter = (element, text, speed = 50) => {
            let i = 0;
            const originalText = text;
            element.textContent = '';
            
            const type = () => {
                if (i < originalText.length) {
                    element.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            };
            
            type();
        };

        // Animate code lines with delay
        setTimeout(() => {
            codeLines.forEach((line, index) => {
                const codeText = line.querySelector('.code-text');
                if (codeText) {
                    const text = codeText.textContent;
                    setTimeout(() => {
                        typeWriter(codeText, text, 30);
                    }, index * 500);
                }
            });
        }, 2000);
    }

    setupParticleSystem() {
        // Create floating particles in hero section
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const particleContainer = document.createElement('div');
        particleContainer.className = 'particle-container';
        particleContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;

        heroSection.appendChild(particleContainer);

        // Create particles
        for (let i = 0; i < 50; i++) {
            this.createParticle(particleContainer);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: float ${duration}s ${delay}s infinite linear;
        `;

        container.appendChild(particle);
    }

    initializeCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.5
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    }

    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        const observerOptions = {
            threshold: 0.5
        };

        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                    skillObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }

    initializeContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission(form);
        });

        // Add input animations
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value) {
                    input.parentElement.classList.remove('focused');
                }
            });
        });
    }

    handleFormSubmission(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            this.showNotification('Message sent successfully!', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#22c55e' : '#6366f1'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease-out;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    setupThemeToggle() {
        // Use the theme toggle button in the navbar
        const themeToggle = document.getElementById('theme-toggle');
        const themeLabelId = 'theme-label';
        let themeLabel = document.getElementById(themeLabelId);
        if (!themeLabel) {
            themeLabel = document.createElement('span');
            themeLabel.id = themeLabelId;
            themeLabel.style.marginLeft = '8px';
            themeToggle.parentNode.insertBefore(themeLabel, themeToggle.nextSibling);
        }

        const updateThemeIconAndLabel = () => {
            const icon = themeToggle.querySelector('i');
            if (document.body.classList.contains('dark-theme')) {
                icon.className = 'fas fa-sun';
                themeLabel.textContent = 'Dark';
            } else {
                icon.className = 'fas fa-moon';
                themeLabel.textContent = 'Light';
            }
        };

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            updateThemeIconAndLabel();
            this.showNotification(
                document.body.classList.contains('dark-theme') ? 'Dark mode enabled!' : 'Light mode enabled!',
                'info'
            );
        });

        // Set initial state
        updateThemeIconAndLabel();
    }

    initializeLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        
        // Hide loading screen after page load
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen?.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen?.remove();
                }, 500);
            }, 1500);
        });
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Advanced Animation Effects
class AnimationEffects {
    static createRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    static addHoverEffect(element) {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-5px) scale(1.02)';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0) scale(1)';
        });
    }

    static addParallaxEffect(element, speed = 0.5) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Particle System
class ParticleSystem {
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            count: options.count || 50,
            size: options.size || [2, 6],
            speed: options.speed || [1, 3],
            color: options.color || 'rgba(255, 255, 255, 0.3)',
            ...options
        };
        this.particles = [];
        this.init();
    }

    init() {
        for (let i = 0; i < this.options.count; i++) {
            this.createParticle();
        }
        this.animate();
    }

    createParticle() {
        const particle = {
            x: Math.random() * this.container.offsetWidth,
            y: Math.random() * this.container.offsetHeight,
            size: Math.random() * (this.options.size[1] - this.options.size[0]) + this.options.size[0],
            speedX: (Math.random() - 0.5) * this.options.speed[1],
            speedY: (Math.random() - 0.5) * this.options.speed[1],
            element: document.createElement('div')
        };

        particle.element.style.cssText = `
            position: absolute;
            width: ${particle.size}px;
            height: ${particle.size}px;
            background: ${this.options.color};
            border-radius: 50%;
            left: ${particle.x}px;
            top: ${particle.y}px;
            pointer-events: none;
        `;

        this.container.appendChild(particle.element);
        this.particles.push(particle);
    }

    animate() {
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Wrap around edges
            if (particle.x > this.container.offsetWidth) particle.x = 0;
            if (particle.x < 0) particle.x = this.container.offsetWidth;
            if (particle.y > this.container.offsetHeight) particle.y = 0;
            if (particle.y < 0) particle.y = this.container.offsetHeight;

            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });

        requestAnimationFrame(() => this.animate());
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();

    // Add ripple effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            AnimationEffects.createRippleEffect(button, e);
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.about-card, .project-card, .contact-card');
    cards.forEach(card => {
        AnimationEffects.addHoverEffect(card);
    });

    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            60% {
                transform: translateY(-5px);
            }
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes glow {
            0%, 100% {
                box-shadow: 0 0 5px rgba(99, 102, 241, 0.5);
            }
            50% {
                box-shadow: 0 0 20px rgba(99, 102, 241, 0.8);
            }
        }

        .animate-on-scroll {
            animation: fadeInUp 0.6s ease-out forwards;
        }

        .btn:hover {
            animation: pulse 0.3s ease-in-out;
        }

        .tech-icon:hover {
            animation: glow 1s ease-in-out infinite;
        }

        .floating-shapes .shape {
            animation: float 6s ease-in-out infinite;
        }

        .floating-shapes .shape:nth-child(odd) {
            animation-direction: reverse;
        }

        .code-editor:hover {
            animation: pulse 0.5s ease-in-out;
        }

        .scroll-arrow {
            animation: bounce 2s infinite;
        }

        .logo-pulse {
            animation: pulse 2s infinite;
        }

        /* Smooth transitions for all interactive elements */
        * {
            transition: all 0.3s ease;
        }

        /* Custom focus styles */
        button:focus,
        input:focus,
        textarea:focus,
        a:focus {
            outline: 2px solid var(--primary-color);
            outline-offset: 2px;
        }

        /* Loading animations */
        .loading-enter {
            animation: fadeInUp 0.5s ease-out;
        }

        .loading-exit {
            animation: fadeOut 0.5s ease-out;
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Performance optimization
const optimizePerformance = () => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const preloadLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];

    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
};

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioApp, AnimationEffects, ParticleSystem };
}