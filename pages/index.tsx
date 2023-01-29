import type { NextPage } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ProductType } from "./interfaces"
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';



const Home: NextPage = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [cart, setCart] = useState<ProductType[]>([])
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
    <div className='bg-slate-700'>
      <div className="">
        <div>
          <div className=" text-white font-semibold text-center text-4xl pt-2 p-4 bg-oma-dark">
            Laurin verkkokauppa
          </div>
        </div>
      </div>
      <div className="p-2 rounded-br-xl bg-oma justify-around flex">

        <button className="bg-slate-400 w-28 text-black hover:bg-slate-200 
       active:bg-white
            font-semibold py-2 pt-1 px-2 border 
          border-slate-900 hover:border-transparent rounded-xl"
          onClick={() => (setShowCart(!showCart))}>
          {showCart ? 'Piilota' : 'Ostoskori'}
        </button>

        <Link href="/checkout">
          <button className="bg-slate-400 w-28 text-black hover:bg-slate-200 active:bg-white 
                     font-semibold py-2 pt-1 px-2 border border-slate-900
                     hover:border-transparent rounded-2xl">
            Kassalle
          </button>
        </Link>

      </div>

      <ShoppingCart cart={cart} showCart={showCart} deleteItem={deleteItem} />


      <div className="flex flex-wrap dark:bg-slate-900">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;