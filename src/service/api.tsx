const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getProducts;
