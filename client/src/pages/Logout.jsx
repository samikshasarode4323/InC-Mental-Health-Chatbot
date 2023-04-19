import React from "react";
import loggedin from "../components/Navbar";
import {useNavigate} from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    loggedin=false;
    navigate("/");
}

export default Logout;