import React from 'react';
import Button from '@material-ui/core/Button';
import { useSelector } from "react-redux";
import CartItem from './CartItem';

function Cart() {
    const cart = useSelector(state => state.cart.cart);
    const products = useSelector(state => state.product.products);
    var total = 0;
    for(let item of cart){
      const cartItem = products.find(obj=>obj.id===item.id);
      total = total + ((cartItem.price)*item.quantity);
    }
    return (
        <div className="cart-container">
          {cart.length===0 && <div className="empty">
            Cart is empty!
          </div>}
          <div className="cartItems-container">
            {
              cart.map((product,index)=>(
              
              <CartItem
                key={index}
                product = {product}
              />

              ))
            }
          </div>
          
          <div className="total">
            <Button color="primary">Check Out&nbsp;<i className="fas fa-shopping-cart"></i></Button>
            <div className="tprice">
                <span>RS</span>&nbsp; {total} &nbsp;&nbsp;
            </div>
          </div>
        </div>
    )
}

export default Cart;
