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
      "Ik ben een tweedejaars softwareontwikkelaar...": "I am a second-year software developer with a strong preference for front-end development...",
      "Projecten": "Projects",
      "Vorig jaar heb ik twee portfolio websites...": "Last year, I developed two portfolio websites...",
      "Skills": "Skills",
      "Interesses": "Interests",
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
  document.querySelector("#about h1").textContent = i18next.t('Over mij');
  document.querySelector("#about p").textContent = i18next.t('Ik ben een tweedejaars softwareontwikkelaar...');
  document.querySelector("#projecten h2").textContent = i18next.t('Projecten');
  // Add more selectors to translate other elements of the page
}

function changeLanguage(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent();
  });
}
