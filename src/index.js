import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import dropdown from './dropdown';
import dropdownHover from './dropdown-hover';
import navbarExpand from './navbar-expand';
import navbarSide from './navbar-side';
import navbarTabs from './navbar-tabs';

const demoDropdowns = (() => {
  const links1 = [
    { text: 'Hello there 👋', href: '#' },
    { text: "I'm a dropdown link 🔗", href: '#' },
    { text: 'Me too 🤙', href: '#' },
  ];
  const links2 = [
    { text: 'I open on mouse-over 🐭', href: '#' },
    { text: 'To close me ❌', href: '#' },
    { text: 'Click on the button above ☝️', href: '#' },
  ];

  const init = () => {
    const container = document.querySelector('.dropdown-container');
    container.appendChild(dropdown('Click Me', links1));
    container.appendChild(dropdownHover('Hover Me', links2));
  };

  return { init };
})();

const demoMobileNavs = (() => {
  const menuLinks = [
    { text: 'News', href: '', icon: 'fa-solid fa-newspaper' },
    { text: 'Contact', href: '', icon: 'fa-solid fa-address-card' },
    { text: 'About', href: '', icon: 'fa-solid fa-circle-info' },
  ];
  const expandTitle = { text: 'Expand Down', href: '#navbar-expand' };
  const sideTitle = { text: 'Side Drawer', href: '#navbar-side' };

  const init = () => {
    const phones = document.querySelectorAll('.mobile-screen');
    phones[0].appendChild(navbarExpand(expandTitle, menuLinks));
    phones[1].appendChild(navbarSide(sideTitle, menuLinks));
    phones[2].appendChild(navbarTabs(menuLinks));
  };

  return { init };
})();

demoDropdowns.init();
demoMobileNavs.init();
