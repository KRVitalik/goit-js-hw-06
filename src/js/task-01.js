const navMainRef = document.querySelector('ul#categories');

const navEl = navMainRef.children;

console.log(`Number of categories: ${navEl.length}`);

const titleEl = navMainRef.querySelectorAll('h2');
titleEl.forEach((title) => {
    const itemEl = title.nextElementSibling.querySelectorAll('li');

    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${itemEl.length}`);
});
