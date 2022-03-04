import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import dropdown from './dropdown';

const displayDropdown = (() => {
  const demoDropdown = {
    title: 'Dropdown',
    links: [
      { text: 'Hello there 👋', href: '#' },
      { text: "I'm a dropdown link 🔗", href: '#' },
      { text: 'Me too 🤙', href: '#' },
    ],
  };

  const init = () => {
    const section = document.getElementById('dropdown-demo');
    section.appendChild(dropdown(demoDropdown));
  };

  return { init };
})();

displayDropdown.init();
