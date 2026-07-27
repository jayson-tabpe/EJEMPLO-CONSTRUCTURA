// ============ MENÚ HAMBURGUESA ============
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('mobile-open');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('mobile-open')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('mobile-open');
                const icon = menuBtn.querySelector('i');
                icon.className = 'fas fa-bars';
            });
        });
    }
});

// ============ SMOOTH SCROLL CON OFFSET (HEADER FIJO) ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// ============ FAQ ACORDEÓN ============
const faqBtns = document.querySelectorAll('.faq-btn');
faqBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        
        // Cerrar otros FAQs
        document.querySelectorAll('.faq-content').forEach(item => {
            if (item !== content) {
                item.classList.add('hidden');
                item.previousElementSibling.classList.remove('active');
                item.previousElementSibling.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Alternar el actual
        const isOpen = !content.classList.contains('hidden');
        content.classList.toggle('hidden');
        this.classList.toggle('active');
        this.setAttribute('aria-expanded', !isOpen);
    });
});

// ============ FORMULARIO DE CONTACTO ============
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const email = document.getElementById('email').value.trim();
        const distrito = document.getElementById('distrito').value;
        const mensaje = document.getElementById('mensaje').value.trim();
        
        // Validación básica
        if (!nombre || !telefono || !email) {
            formMessage.textContent = 'Por favor, completa todos los campos obligatorios.';
            formMessage.className = 'mt-4 text-center text-red-600 font-semibold';
            formMessage.classList.remove('hidden');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
            formMessage.className = 'mt-4 text-center text-red-600 font-semibold';
            formMessage.classList.remove('hidden');
            return;
        }
        
        // Simular envío
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(function() {
            formMessage.textContent = '¡Mensaje enviado correctamente! Un asesor te contactará pronto.';
            formMessage.className = 'mt-4 text-center text-green-600 font-semibold';
            formMessage.classList.remove('hidden');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Ocultar mensaje después de 5 segundos
            setTimeout(function() {
                formMessage.classList.add('hidden');
            }, 5000);
        }, 1500);
    });
}

// ============ ANIMACIÓN AL HACER SCROLL ============
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > div').forEach(section => {
    observer.observe(section);
});
