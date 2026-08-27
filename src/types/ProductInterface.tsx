export type ProductInterface = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ProductListInterface = {
  products: ProductInterface[];
};
