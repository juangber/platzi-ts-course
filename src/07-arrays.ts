(() => {
  let prices = [1, 2, 2, 1, 1, 212, 'hola', true];
  prices.push('text');
  prices.push(true);
  // prices.push({})
  prices.push(121212);

  let products = ['hola', true];
  products.push(false);

  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push(true);
  mixed.push([]);
  mixed.push({});
  mixed.push('as');

  let numbers = [1, 2, 2, 1, 1, 212];
  numbers.map((item) => item * 2);
})();
