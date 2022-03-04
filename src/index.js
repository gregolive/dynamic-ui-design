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
    hover: false,
  };

  const dropdownHover = {
    title: 'Hover Me',
    links: [
      { text: 'Hello there 👋', href: '#' },
      { text: "I'm a dropdown link 🔗", href: '#' },
      { text: 'Me too 🤙', href: '#' },
    ],
    hover: true,
  };

  const init = () => {
    const container = document.querySelector('.dropdown-container');
    container.appendChild(dropdown(dropdownClick));
    container.appendChild(dropdown(dropdownHover));
  };

  return { init };
})();

demoDropdown.init();
