const toggleMenu = (e) => {
  const menuClass = e.currentTarget.nextSibling.classList;
  if (menuClass.contains('show')) {
    menuClass.remove('show');
  } else {
    menuClass.add('show');
  }
};

const dropdownBtn = (drop) => {
  const btn = document.createElement('button');
  const icon = document.createElement('i');

  icon.className = 'fa-solid fa-caret-down';

  btn.className = 'btn btn-primary';
  btn.setAttribute('type', 'button');
  btn.textContent = ` ${drop.title} `;
  btn.appendChild(icon);
  if (drop.hover === true) {
    btn.addEventListener('mouseover', toggleMenu);
    btn.addEventListener('mouseout', toggleMenu);
  } else {
    btn.addEventListener('click', toggleMenu);
  }

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

const dropdownMenu = (drop) => {
  const list = document.createElement('ul');
  list.className = 'dropdown-menu';

  drop.links.forEach((link) => {
    list.appendChild(dropdownLink(link));
  });

  return list;
};

const dropdown = (drop) => {
  const container = document.createElement('div');
  container.className = 'dropdown';
  container.appendChild(dropdownBtn(drop));
  container.appendChild(dropdownMenu(drop));

  return container;
};

export default dropdown;
