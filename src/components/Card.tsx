const Card = ({ product }) => {
  return (
    <ul className="flex flex-col gap-2 p-2 border-2 border-slate-400 rounded-lg hover:shadow-lg hover:shadow-gray-4500">
      <li key={product.id}>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p className="text-xs">{product.description}</p>
        <p>R$: {product.price}</p>
        <button className="col-span-2 font-bold bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700 justify-center  focus:border-red-100 focus:outline-none active:bg-blue-800 active:shadow-lg active:shadow-blue-500/50">
          Comprar
        </button>
      </li>
    </ul>
  );
};

export default Card;
