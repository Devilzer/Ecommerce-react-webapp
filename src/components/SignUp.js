import React,{useState} from 'react';
import { addUser } from "../redux/actions";
import { useDispatch } from "react-redux";

function SignUp({setType}) {
    const dispatch = useDispatch();
    const [value, setValue] = useState({
        name : "",
        email:"",
        password:""
    });
    const handleSubmit = ()=>{
        dispatch(addUser(value));
        console.log(value);
    };
    return (
        <div className="signup-container">
            <div className="contents">
                <div className="wtext">
                    Hello,
                </div>
                <h1>
                    Create account!
                </h1>
                <input type="text" value={value.name} onChange={(e)=>setValue({...value,name:e.target.value})} placeholder="Name"/>
                <input type="text" value={value.email} onChange={(e)=>setValue({...value,email:e.target.value})} placeholder="Email"/>
                <input type="text" value={value.password} onChange={(e)=>setValue({...value,password:e.target.value})} placeholder="Password"/>
                <button onClick={handleSubmit}>
                    Create account
                </button>
            </div>
            <div className="switch" onClick={()=>setType("login")}>
                Log In
            </div>
        </div>
    )
};

export default SignUp;
