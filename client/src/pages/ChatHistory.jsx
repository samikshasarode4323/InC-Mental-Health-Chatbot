import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
function ChatHistory() {
    const [list, setList] = useState([]);

    useEffect(() => {
        retrieveList()
    }, [])

    function retrieveList() {
        axios.get("http://localhost:5000/chat")
            .then((res) => {
                setList(res.data)
                console.log("Api response :" + res.data)
                console.log(list)
            }).catch((err) => {
                console.log(err);
            })
    }

    function addItem(current) {
        setList(current)
    }

    return (
        <div className="chathistory">
            <div>
                <b><h1 align="center" className="chathistory-h1">Chat History</h1></b>
                <br></br>

            </div>
            {list.map((item)=>{
                return(<ChatTile date={item.date}/>)
            })}
        </div>
    )
}

function ChatTile(props) {
    return (
    <div className="combined">
        <h2 className="combined-h2"> Chat on {props.date} </h2>
        <Link to={"/newchat"}>
            <div className="button-container">
                <input type="submit" value="Open Chat" />
            </div>
        </Link>
    </div>)
}
export default ChatHistory;