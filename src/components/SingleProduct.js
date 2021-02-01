import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

function SingleProduct({product}) {
    return (
        <div className="product">
            <img src={product.img}className="image" alt="product">
                </img>
            <div className="name">
                {product.title}
            </div>
            <Rating name="read-only" value={Math.round(product.rating)} readOnly />
            <div className="price">
                Rs {product.price}
            </div>
            <Button variant="contained" color="primary">
                <i className="fas fa-cart-plus"></i>
            </Button>
        </div>
    )
}

export default SingleProduct;
