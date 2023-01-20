import CartItem from './CartItem';

const ShoppingCart = ({ cart, showCart, deleteItem }: any) => {

    const totalPrice = cart.reduce(function (acc: number, cur: any) { return acc + cur.price; }, 0);
    if (showCart) {
        if (cart.length === 0) { return (<p className="text-lg p-1">Ostoskori on tyhjä!</p>) }
        else {
            return (
                <div className="bg-oma">
                    <p className="text-lg p-1">Ostoskorissa on yhteensä {cart.length} tuotetta,
                        kokonaishinta {Math.round(totalPrice * 100) / 100}€</p>
                    <ul>

                        {cart.map(
                            (c: any, index: number) => <CartItem key={index} cartItem={c} deleteItem={deleteItem} />
                        )}

                    </ul>
                </div>
            )
        }
    }
}

export default ShoppingCart;