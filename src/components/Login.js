import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions";
import { showNotification } from "../config/noty";

function Login({setType}) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.ui.users);
    const [value, setValue] = useState({
        email:"",
        password:""
    });
    const handleSubmit =()=>{
        if(value.email==="" || value.password===""){
            showNotification("Please fill the values!");
            return;
        }
        var index =users.findIndex(user=>user.email===value.email);
        if(index===-1){
            showNotification("Invalid User!");
            return;
        }
        else{
            if(users[index].password===value.password){
                dispatch(loginUser(users[index]));
            }
            else{
                showNotification("Invalid Email or Password!");
                return;
            }
            
        }
    }
    return (
        <div className="login-container">
            <div className="contents">
                <div className="wtext">
                    Welcome Back,
                </div>
                <h1>
                    Log In!
                </h1>
                <input type="text" value={value.email} onChange={(e)=>setValue({...value,email:e.target.value})}  placeholder="Email"/>
                <input type="password" value={value.password} onChange={(e)=>setValue({...value,password:e.target.value})}  placeholder="Password"/>
                <button onClick={handleSubmit}>
                    Log In
                </button>
            </div>
            <div className="switch" onClick={()=>setType("signup")}>
                Create account
            </div>
        </div>
    )
};

export default Login;
