import React from "react";
import getProducts from "./service/api";
import type {
  ProductInterface,
  ProductListInterface,
} from "./types/ProductInterface";
import Card from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState<ProductListInterface>({
    products: [],
  });

  useEffect(() => {
    getProducts().then((product: ProductInterface[]) => {
      setProducts({ products: product });
    });
  }, []);

  return (
    <div
      id="MainContainer"
      className="grid grid-cols-[200px_1fr] h-screen overflow-hidden "
    >
      <div className="flex flex-col h-full justify-between bg-gray-500 p-10 items-center rounded-border-lg gap-10">
        <div>
          <img src="assets/logo.svg" alt="Logo" />
          <div className="flex-1 font-bold text-3xl justify-center">
            Loja Virtual REACT
          </div>
        </div>

        <div>
          Seu Carrinho
          <img src="assets/cart.svg" alt="CartLogo" />
        </div>
      </div>

      <div
        id="PageContainer"
        className="flex flex-col h-full flex-1 bg-slate-500 gap-10 overflow-y-auto items-center "
      >
        <header
          id="TopContainer"
          className="flex flex-row justify-center bg-sky-950 w-full h-40 items-center p-30 gap-50"
        >
          <img src="assets/profile.svg" alt="Profile" />

          <div className="flex-1 font-bold text-3xl justify-center">
            Loja Virtual REACT
          </div>
        </header>

        <div
          id="SearchAndFilter"
          className="rounded border-2 border-slate-400 flex flex-row gap-5 p-2"
        >
          <input
            className="justify-between w-96 h-10 rounded-md p-2 focus:outline-none "
            placeholder="Pesquisar produto"
          />
          <select name="Categoria" id="cat">
            <option value="allItems">Todos</option>
            <option value="expensiveOne">Mais Caro</option>
            <option value="cheaperOne">Mais Barato</option>
          </select>
        </div>

        <div className="flex flex-col gap-15 w-full h-full p-10 bg-">
          <div className="grid grid-cols-3 gap-6">
            {products.products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
