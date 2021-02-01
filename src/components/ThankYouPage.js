import React from 'react';
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

function ThankYouPage() {
    const orders = useSelector(state => state.cart.order);
    const products = useSelector(state => state.product.products);
    const name = useSelector(state => state.ui.user.name);
    var total = 0;
    for(let item of orders){
      const cartItem = products.find(obj=>obj.id===item.id);
      total = total + ((cartItem.price)*item.quantity);
    }
    return (
        <div className="thank-container">
            <h1>
                {name} Thank You for Shopping With us!
            </h1>
            <div className="order-container">
                <h2>
                    Order Details
                </h2>
                {orders.map((product,index)=>(
                    <OrderItem
                        product={product}
                        key={index}
                    />
                ))}
                <div className="total">
                    <div>
                        Total : {total}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYouPage;
