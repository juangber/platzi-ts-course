import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'P1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});
addProduct({
  title: 'P2',
  createdAt: new Date(1993, 12, 1),
  stock: 120,
  size: 'S',
});

console.log(products);

const total = calcStock();

console.log(total);
