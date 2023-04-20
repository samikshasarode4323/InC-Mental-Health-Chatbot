import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export var id;

function NewChatPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        axios.post("http://localhost:5000/chat/new").then(newData =>{id=newData.data._id})
        setIsSubmitted(true);
        navigate("/newchat");
    }
    return (
        <div className="newchatpage">
            <div>
                    <b><h1 align="center" className="newchat-h1">Open New Chat Page</h1></b>
            </div>
            <div className="Input">
                <div className="center1">
                    <input type="button" value="Open New Chat" onClick={handleSubmit} className="btn btn-primary" />
                </div>
            </div>
        </div>
    )
}

export default NewChatPage;