// Configuration
const CONFIG = {
    typingSpeed: 100,
    typingDelay: 2000,
    words: [
        "Full-Stack Developer",
        "Systems Architect",
        "Creative Coder",
        "Open Source Contributor"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initNetworkCanvas();
    initNavbar();
    initTypingEffect();
    initScrollAnimations();
    initMobileMenu();
    initForms();
});

/* =========================================
   1. CUSTOM CURSOR
   ========================================= */
function initCursor() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');
    const hoverElements = document.querySelectorAll('a, button, [data-cursor="hover"]');

    if (!cursorDot || !cursorOutline) return;

    // Follow mouse
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth outline animation
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effects
    hoverElements.forEach(item => {
        item.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor-hover');
        });
        item.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor-hover');
        });
    });
}

/* =========================================
   2. NETWORK CANVAS BACKGROUND
   ========================================= */
function initNetworkCanvas() {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const connectionDistance = 120;

    const colors = ['#0ea5e9', '#8b5cf6', '#10b981', 'rgba(255,255,255,0.1)']; // Cyan, Purple, Green, White-ish

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', () => {
        resize();
        initParticles();
    });
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.8;
            this.vy = (Math.random() - 0.5) * 0.8;
            this.radius = Math.random() * 2 + 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        // Number of particles depends on screen size to maintain performance
        const particleCount = Math.floor((width * height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Interactive mouse repulse
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();

            // Mouse repulse interaction
            if (mouse.x && mouse.y) {
                let dx = mouse.x - particles[i].x;
                let dy = mouse.y - particles[i].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    particles[i].x -= dx * 0.05;
                    particles[i].y -= dy * 0.05;
                }
            }

            particles[i].draw();

            // Connect nearest nodes
            for (let j = i + 1; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(14, 165, 233, ${1 - distance / connectionDistance})`; // primary color fade
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    initParticles();
    animate();
}

/* =========================================
   3. NAVBAR SCROLL EFFECT
   ========================================= */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Navbar styling on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlighting based on scroll position
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
}

/* =========================================
   4. TYPING EFFECT (HERO)
   ========================================= */
function initTypingEffect() {
    const textElement = document.querySelector('.typing-text');
    if (!textElement) return;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = CONFIG.words[wordIndex];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = CONFIG.typingSpeed;
        if (isDeleting) typeSpeed /= 2;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = CONFIG.typingDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % CONFIG.words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000); // Start delay
}

/* =========================================
   5. SCROLL ANIMATIONS (Intersection Observer)
   ========================================= */
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you want it to trigger only once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

/* =========================================
   6. MOBILE MENU
   ========================================= */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    const icon = hamburger?.querySelector('i');

    if (!hamburger || !mobileMenu) return;

    function toggleMenu() {
        mobileMenu.classList.toggle('open');
        if (mobileMenu.classList.contains('open')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    }

    hamburger.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
}

/* =========================================
   7. FORM HANDLING (WEB3FORMS)
   ========================================= */
function initForms() {
    const contactForm = document.getElementById('contact-form');
    const enquiryForm = document.getElementById('service-enquiry-form');

    const handleFormSubmit = async (e, title) => {
        e.preventDefault();
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Save original button content across forms
        const originalBtnContent = submitBtn.innerHTML;

        // Visual feedback
        submitBtn.innerHTML = `<span>Sending...</span> <i class='bx bx-loader-alt bx-spin'></i>`;
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert(`${title} was sent successfully! I will reach out to you shortly.`);
                form.reset();
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please check your network and try again.');
        } finally {
            submitBtn.innerHTML = originalBtnContent;
            submitBtn.disabled = false;
        }
    };

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'Message'));
    }

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => handleFormSubmit(e, 'Enquiry'));
    }
}
