import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";
import { deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart(products);
    const RemoveCartProduct = (key) => {
        const newCart = cart.filter((product) => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    };

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {cart.map((product) => (
                        <ReviewItem
                            key={product.key}
                            product={product}
                            RemoveCartProduct={RemoveCartProduct}
                        ></ReviewItem>
                    ))}
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;
