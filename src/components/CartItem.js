import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from "react-redux";
import { addProductCart, decreseQuantity, deleteCartProduct } from "../redux/actions";

function CartItem({product}) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);

    const cartItem = products.find(obj=>obj.id===product.id);

    const addToCart = () =>{
        var cartProduct = product.id;
        dispatch(addProductCart(cartProduct));
      };
      const decreseProductQty = ()=>{
        if(product.quantity>1){
          dispatch(decreseQuantity(product.id));
        }
      };
      const deleteProduct = ()=>{
        dispatch(deleteCartProduct(product.id));
      }

    return (
        <>
            <div className="item">
              <img src={cartItem.img}></img>

              <div className="sub-info">
                <div className="name">
                  {cartItem.title}
                </div>
                <Rating name="read-only" value={Math.round(cartItem.rating)} readOnly />
                <div className="price">
                  <span>Rs</span> {cartItem.price}
                </div>
              </div>
              <div className="qyt-container">
                <div className="qty">
                  Quantity
                </div>
                <div className="btn">
                  <Button variant="contained" color="primary" onClick={decreseProductQty}>
                    <i className="fas fa-minus-circle"></i>
                  </Button>
                  <span className="cnt">{product.quantity}</span>
                  <Button variant="contained" color="primary" onClick={addToCart}>
                    <i className="fas fa-plus-circle"></i>
                  </Button> 
                </div>
              </div>
              <div className="delete-cont">
                <Button variant="contained" color="secondary" onClick={deleteProduct}>
                  <i className="fas fa-trash-alt"></i>
                </Button>
              </div>
            </div>
        </>
    )
}

export default CartItem;
