const CartItems = ({ cart, deleteItem }: any) => {

  const cartItems = cart.map((item: any) =>
    <li className="px-2 py-0.5" key={item.id}>
      {item.title} — {item.price}€{' '}
      <button className="bg-oma-dark hover:bg-slate-900 active:bg-black text-white py-0.4 px-3 rounded-xl" onClick={() => (deleteItem(item.id))}>Poista</button>
    </li>
  );

  return (<ul>{cartItems}</ul>)
}



export default CartItems
