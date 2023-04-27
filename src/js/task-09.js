function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const randomBackGroundColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorRandomName = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  let currentBgColor = randomBackGroundColor.style.backgroundColor = getRandomHexColor();
  colorRandomName.textContent = `- ${currentBgColor}`;
});
