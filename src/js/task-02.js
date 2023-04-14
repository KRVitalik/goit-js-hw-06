const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addNewIngredients = document.querySelector('ul#ingredients');

const element = ingredients.map((ingredient) => {
  const createIngredients = document.createElement('li');
  createIngredients.textContent = `${ingredient}`;
  createIngredients.classList.add('item');

  return createIngredients
}); 
  addNewIngredients.append(...element);
