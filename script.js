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
