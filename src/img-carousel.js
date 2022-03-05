const imgSlide = (image, index) => {
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');

  img.src = image;

  imgContainer.className = (index === 0) ? 'img-slide active' : 'img-slide';
  imgContainer.appendChild(img);

  return imgContainer;
};

const navArrow = (name) => {
  const arrow = document.createElement('a');
  const arrowIcon = document.createElement('i');

  arrowIcon.className = `fa-solid fa-caret-${name}`;

  arrow.className = `nav-arrow nav-arrow-${name}`;
  arrow.appendChild(arrowIcon);

  return arrow;
};

const navDots = (imgCount) => {
  const dotContainer = document.createElement('div');
  dotContainer.className = 'nav-dots';

  for (let i = 0; i < imgCount; i += 1) {
    const span = document.createElement('span');
    span.className = (i === 0) ? 'dot active' : 'dot';
    dotContainer.appendChild(span);
  }

  return dotContainer;
};

const imgCarousel = (images) => {
  const slideshowContainer = document.createElement('div');
  const carouselSection = document.createElement('section');

  slideshowContainer.className = 'slideshow-container';
  images.forEach((image, index) => slideshowContainer.appendChild(imgSlide(image, index)));
  slideshowContainer.appendChild(navArrow('left'));
  slideshowContainer.appendChild(navArrow('right'));

  carouselSection.appendChild(slideshowContainer);
  carouselSection.appendChild(navDots(images.length));

  return carouselSection;
};

export default imgCarousel;
