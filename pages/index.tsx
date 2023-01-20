import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';
import CategoryChoice from './components/CategoryChoice';
import MyDialog from './components/MyDialog';

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
        <div>
          <div className=" text-white font-bold text-center text-4xl pt-2 p-4 bg-oma-dark">
            Laurin verkkokauppa
          </div>
        </div>



      </div>

      


      <div className="p-2 rounded-br-xl bg-oma justify-around flex">

        <button className="bg-oma-dark text-white hover:bg-oma-light 
        hover:text-slate-800 active:bg-white
            font-semibold py-2 pt-1 px-2 border 
          border-slate-900 hover:border-transparent rounded-xl"
          onClick={() => (setShowCart(!showCart))}>
          {showCart ? 'Piilota ostoskori' : 'Näytä ostoskori'}
        </button>

        <button className="bg-oma-dark  hover:bg-oma-light hover:text-slate-800 active:bg-white text-white
                     font-semibold py-2 pt-1 px-2 border border-slate-900
                     hover:border-transparent rounded-2xl">
          Siirry kassalle
        </button>

      </div>
      <div className="grid w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 place-items-center rounded-b-2xl bg-slate-400">
      <ShoppingCart cart={cart} setCart={setCart} showCart={showCart} deleteItem={deleteItem} />
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