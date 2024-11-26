const translations = {
    es: {
        title: "Bienvenido a mi portafolio",
        description: "Soy un desarrollador web con experiencia en proyectos de diversas tecnologías.",
        aboutTitle: "¿Quién soy?",
        aboutText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae voluptatum ullam neque minima...",
        contactTitle: "Contacto",
        formName: "Nombre:",
        formEmail: "Email:",
        formMessage: "Mensaje:",
        formSubmit: "Enviar",
        formReset: "Borrar",
        language: "Idioma"
    },
    en: {
        title: "Welcome to my portfolio",
        description: "I am a web developer with experience in projects using various technologies.",
        aboutTitle: "Who am I?",
        aboutText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae voluptatum ullam neque minima...",
        contactTitle: "Contact",
        formName: "Name:",
        formEmail: "Email:",
        formMessage: "Message:",
        formSubmit: "Submit",
        formReset: "Reset",
        language: "Language"
    },
    fr: {
        title: "Bienvenue sur mon portfolio",
        description: "Je suis un développeur web avec de l'expérience dans des projets utilisant différentes technologies.",
        aboutTitle: "Qui suis-je?",
        aboutText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quae voluptatum ullam neque minima...",
        contactTitle: "Contact", // Aquí se corrigió
        formName: "Nom:",
        formEmail: "Email:",
        formMessage: "Message:",
        formSubmit: "Envoyer",
        formReset: "Réinitialiser",
        language: "Langue"
    }
};

function changeLanguage(language) {
    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('description').textContent = translations[language].description;
    document.getElementById('aboutTitle').textContent = translations[language].aboutTitle;
    document.getElementById('aboutText').textContent = translations[language].aboutText;
    document.getElementById('contactTitle').textContent = translations[language].contactTitle;
    document.querySelector("label[for='name']").textContent = translations[language].formName;
    document.querySelector("label[for='email']").textContent = translations[language].formEmail;
    document.querySelector("label[for='message']").textContent = translations[language].formMessage;
    document.querySelector("input[type='submit']").value = translations[language].formSubmit;
    document.querySelector("input[type='reset']").value = translations[language].formReset;

    document.documentElement.lang = language;
}

// Obtener el idioma del navegador del usuario
const userLanguage = navigator.language || navigator.userLanguage;

// Verificar si el idioma del usuario está disponible en las traducciones
if (translations.hasOwnProperty(userLanguage)) {
    // Cambiar el idioma a través de la función changeLanguage
    changeLanguage(userLanguage);
} else {
    // Si el idioma del usuario no está disponible, establecer un idioma predeterminado
    const defaultLanguage = 'en';
    changeLanguage(defaultLanguage);
}
