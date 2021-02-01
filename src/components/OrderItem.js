import React from 'react';
import { useSelector } from "react-redux";

function OrderItem({product}) {
    const products = useSelector(state => state.product.products);
    const cartItem = products.find(obj=>obj.id===product.id);
    return (
        <div className="product">
            <div>{cartItem.title}</div> &nbsp;- &nbsp;
            <div>Quantity: {product.quantity}</div> &nbsp; - &nbsp;
            <div>price: {cartItem.price}</div>
        </div>
)
}

export default OrderItem;
