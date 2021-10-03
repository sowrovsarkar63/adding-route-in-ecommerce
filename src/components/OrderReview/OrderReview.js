import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";
import Cart from "../Cart/Cart";

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    const [cart] = useCart(products);

    return (
        <div>
            <div className="shop-container">
                <div className="product-container"></div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;
