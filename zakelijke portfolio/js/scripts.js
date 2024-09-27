/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const resources = {
  en: {
    translation: {
      "Over mij": "About me",
      "Projecten": "Projects",
      "Vaardigheden": "Skills",
      "Interesses": "Interests",
      "Contact": "Contact",
      // Add more translations for the entire content
      'OVER MIJ': 'ABOUT ME',
      "Ik ben een tweedejaars softwareontwikkelaar met een sterke voorkeur voor front-end development. Graag deel ik in deze portfolio mijn projecten van het eerste jaar om mijn werk en vaardigheden aan jullie te laten zien.": "I am a second year software developer with a strong preference for front-end development. I would like to share my first year projects in this portfolio to show you my work and skills.",
      "Projecten": "Projects",
      "Dit project was de eerste website die we moesten ontwikkelen. We hebben het in een team van vier personen gerealiseerd, waarbij we gebruik hebben gemaakt van HTML, CSS en JavaScript. Aanvankelijk vond ik het coderen vrij uitdagend, maar het was tegelijkertijd ook opwindend.": "This project was the first website we had to develop. We did it in a team of four people, using HTML, CSS and JavaScript. Initially I found the coding quite challenging, but it was exciting at the same time.",
      "Vorig jaar heb ik twee portfolio websites ontwikkeld. De eerste heb ik zelfstandig gemaakt, buiten schoolopdrachten om. Vervolgens kregen we een project toegewezen waarbij we een portfolio website voor een tweedejaarsstudent moesten ontwerpen. Dit project heb ik gerealiseerd met behulp van HTML en CSS.": "Last year I developed two portfolio websites. The first one I made independently, outside of school assignments. Then we were assigned a project where we had to design a portfolio website for a second-year student. I realized this project using HTML and CSS.",
      'Google Home is een project ontwikkeld met HTML en CSS. Het betreft een informatieve website die toelicht hoe verschillende apparaten, zoals de Roomba, thermostaat, Nuki Smart Lock Pro V4 en slimme camera"s, geïntegreerd kunnen worden met Google Home. De website biedt gedetailleerde uitleg over het koppelen van deze apparaten aan het Google Home-ecosysteem, zodat gebruikers hun smart home-apparaten eenvoudig en efficiënt kunnen bedienen.': "Google Home is a project developed with HTML and CSS. It is an informative website that explains how various devices, such as the Roomba, thermostat, Nuki Smart Lock Pro V4 and smart cameras, can be integrated with Google Home. The website provides detailed instructions on how to connect these devices to the Google Home ecosystem, so that users can easily and efficiently control their smart home devices.",
      'La Sarthe Travel hebben wij ontwikkeld met behulp van HTML, CSS en JavaScript. Tijdens dit proces hebben wij een reserveringsfunctie, een zoekfunctionaliteit en een berekeningsmodule geïmplementeerd. Tevens hebben wij een deel van de website naar het Engels vertaald.': 'We developed La Sarthe Travel using HTML, CSS and JavaScript. During this process we implemented a reservation function, a search functionality and a calculation module. We also translated part of the website into English.',
      'Wij hebben in dit project gebruikgemaakt van HTML, CSS en JavaScript voor de front-end, terwijl PHP en SQL zijn ingezet voor de back-end om een reserveringssysteem te ontwikkelen.': 'We developed La Sarthe Travel using HTML, CSS and JavaScript. During this process we implemented a reservation function, a search functionality and a calculation module. We also translated part of the website into English.',
      'Als je naar de kleuren kijkt, komt het je misschien bekend voor. Vorig jaar heb ik van meneer Limpens een boek geleend dat veel informatie bevat over HTML, CSS en JavaScript. De website die jullie zien is precies zoals het boek uitlegt. Het was eigenlijk een handig boek, dus ik heb er ook een voor mezelf gekocht.': 'If you look at the colors, it might look familiar. Last year I borrowed a book from Mr. Limpens that contains a lot of information about HTML, CSS and JavaScript. The website you see is exactly as the book explains. It was actually a handy book, so I bought one for myself.',
      'Het XO spel is het enige spel dat ik vorige jaar heb gemaakt. Het is zo simpel en met html css en javascript gemaakt.':'XO game is the only game i made last year. its so simple and made with html css and javascript.',
      'Het Product Management Systeem is een website waarmee gebruikers producten kunnen aanmaken (tot een maximum van 90), elk met een specifieke prijs. Daarnaast is het mogelijk om naar een bepaald product te zoeken, zodat je niet handmatig door de gehele productlijst hoeft te bladeren. Ook kunnen producten worden verwijderd of gewijzigd. Hierbij heb ik de CRUD-functionaliteiten geïmplementeerd en gebruikgemaakt van HTML, CSS en JavaScript voor de ontwikkeling.':'The Product Management System is a website that allows users to create products (up to 90), each with a specific price. It is also possible to search for a specific product, so you don"t have to manually browse through the entire product list. Products can also be deleted or modified. I implemented the CRUD functionalities and used HTML, CSS and JavaScript for the development.',
      'Mijn meest recente project van vorig jaar was Vitaalburgerschap, een applicatie ontwikkeld voor zowel iOS- als Android-apparaten. Hierbij heb ik gebruikgemaakt van React Native en via de terminal de benodigde node_modules geïnstalleerd. De app is volledig gebouwd met React Native. Ik heb een inlogsysteem gecreëerd voor nieuwe gebruikers, evenals een formulier dat ingevuld moet worden om toegang te krijgen tot verdere functionaliteiten van de app. Verder heb ik twee berekeningsmodules toegevoegd: één voor het berekenen van de dagelijkse calorische behoefte en een module om de benodigde dagen te bepalen om een gewenst caloriedoel te bereiken. Tot slot bevat de app secties met activiteiten gericht op vetverbranding, verrijkt met tekst en afbeeldingen.': 'My most recent project from last year was Vitaalburgerschap, an application developed for both iOS and Android devices. For this I used React Native and installed the necessary node_modules via the terminal. The app is built entirely with React Native. I created a login system for new users, as well as a form that needs to be filled in to gain access to further functionalities of the app. Furthermore, I added two calculation modules: one for calculating the daily caloric requirement and a module to determine the necessary days to reach a desired calorie goal. Finally, the app contains sections with activities aimed at fat burning, enriched with text and images.',
      "Skills": "Skills",
      'programmeertalen & hulpmiddelen':'programming languages & tools',
      'Extra Vaardigheden': 'Extra Skills',
      'Talen (Duits: b1. Engels: A2. Nederlands: C1. Arabisch: moedertaal.)':'Languages ​(German: b1. English: A2. Dutch: C1. Arabic: native language.)',
      "Interesses": "Interests",
      'Naast mijn werk als webontwikkelaar heb ik ook een passie voor lezen en schilderen, waarmee ik graag mijn vrije tijd vul. Daarnaast ben ik goed in koken en geniet ik van het kijken naar films en series. Zwemmen is ook een van mijn favoriete activiteiten om te ontspannen.':'Besides my work as a web developer, I also have a passion for reading and painting, which I like to do in my free time. I am also good at cooking and enjoy watching movies and series. Swimming is also one of my favorite activities to relax.',
      // Continue adding the necessary translations
    },
  },
  nl: {
    translation: {
      // Keep Dutch as the default text
    },
  },
};
i18next.init({
  lng: "nl", // Default language
  debug: true,
  resources,
}, function(err, t) {
  updateContent(); // Function to update text after initialization
});

function updateContent() {
  document.querySelector("#over").textContent = i18next.t('Over mij');
  document.querySelector("#project").textContent = i18next.t('Projecten');
  document.querySelector("#vaardig").textContent = i18next.t('Vaardigheden');
  document.querySelector("#interesses").textContent = i18next.t('Interesses');
  document.querySelector("#contact").textContent = i18next.t('Contact');
  document.querySelector("#about p").textContent = i18next.t('Ik ben een tweedejaars softwareontwikkelaar met een sterke voorkeur voor front-end development. Graag deel ik in deze portfolio mijn projecten van het eerste jaar om mijn werk en vaardigheden aan jullie te laten zien.');
  document.querySelector("#projecten h2").textContent = i18next.t('Projecten');
  document.querySelector("#projecten p").textContent = i18next.t('Dit project was de eerste website die we moesten ontwikkelen. We hebben het in een team van vier personen gerealiseerd, waarbij we gebruik hebben gemaakt van HTML, CSS en JavaScript. Aanvankelijk vond ik het coderen vrij uitdagend, maar het was tegelijkertijd ook opwindend.');
  document.querySelector("#port").textContent = i18next.t('Vorig jaar heb ik twee portfolio websites ontwikkeld. De eerste heb ik zelfstandig gemaakt, buiten schoolopdrachten om. Vervolgens kregen we een project toegewezen waarbij we een portfolio website voor een tweedejaarsstudent moesten ontwerpen. Dit project heb ik gerealiseerd met behulp van HTML en CSS.');
  document.querySelector("#internet").textContent = i18next.t('Google Home is een project ontwikkeld met HTML en CSS. Het betreft een informatieve website die toelicht hoe verschillende apparaten, zoals de Roomba, thermostaat, Nuki Smart Lock Pro V4 en slimme camera"s, geïntegreerd kunnen worden met Google Home. De website biedt gedetailleerde uitleg over het koppelen van deze apparaten aan het Google Home-ecosysteem, zodat gebruikers hun smart home-apparaten eenvoudig en efficiënt kunnen bedienen.');
  document.querySelector("#LST").textContent = i18next.t('La Sarthe Travel hebben wij ontwikkeld met behulp van HTML, CSS en JavaScript. Tijdens dit proces hebben wij een reserveringsfunctie, een zoekfunctionaliteit en een berekeningsmodule geïmplementeerd. Tevens hebben wij een deel van de website naar het Engels vertaald.');
  document.querySelector("#Onlybowling").textContent = i18next.t('Wij hebben in dit project gebruikgemaakt van HTML, CSS en JavaScript voor de front-end, terwijl PHP en SQL zijn ingezet voor de back-end om een reserveringssysteem te ontwikkelen.');
  document.querySelector("#tourism").textContent = i18next.t('Als je naar de kleuren kijkt, komt het je misschien bekend voor. Vorig jaar heb ik van meneer Limpens een boek geleend dat veel informatie bevat over HTML, CSS en JavaScript. De website die jullie zien is precies zoals het boek uitlegt. Het was eigenlijk een handig boek, dus ik heb er ook een voor mezelf gekocht.');
  document.querySelector("#xo").textContent = i18next.t('Het XO spel is het enige spel dat ik vorige jaar heb gemaakt. Het is zo simpel en met html css en javascript gemaakt.');
  document.querySelector("#PMS").textContent = i18next.t('Het Product Management Systeem is een website waarmee gebruikers producten kunnen aanmaken (tot een maximum van 90), elk met een specifieke prijs. Daarnaast is het mogelijk om naar een bepaald product te zoeken, zodat je niet handmatig door de gehele productlijst hoeft te bladeren. Ook kunnen producten worden verwijderd of gewijzigd. Hierbij heb ik de CRUD-functionaliteiten geïmplementeerd en gebruikgemaakt van HTML, CSS en JavaScript voor de ontwikkeling.');
  document.querySelector("#Vitaalburgerschap").textContent = i18next.t('Mijn meest recente project van vorig jaar was Vitaalburgerschap, een applicatie ontwikkeld voor zowel iOS- als Android-apparaten. Hierbij heb ik gebruikgemaakt van React Native en via de terminal de benodigde node_modules geïnstalleerd. De app is volledig gebouwd met React Native. Ik heb een inlogsysteem gecreëerd voor nieuwe gebruikers, evenals een formulier dat ingevuld moet worden om toegang te krijgen tot verdere functionaliteiten van de app. Verder heb ik twee berekeningsmodules toegevoegd: één voor het berekenen van de dagelijkse calorische behoefte en een module om de benodigde dagen te bepalen om een gewenst caloriedoel te bereiken. Tot slot bevat de app secties met activiteiten gericht op vetverbranding, verrijkt met tekst en afbeeldingen.');
  document.querySelector("#skills h2").textContent = i18next.t('Vaardigheden');
  document.querySelectorAll(".subheading.mb-3").forEach(function(element) {
  element.textContent = i18next.t('programmeertalen & hulpmiddelen');
  });
  document.querySelector("#Extra").textContent = i18next.t('Extra Vaardigheden');
  document.querySelector("#talen").textContent = i18next.t('Talen (Duits: b1. Engels: A2. Nederlands: C1. Arabisch: moedertaal.)');
  document.querySelector("#Extra").textContent = i18next.t('Extra Vaardigheden');
  document.querySelector("#interests h2").textContent = i18next.t('Interesses');
  document.querySelector("#interests p").textContent = i18next.t('Naast mijn werk als webontwikkelaar heb ik ook een passie voor lezen en schilderen, waarmee ik graag mijn vrije tijd vul. Daarnaast ben ik goed in koken en geniet ik van het kijken naar films en series. Zwemmen is ook een van mijn favoriete activiteiten om te ontspannen.');
  document.querySelector("#Contact h2").textContent = i18next.t('Contact');
  // Add more selectors to translate other elements of the page
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent();
  });
}
