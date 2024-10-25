function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === '123' && password === '123') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('cv-content').style.display = 'block';
        animateSkillBars();
    } else {
        alert(document.body.getAttribute('data-lang') === 'en' ? 
            'Invalid credentials. Please try again.' : 
            'Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.');
    }
}

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
