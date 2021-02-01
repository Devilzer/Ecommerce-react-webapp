import React,{useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import { fetchProducts, updateSearch, setFilter , setPage} from "../redux/actions";
import Products from "./Products";
import Cart from "./Cart";

function Home() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    useEffect(()=>dispatch(fetchProducts()),[dispatch]);
    var ele ;
    if(state.ui.filter==="true"){
        ele = <div className="sort-con">
            <div onClick={()=>dispatch(setFilter("false"))}>
            &nbsp;<span>Sort By Price</span>&nbsp;<i className="fas fa-times-circle"></i>
            </div>
        </div>;
    }
    else{
        ele = <div className="sort-con">
            <div onClick={()=>dispatch(setFilter("true"))}>
            &nbsp;<span>Sort By Price</span>&nbsp;
            </div>
        </div>;
    }
    return (
        <div className="home-container">
            <div className= "header"> 
                <div className="heading" onClick={()=>dispatch(setPage("home"))}>
                    Ecommerce Store
                </div>
                {state.ui.page==="home"&&<input type="text" placeholder="Search Products...." value={state.ui.search} onChange={(e)=>dispatch(updateSearch(e.target.value))}/>}
                
                <div className ="head-buttons">
                    <div className="cart" onClick={()=>dispatch(setPage("cart"))}>
                        <span>0</span><i className="fab fa-opencart"></i>
                    </div>
                    <Button>Log Out&nbsp;<i className="fas fa-sign-out-alt"></i></Button>
                </div>
            </div>
            {state.ui.page==="home"&&ele}
            {state.ui.page==="home"&&<Products/>}
            {state.ui.page==="cart"&&<Cart/>}
        </div>
    )
}

export default Home;
