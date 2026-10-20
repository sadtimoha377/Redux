import { useDispatch } from "react-redux";
import { addItem } from "../store/cart-slice";
import type { CartItem } from "../store/cart-slice";
import type { AppDispatch } from "../store/store";

const products: CartItem[] = [
    { id: 1, title: "Keyboard", price: 1250 },
    { id: 2, title: "Monitor", price: 8400 },
    { id: 3, title: "Mouse", price: 690 },
    { id: 4, title: "Headphones", price: 2300 }
];

const ProductList = () => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            {products.map((product) => (
                <div key={product.id} className="mb-2">
                    <span className="mr-2">{product.title} — {product.price} ₴</span>
                    <button
                        onClick={() => dispatch(addItem({ ...product, id: Date.now() }))}
                        className="border px-2 bg-gray-200"
                    >
                        Add
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ProductList;
