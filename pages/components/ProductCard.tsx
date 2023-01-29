import { ProductType } from "../interfaces"

function Product({ product, setCart, cart }:
    {
        product: any,
        setCart: React.Dispatch<React.SetStateAction<ProductType[]>>,
        cart: Array<ProductType>
    }): React.ReactElement<any> {

    const categoryUp = product.category[0].toUpperCase() + product.category.substring(1)
    return (
        <div className="group flex p-3 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 hover:transform hover:scale-x-105 duration-200">
            <div className="flex w-full rounded-3xl dark:bg-slate-500" >
                <div className="w-2/5 p-1 overflow-hidden rounded-l-3xl dark:bg-white">
                    <div style={{ backgroundImage: `url(${product.image})` }}
                        className="bg-contain bg-no-repeat bg-center w-full h-full hover:transform group-hover:scale-125 duration-300"
                    ></div>
                </div>

                <div className="w-3/5 p-2 ">

                    <h1 className="text-2xl">{product.title.substr(0, 50)}</h1>

                    <h2 className="text-xl pt-1 dark:text-slate-900">{categoryUp}</h2>

                    <p className="text-oma-shock pb-2 pl-1 text-2xl">{product.price}€</p>
                    <button className="bg-transparent hover:bg-oma-dark text-white
                     font-semibold py-2 px-4 border border-white active:bg-slate-800 rounded-xl"
                        onClick={() => (setCart(cart.concat({
                            ...product, id: cart.length + 1
                        })))}>
                        Lisää ostoskoriin
                    </button>


                    <div className="text-slate-900 pl-2 pt-2">{product.description.substr(0, 70)}</div>
                </div>
            </div>
        </div>
    );
}
export default Product;