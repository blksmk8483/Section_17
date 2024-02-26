// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log('Importing Module');

// addToCart('breads', 5);

// console.log(price, tq);

// console.log('Importing Module');
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('breads', 5);

import add, { cart } from './shoppingCart.js';
add('cheese', 14);
add('pizza', 9);
add('ham', 4);

console.log('The CARTS array:\n', ...cart);

// ==============================================
// =================TOP LEVEL AWAIT==============
// ==============================================
// console.log('Start fetching');

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(...data);

// // this will not run until the fetch is complete
// console.log('Something after...');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// Not a very clean version
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
