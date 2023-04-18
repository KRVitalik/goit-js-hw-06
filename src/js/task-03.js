const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imagesContainer = document.querySelector('ul.gallery')

const element = images.map((image) => {
  const containerElement = `<li><img src=${image.url} alt=${image.alt}></li>`

  return containerElement;
}).join('');
imagesContainer.insertAdjacentHTML("beforeend", element);


//  ====================2====================

// const element = images.map((image) => {
//   const containerElement = document.createElement('li');
//   const imgElement = document.createElement('img');
//   containerElement.appendChild(imgElement);
//   imgElement.src = image.url;
//   imgElement.alt = image.alt;
//   return containerElement;
// })

// imagesContainer.append(...element);