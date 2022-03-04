import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import dropdown from './dropdown';

const demoDropdown = (() => {
  const dropdownClick = {
    title: 'Click Me',
    links: [
      { text: 'Hello there 👋', href: '#' },
      { text: "I'm a dropdown link 🔗", href: '#' },
      { text: 'Me too 🤙', href: '#' },
    ],
  };

  const dropdownHover = {
    title: 'Hover Me',
    links: [
      { text: 'Hello there 👋', href: '#' },
      { text: "I'm a dropdown link 🔗", href: '#' },
      { text: 'Me too 🤙', href: '#' },
    ],
  };

  const init = () => {
    const container = document.querySelector('.dropdown-container');
    container.appendChild(dropdown(dropdownClick.title, dropdownClick.links));
    container.appendChild(dropdown(dropdownHover.title, dropdownHover.links, true));
  };

  return { init };
})();

demoDropdown.init();
