function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
    }
}

const content = {
    en: {
        HeroTitle: "Hi. I'm Julian.<br>A coder.",
        HeroDescription: "Application Developer Apprentice at Swisscom."
    },
    de: {
        HeroTitle: "Hey. Ich bin Julian.<br>Ein Programmierer.",
        HeroDescription: "Applikationsentwickler Lehrling bei der Swisscom."
    }
};

let currentLang = "en";


function toggleLang() {
    currentLang = currentLang === "en" ? "de" : "en";
    
    document.getElementById("HeroTitle").innerHTML = content[currentLang].HeroTitle;
    document.getElementById("HeroDescription").textContent = content[currentLang].HeroDescription;
}