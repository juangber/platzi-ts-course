(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

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

  products.push({
    title: 'P3',
    createdAt: new Date(),
    stock: 1,
    size: 'L',
  });
})();
