const menuTab = (link) => {
  const tab = document.createElement('a');
  tab.className = 'navtab-link';
  tab.href = link.href;

  if (typeof link.icon !== 'undefined') {
    const icon = document.createElement('icon');
    icon.className = `${link.icon} navtab-icon`;
    tab.appendChild(icon);
  }

  if (typeof link.text !== 'undefined') {
    tab.innerHTML += link.text;
  }

  return tab;
};

const navbarTabs = (menuLinks) => {
  const nav = document.createElement('nav');

  nav.id = 'navbar-tabs';
  nav.className = 'navbar navbar-tabs';
  menuLinks.forEach((link) => nav.appendChild(menuTab(link)));

  return nav;
};

export default navbarTabs;
