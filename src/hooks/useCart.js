const { useState } = require("react");
const { useEffect } = require("react");
const { getStoredCart } = require("../utilities/fakedb");

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(
                    (product) => product.key === key
                );
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);
    return [cart];
};

export default useCart;
