import React from "react";
import { ChatEngine } from "react-chat-engine";

import Login from "./Components/Login.jsx";

function App() {
    if(!localStorage.getItem("username")) {
        return <Login />;
    }
    document.querySelector("body").style.background = "white";
    return (   
        <ChatEngine
			height='100vh'
			userName= {localStorage.getItem("username")}
			userSecret= {localStorage.getItem("password")}
			projectID='your_project_id'
		/>
    );
}

export default App;