import React from "react";

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;

    const { RemoveCartProduct } = props;
    return (
        <div>
            <h4 className="product">{name}</h4>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <button
                onClick={() => RemoveCartProduct(key)}
                className="btn-regular"
            >
                Remove
            </button>
        </div>
    );
};

export default ReviewItem;
