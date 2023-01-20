import CartItems from './CartItems';

const ShoppingCart = ({ cart, showCart, deleteItem }: any) => {

    const totalPrice = cart.reduce(function (acc: number, cur: any) { return acc + cur.price; }, 0);
    if (showCart) {
        if (cart.length === 0) { return (<div className="text-lg p-1">Ostoskori on tyhjä</div>) }
        else {
            return (
                <div>
                    <p className="text-lg text-center p-1">Yhteensä {cart.length} tuotetta,
                        kokonaishinta {Math.round(totalPrice * 100) / 100}€</p>
                    <ul><CartItems cart={cart} deleteItem={deleteItem} /></ul>

                </div>
            )
        }
    }
}

export default ShoppingCart;