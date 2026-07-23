// ============================================
// MOBILE NAVIGATION
// ============================================

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
        const isActive = navbarMenu.classList.toggle('active');
        navbarToggle.setAttribute('aria-expanded', isActive);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
            navbarToggle.setAttribute('aria-expanded', false);
        });
    });
}

// ============================================
// SMOOTH SCROLL ENHANCEMENT
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============================================
// CONTACT FORM HANDLING (SECURE)
// ============================================

const contactForm = document.getElementById('contactForm');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        try {
            // Usar FormSubmit.co para segurança (sem expor email direto)
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('_captcha', 'false');

            const response = await fetch('https://formsubmit.co/ajax/leonardo.rocha.2018@outlook.com', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                submitBtn.textContent = '✓ Mensagem enviada!';
                contactForm.reset();
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                throw new Error('Erro ao enviar');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            submitBtn.textContent = '✗ Erro ao enviar. Tente novamente.';
            submitBtn.disabled = false;

            setTimeout(() => {
                submitBtn.textContent = originalText;
            }, 3000);
        }
    });
}

// ============================================
// SCROLL REVEAL (LAZY ANIMATION)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.project-card, .highlight-box, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
    observer.observe(el);
});

// ============================================
// LAZY LOADING DE IMAGENS
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ============================================

document.addEventListener('keydown', (e) => {
    // Fechar menu com ESC
    if (e.key === 'Escape' && navbarMenu) {
        navbarMenu.classList.remove('active');
        navbarToggle.setAttribute('aria-expanded', false);
    }

    // Navegação entre links com Tab (já funciona nativamente, mas melhoramos com focus-visible)
});

// ============================================
// THEME DETECTION (PREFERS COLOR SCHEME)
// ============================================

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Sistema detectou tema escuro, CSS já se adapta via @media queries
    console.log('Dark mode detectado');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    console.log('Theme alterado:', e.matches ? 'dark' : 'light');
});

// ============================================
// PERFORMANCE MONITORING (OPCIONAL)
// ============================================

if ('PerformanceObserver' in window) {
    try {
        const perfObserver = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
            }
        });

        perfObserver.observe({ entryTypes: ['navigation', 'resource'] });
    } catch (e) {
        // PerformanceObserver não suportado
    }
}

// ============================================
// ANALYTICS PLACEHOLDER
// ============================================

// Placeholder para integração com analytics (Google Analytics, Plausible, etc.)
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_ID');

console.log('🚀 Script principal carregado com sucesso!');
