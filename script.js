document.addEventListener('DOMContentLoaded', function() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
        document.body.setAttribute('data-theme', 'dark');
    }
    
    animateSkillBars();
});

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
}

function toggleLanguage() {
    const body = document.body;
    const currentLang = body.getAttribute('data-lang');
    const newLang = currentLang === 'en' ? 'de' : 'en';
    body.setAttribute('data-lang', newLang);
    document.documentElement.lang = newLang;
}

function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-progress');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}
function toggleAttribute(attribute, options) {
    const body = document.body;
    const current = body.getAttribute(attribute);
    const next = options.find(option => option !== current);
    body.setAttribute(attribute, next);

    if (attribute === 'data-lang') {
        document.getElementById('langDisplay').textContent = next === 'en' ? 'DE' : 'EN';
    }
}