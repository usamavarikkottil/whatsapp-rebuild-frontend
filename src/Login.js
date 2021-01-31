import React, { useState } from 'react'
import axios from "./axios"
// import './App.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const submitLogin = async (e) => {

        e.preventDefault();
        await axios.post("/user/login", {
            withCredentials: true,
            username: username,
            password: password,
        }).then((res) => {
            // handle success
            console.log("success:", res);
            setMessage("Login success");



        })
            .catch(function (error) {
                // handle error
                console.log("error:", { error });
                setMessage("Login Failed...")
            })

        setUsername("");
        setPassword("");

    }

    const checkAuth = async () => {
        await axios.get("/user/isAuthenticated",
            {
                withCredentials: true //configure cors in the
                //backend to be able to store cookies in the front end.
            })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="">
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter your mobile number" />
            <input type="password" onClick={checkAuth} name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <input className="btn btn_blue" onClick={submitLogin} type="submit" value="Login" />
            {/* <Link to="/register" className="btn btn_green"> Create New Account </Link> */}
        </div>
    );
}

export default Login;
