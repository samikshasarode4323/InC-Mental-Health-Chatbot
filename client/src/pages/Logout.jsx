import React from "react";
import loggedin from "../components/Navbar";
import {useNavigate} from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    return (
        <div>
            {loggedin ? navigate("/") : navigate("/newchat")}
        </div>
    )
}

export default Logout;