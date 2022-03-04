const toggleMenu = () => {
  const menuClass = document.querySelector('.dropdown-menu').classList;
  if (menuClass.contains('show')) {
    menuClass.remove('show');
  } else {
    menuClass.add('show');
  }
};

const dropdownBtn = (title) => {
  const btn = document.createElement('button');
  const icon = document.createElement('i');

  icon.className = 'fa-solid fa-caret-down';

  btn.className = 'btn btn-primary';
  btn.setAttribute('type', 'button');
  btn.textContent = ` ${title} `;
  btn.appendChild(icon);
  btn.addEventListener('click', toggleMenu);

  return btn;
};

const dropdownLink = (link) => {
  const listItem = document.createElement('li');
  const listLink = document.createElement('a');

  listLink.className = 'dropdown-item';
  listLink.href = link.href;
  listLink.textContent = link.text;
  listItem.appendChild(listLink);

  return listItem;
};

const dropdownMenu = (links) => {
  const list = document.createElement('ul');
  list.className = 'dropdown-menu';

  links.forEach((link) => {
    list.appendChild(dropdownLink(link));
  });

  return list;
};

const dropdown = (drop) => {
  const container = document.createElement('div');
  container.className = 'dropdown';
  container.appendChild(dropdownBtn(drop.title));
  container.appendChild(dropdownMenu(drop.links));

  return container;
};

export default dropdown;
