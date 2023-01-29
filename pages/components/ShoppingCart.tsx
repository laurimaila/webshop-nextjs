import CartItems from './CartItems';

const ShoppingCart = ({ cart, showCart, deleteItem }:
    {
        cart: any,
        showCart: any,
        deleteItem: any
    }): JSX.Element | null => {

    const totalPrice = cart.reduce((acc: number, cur: any) => acc + cur.price, 0);
    if (showCart) {
        if (cart.length === 0) {
            return (<div className="absolute z-50 w-full text-lg text-center p-2 grid place-items-center rounded-b-2xl bg-slate-800">Ostoskori on tyhjä</div>)
        } else {
            return (
                <div className="absolute z-50 w-full grid place-items-center rounded-b-2xl bg-slate-800">
                    <p className="text-lg text-center p-1">Yhteensä {cart.length} tuotetta,
                        kokonaishinta {Math.round(totalPrice * 100) / 100}€</p>
                    <ul><CartItems cart={cart} deleteItem={deleteItem} /></ul>
                </div>
            )
        }
    } else {
        return null
    }

}

export default ShoppingCart;