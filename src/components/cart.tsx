import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../store/cart-slice";
import type { RootState, AppDispatch } from "../store/store";

const Cart = () => {
    const items = useSelector((state: RootState) => state.cart.items);
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            {items.length === 0 && <p>Cart is empty</p>}

            <ul className="mb-2">
                {items.map((item) => (
                    <li key={item.id} className="mb-1">
                        <span className="mr-2">{item.title} — {item.price} ₴</span>
                        <button onClick={() => dispatch(removeItem(item.id))} className="border px-2">Remove</button>
                    </li>
                ))}
            </ul>

            <p className="font-bold">Total: {totalPrice} ₴</p>

            <button onClick={() => dispatch(clearCart())} className="border px-2 bg-gray-200 mt-2">Clear cart</button>
        </div>
    )
}

export default Cart;
