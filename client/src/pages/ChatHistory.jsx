import React from "react";
import {Link} from "react-router-dom";

function ChatHistory() {
    return (
        <div className="chathistory">
        <div>
            <b><h1 align="center" className="chathistory-h1">Chat History</h1></b>
            <br></br>
            
        </div>
        <div className="combined">
            <h2 className="combined-h2"> Chat on 14th April </h2>
        <Link to={"/newchat"}>
        <div className="button-container">
              <input type="submit" value="Open Chat" />
            </div>
        </Link>
        </div>
        </div>
    )
}
export default ChatHistory;