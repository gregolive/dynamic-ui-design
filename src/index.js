import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import dropdown from './dropdown';
import dropdownHover from './dropdown-hover';
import navbarExpand from './navbar-expand';
import navbarSide from './navbar-side';
import navbarTabs from './navbar-tabs';
import imgCarousel from './img-carousel';
import DT1 from './img/DT1.jpg';
import DT2 from './img/DT2.jpg';
import DT3 from './img/DT3.jpg';
import DT4 from './img/DT4.jpg';
import DT5 from './img/DT5.jpg';

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
  const menuLinksExpand = [
    { text: 'News', href: '#navbar-expand', icon: 'fa-solid fa-newspaper' },
    { text: 'Contact', href: '#navbar-expand', icon: 'fa-solid fa-address-card' },
    { text: 'About', href: '#navbar-expand', icon: 'fa-solid fa-circle-info' },
  ];
  const menuLinksSide = [
    { text: 'News', href: '#navbar-side', icon: 'fa-solid fa-newspaper' },
    { text: 'Contact', href: '#navbar-side', icon: 'fa-solid fa-address-card' },
    { text: 'About', href: '#navbar-side', icon: 'fa-solid fa-circle-info' },
  ];
  const menuLinksTab = [
    { text: 'News', href: '#navbar-tabs', icon: 'fa-solid fa-newspaper' },
    { text: 'Contact', href: '#navbar-tabs', icon: 'fa-solid fa-address-card' },
    { text: 'About', href: '#navbar-tabs', icon: 'fa-solid fa-circle-info' },
  ];
  const expandTitle = { text: 'Expand Down', href: '#navbar-expand' };
  const sideTitle = { text: 'Side Drawer', href: '#navbar-side' };

  const init = () => {
    const phones = document.querySelectorAll('.mobile-screen');
    phones[0].appendChild(navbarExpand(expandTitle, menuLinksExpand));
    phones[1].appendChild(navbarSide(sideTitle, menuLinksSide));
    phones[2].appendChild(navbarTabs(menuLinksTab));
  };

  return { init };
})();

const demoCarousel = (() => {
  const images = [DT1, DT2, DT3, DT4, DT5];

  const init = () => {
    const section = document.getElementById('img-carousel-demo');
    section.appendChild(imgCarousel(images));
  };

  return { init };
})();

demoDropdowns.init();
demoMobileNavs.init();
demoCarousel.init();
