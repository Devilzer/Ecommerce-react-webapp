import React,{useState} from 'react';
import { addUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function SignUp({setType}) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.ui.users);
    const [value, setValue] = useState({
        name : "",
        email:"",
        password:""
    });
    const handleSubmit = ()=>{
        if(value.name==="" || value.email==="" || value.password===""){
            return;
        }
        //checking for duplicate user email.
        var index =users.findIndex(user=>user.email===value.email);
        if(index===-1){
            dispatch(addUser(value));
            setValue({...value,name:"",password:"",email:""});
        }
        else{
            console.log("duplicate");
            return;
        }
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
