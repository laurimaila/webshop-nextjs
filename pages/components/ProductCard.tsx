function Product({
    product: { title, price, description, category, image },
    product, setCart, cart
}: any) {
    const categoryUp = category[0].toUpperCase() + category.substring(1)
    return (
        <div className="group flex p-3 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 hover:transform hover:scale-x-105 duration-200">
            <div className="flex w-full hover:border-oma-shock border-2 border-transparent rounded-3xl dark:bg-slate-500" >
                <div className="w-2/5 p-1 overflow-hidden rounded-l-3xl dark:bg-white">
                    <div style={{ backgroundImage: `url(${image})` }}
                        className="bg-contain bg-no-repeat bg-center w-full h-full hover:transform group-hover:scale-125 duration-300"
                    ></div>
                </div>

                <div className="w-3/5 p-2 ">

                    <h1 className="text-2xl">{title.substr(0, 50)}</h1>

                    <h2 className="text-xl pt-1 dark:text-slate-900">{categoryUp}</h2>

                    <p className="text-oma-shock pb-2 pl-1 text-2xl">{price}€</p>
                    <button className="bg-transparent hover:bg-oma-dark text-white
                     font-semibold py-2 px-4 border border-white active:bg-slate-800
                     hover:border-transparent rounded-xl" onClick={()=>(setCart(cart.concat({
                        ...product,
                        id: crypto.randomUUID()
                      })))}>
                        Lisää ostoskoriin
                    </button>


                    <div className="text-slate-900 pl-2 pt-2">{description.substr(0, 70)}</div>
                </div>
            </div>
        </div>
    );
}
export default Product;