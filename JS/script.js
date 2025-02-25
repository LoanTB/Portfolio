window.addEventListener('scroll', reveal)

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (let reveal of reveals) {
        var windowHeight = window.innerHeight;
        var revealTop = reveal.getBoundingClientRect().top;
        var revealPoint = 50;

        if(revealTop < windowHeight - revealPoint){
            reveal.classList.add('active');
        } else if (reveal.id !== 'image_profil' && reveal.id !== 'profil'){
            reveal.classList.remove('active');
        }
    }

    var competencesReveals = document.querySelectorAll('.competences li');
    let animations;

    for (let i = 0; i < competencesReveals.length; i++) {
        windowHeight = window.innerHeight;
        revealTop = competencesReveals[i].getBoundingClientRect().top;
        revealPoint = 50;

        if(revealTop < windowHeight - revealPoint){
            competencesReveals[i].classList.add('competenceRevealed');
        } else {
            competencesReveals[i].classList.remove('competenceRevealed');
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const languages = {
        "Python": "180 projets",
        "Java": "15 projets",
        "JavaScript": "5 projets",
        "SQL": "10 projets",
        "PHP": "10 projets",
        "C": "10 projets",
        "Arduino": "20 projets",
        "Git": "Travail d'équipe",
        "Projet Agile": "Scrum",
        "Francais": "Langue maternelle",
        "Anglais": "Intermédiaire",
        "Espagnol": "Débutant",
        "BUT2C2A1":"Choisir des structures de données complexes adaptées au problème : Grâce à la matière \"Programmation système\", j'ai acquis les connaissances nécessaires pour comprendre les structures de données complexes telles que les arbres, les graphes et les tables de hachage. J'ai également appris à choisir la structure de données la plus adaptée en fonction du problème à résoudre.",
        "BUT2C2A2":"Utiliser des techniques algorithmiques adaptées pour des problèmes complexes : Grâce à la matière \"Analyse\", j'ai acquis les compétences nécessaires pour comprendre les algorithmes complexes tels que les algorithmes de recherche opérationnelle, les méthodes arborescentes et les algorithmes d'optimisation globale. J'ai également appris à choisir la technique algorithmique la plus adaptée en fonction du problème à résoudre.",
        "BUT2C2A3":"Comprendre les enjeux et moyens de sécurisation des données et du code : Grâce à la matière \"Sécurité systèmes et réseaux\", j'ai acquis les connaissances nécessaires pour comprendre les enjeux de la sécurisation des données et du code. J'ai également appris à mettre en place des moyens de sécurisation tels que la cryptographie, la sécurité des réseaux et la gestion des risques.",
        "BUT2C2A4":"Évaluer l’impact environnemental et sociétal des solutions proposées : Grâce à la matière \"Développement efficace\", j'ai acquis les compétences nécessaires pour évaluer l'impact environnemental et sociétal des solutions proposées. J'ai également appris à prendre en compte ces facteurs dans la conception et la mise en œuvre de solutions informatiques.",
        "BUT2C4A1":"Optimiser les modèles de données de l’entreprise : Grâce à la matière \"Développement web\", j'ai acquis les compétences nécessaires pour optimiser les modèles de données de l'entreprise. J'ai également appris à utiliser des frameworks et des bibliothèques populaires pour faciliter la gestion des données.",
        "BUT2C4A2":"Assurer la confidentialité des données (intégrité et sécurité) : Grâce à la matière \"Sécurité systèmes et réseaux\", j'ai acquis les connaissances nécessaires pour assurer la confidentialité des données en garantissant leur intégrité et leur sécurité. J'ai également appris à mettre en place des moyens de sécurisation tels que la cryptographie et la gestion des risques.",
        "BUT2C4A3":"Organiser la restitution de données à travers la programmation et la visualisation : Grâce à la matière \"Développement web\", j'ai acquis les compétences nécessaires pour organiser la restitution de données à travers la programmation et la visualisation. J'ai également appris à utiliser des outils de visualisation de données pour faciliter la compréhension des données.",
        "BUT2C4A4":"Manipuler des données hétérogènes : Grâce à la matière \"Développement web\", j'ai acquis les compétences nécessaires pour manipuler des données hétérogènes provenant de différentes sources. J'ai également appris à utiliser des outils de nettoyage et de transformation de données pour faciliter leur manipulation.",
        "BUT2C5A1":"Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information : Grâce à la matière \"Management avancé SI\", j'ai acquis les compétences nécessaires pour identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information. J'ai également appris à utiliser des outils de modélisation de processus pour faciliter leur identification.",
        "BUT2C5A2":"Formaliser les besoins du client et de l’utilisateur : Grâce à la matière \"Communication professionnelle\", j'ai acquis les compétences nécessaires pour formaliser les besoins du client et de l'utilisateur. J'ai également appris à communiquer efficacement avec les parties prenantes pour comprendre leurs besoins.",
        "BUT2C5A3":"Identifier les critères de faisabilité d’un projet informatique : Grâce à la matière \"PPP\", j'ai acquis les compétences nécessaires pour identifier les critères de faisabilité d'un projet informatique. J'ai également appris à évaluer les risques et les contraintes associés à un projet.",
        "BUT2C5A4":"Définir et mettre en œuvre une démarche de suivi de projet : Grâce à la matière \"Management avancé SI\", j'ai acquis les compétences nécessaires pour définir et mettre en œuvre une démarche de suivi de projet. J'ai également appris à utiliser des outils de gestion de projet pour faciliter le suivi et la coordination des activités.",
    };

    const lis = document.querySelectorAll(".competences li");

    lis.forEach(li => {
        const lang = li.getAttribute("data-lang");
        const projects = languages[lang];

        li.dataset.originalText = li.textContent;

        li.addEventListener("mouseover", function() {
            level = li.textContent;
            li.dataset.projects = projects;
            li.innerHTML = li.dataset.projects;
        });

        li.addEventListener("mouseout", function() {
            li.innerHTML = li.dataset.originalText;
        });
    });
});


document.getElementById('image_profil').classList.add('active');
document.getElementById('profil').classList.add('active');
