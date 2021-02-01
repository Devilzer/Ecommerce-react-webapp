import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';

function Home() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    return (
        <div className="home-container">
            <div className= "header"> 
                <div className="heading" >
                    Ecommerce Store
                </div>
                {state.ui.page==="home"&&<input type="text" placeholder="Search Products...." />}
                
                <div className ="head-buttons">
                    <div className="cart" >
                        <span>0</span><i className="fab fa-opencart"></i>
                    </div>
                    <Button>Log Out&nbsp;<i className="fas fa-sign-out-alt"></i></Button>
                </div>
            </div>
        </div>
    )
}

export default Home;
