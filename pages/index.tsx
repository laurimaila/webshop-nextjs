import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';

const Home: NextPage = () => {
  const [products, setProducts] = useState<any[]>([])
  const [cart, setCart] = useState<any[]>([])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const deleteItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  return (
    <div className='dark:bg-slate-900'>
      <div className="">
        <div className=" text-oma-light text-center text-4xl pt-2 p-4 bg-oma-dark">
          Laurin verkkokauppa
        </div>
        <ShoppingCart cart={cart} setCart={setCart} showCart={showCart} deleteItem={deleteItem} />
        <div className=" text-oma-light text-center text-2xl p-2 bg-oma-dark rounded-b-2xl">
          Ostoskori {''}
          <button className="bg-oma-dark  hover:bg-oma-light hover:text-slate-800 active:bg-white text-oma-light
                     font-semibold py-2 pt-1 px-2 border border-slate-900
                     hover:border-transparent rounded-xl" 
                     onClick={() => (setShowCart(!showCart))}>
            Näytä
          </button>
        </div>
      </div>
      <div className="flex flex-wrap dark:bg-slate-900">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;