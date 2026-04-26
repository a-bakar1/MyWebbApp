// === Mobilmeny ===
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Stäng menyn när man klickar på en länk
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// === Kontaktformulär validering ===
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Förhindra sidomladdning (ingen backend än)

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        feedback.textContent = 'Alla fält måste fyllas i.';
        feedback.style.color = '#ff4d4d';
        return;
    }

    if (!isValidEmail(email)) {
        feedback.textContent = 'Ange en giltig e-postadress.';
        feedback.style.color = '#ff4d4d';
        return;
    }

    // Här skulle man kunna skicka datat till en server...
    feedback.textContent = 'Tack för ditt meddelande! Jag återkommer så snart jag kan.';
    feedback.style.color = '#00f2fe';
    form.reset();
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// === Scroll-avslöjande animation (fade-in) ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass-card, .skill-card, .project-card, .exp-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Lägg till visible state (lyssna på scroll för att trigga)
window.addEventListener('scroll', () => {
    document.querySelectorAll('.glass-card.visible, .skill-card.visible, .project-card.visible, .exp-card.visible').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    });
});