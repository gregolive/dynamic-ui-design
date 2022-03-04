const dropdownBtn = (title) => {
  const btn = document.createElement('button');
  const icon = document.createElement('i');

  icon.className = 'fa-solid fa-caret-down';

  btn.className = 'btn btn-primary';
  btn.setAttribute('type', 'button');
  btn.textContent = ` ${title} `;
  btn.appendChild(icon);

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
  list.className = 'dropdown-menu show';

  links.forEach((link) => {
    list.appendChild(dropdownLink(link));
  });

  return list;
};

const buildDropdown = (title, links) => {
  const container = document.createElement('div');
  container.className = 'dropdown';
  container.appendChild(dropdownBtn(title));
  container.appendChild(dropdownMenu(links));

  return container;
};

const addEventListener = () => {

};

const dropdown = (drop) => {
  const dd = buildDropdown(drop.title, drop.links);
  addEventListener();

  return dd;
};

export default dropdown;
