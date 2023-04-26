function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector('#boxes');
const elementCount = document.querySelector('[type="number"]');
const buttonCreateCollections = document.querySelector('[data-create]');
const buttonDestroyCollection = document.querySelector('[data-destroy]');

let newElementWidthHeight = 30;

buttonCreateCollections.addEventListener('click', () => {
  const amount = Number(elementCount.value);
  createBoxes(amount);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divCollections = document.createElement('div');
    divCollections.style.width = `${newElementWidthHeight}px`;
    divCollections.style.height = `${newElementWidthHeight}px`;
    divCollections.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(divCollections);
    newElementWidthHeight += 10;
    divBoxes.style.marginTop = `${5}px`
  }
}

buttonDestroyCollection.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
  divBoxes.innerHTML = '';
  newElementWidthHeight = 0;
}



