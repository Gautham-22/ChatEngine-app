import React, {useState} from "react";
import axios from "axios";

import "../Login.css";

function Login() {
    const projectID = "your_project_id";

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");

    const handleSubmit = async(event) => {
        event.preventDefault();

        const config = {
            method : "get",
            url : "https://api.chatengine.io/users/me",
            headers : {
                'Project-ID': projectID, 
                'User-Name': username, 
                'User-Secret': password
            }
        };

        try {
            await axios(config);

            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            setError("");

            window.location.reload();

        } catch(err) {
            console.log(err);
            setError("Oops! Invalid credentials!");
        
        }
    }

    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="text" name="username" placeholder="Username" id="username" 
            autocomplete="off" required onChange={(e) => setUsername(e.target.value)} />
            <input type="password" name="password" placeholder="Password" id="password" 
            autocomplete="off" required onChange={(e) => setPassword(e.target.value)} />
            <input type="submit" value="Login" id="btn" />
            <h3 id="error">{error}</h3>
        </form>
    );
}

export default Login;