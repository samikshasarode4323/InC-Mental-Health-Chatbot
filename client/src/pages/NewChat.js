import React from "react";
import { chatData } from "../data/chatData";
function NewChat() {
    return (
        <div className="newchat">
            <b><h1 align="center">New Chat</h1></b>
            <br></br>
            <div className="Input">
                <textarea placeholder="Ask.." rows={"3"}></textarea>
                <br></br>
                <br></br>
                <input type="button" value="submit"  className="btn btn-primary" />
            </div>
        </div>
    )
}

export default NewChat;