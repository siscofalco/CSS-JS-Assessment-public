const intervalTime = 1000 * 60 * 60 * 2;
const colors = ['green', 'lightgreen', 'maroon', 'blue', 'yellow', 'purple'];
const images = ['./img/box_img_2.png', './img/box_img_3.png', './img/box_img_4.png', './img/box_img.png'];
const titles = ['Hi all!', 'Hello world 🌎', 'Hello there'];

let count = 0;

setInterval(() => {
  // Change all the colors
  for (let i = 0; i < colors.length; i++) {
    const element = document.getElementsByClassName(colors[i])[0];
    element.classList.remove(colors[i]);
    const nextIndex = (i + 1) % colors.length;
    element.classList.add(`${colors[nextIndex]}-aux`);
  }
  for (let i = 0; i < colors.length; i++) {
    const element = document.getElementsByClassName(`${colors[i]}-aux`)[0];
    element.classList.remove(`${colors[i]}-aux`);
    element.classList.add(colors[i]);
  }

  // Modify the image
  const imageElement = document.getElementById('section-one-image');
  imageElement.src = images[count % images.length];

  // Modify the title
  const titleElement = document.getElementById('section-three-title');
  titleElement.innerHTML = titles[count % titles.length];
  count++;
}, intervalTime); // Change this to 2000 for example to see the changes :)
