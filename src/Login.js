import React from 'react'
// import './App.css';

function Login() {
    return (
        <div className="">
            <input type="text" name="username" value="" onChange="" placeholder="Username or Email address " />
            <input type="password" name="password" value={""} onChange={"asfd"} placeholder="Password" />
            <input className="btn btn_blue" onClick={"adfs"} type="submit" value="Login" />





            {/* <Link to="/register" className="btn btn_green"> Create New Account </Link> */}

        </div>
    );
}

export default Login;
