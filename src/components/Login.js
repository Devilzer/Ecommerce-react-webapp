import React from 'react';

function Login({setType}) {
    return (
        <div className="login-container">
            <div className="contents">
                <div className="wtext">
                    Welcome Back,
                </div>
                <h1>
                    Log In!
                </h1>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button>
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
