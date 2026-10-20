import ProductList from "./components/product-list";
import Cart from "./components/cart";

const App = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Redux cart</h1>

            <h2 className="font-bold">Products</h2>
            <hr />
            <div className="mt-2 mb-6"><ProductList /></div>

            <h2 className="font-bold">Cart</h2>
            <hr />
            <div className="mt-2"><Cart /></div>
        </div>
    )
}

export default App;
