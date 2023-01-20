const CartItem = ({cartItem, deleteItem} :any) => (
    <li className="py-0.5 pl-2">{cartItem.title} — {cartItem.price}€{' '}
        <button className="bg-slate-800 hover:bg-slate-900
         text-oma-light font-bold px-2 rounded" onClick={()=>(deleteItem(cartItem.id))}>
            Poista tuote
        </button></li>
)


export default CartItem