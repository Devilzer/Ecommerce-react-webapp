import React from 'react';
import SingleProduct from "./SingleProduct";
import { useSelector } from "react-redux";

function Products() {
    const state = useSelector(state => state);
    const initialArray = state.product.products;
    var products;
    function compare(a, b) {
        const priceA = a.price;
        const priceB = b.price;
        let comparison = 0;
        if (priceA > priceB) {
          comparison = 1;
        } else if (priceA < priceB) {
          comparison = -1;
        }
        return comparison;
        };
        if(state.ui.filter==="true"){
            products = [...initialArray];
            products.sort(compare);
          }
          else{
            products = state.product.products;
          }

          var filtered=[];
        if(state.ui.search!==""){
        filtered= products.filter(book=>{
            return book.title.toLowerCase().indexOf(state.ui.search.toLowerCase())!==-1;
        })
        }
        else{
        filtered = products;
        }

    return (
        <div className="product-page">
          {
            filtered.map((product,index)=>(
                <SingleProduct 
                    key={index}
                    product={product}
                />
            ))
          }
          

        </div>
    )
}

export default Products;
