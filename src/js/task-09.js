function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const randomBackGroundColor = document.querySelector('body');
const btnChangeColor = document.querySelector('.change-color');
const colorRandomName = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  randomBackGroundColor.style.backgroundColor = getRandomHexColor();
  colorRandomName.textContent = `- ${getRandomHexColor()}`;
  // btnChangeColor.style.backgroundColor = getRandomHexColor();
  // colorRandomName.style.color = btnChangeColor.style.backgroundColor;
  // btnChangeColor.style.color = randomBackGroundColor.style.backgroundColor;
});
