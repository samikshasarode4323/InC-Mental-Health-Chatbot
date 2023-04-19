import React, {useState} from "react";
import { chatData } from "../data/chatData";
function NewChat() {
    const [question, setQuestion] = useState("");
    const handleQuestion = () => {
        console.log(question);
        setQuestion("");
    }
    return (
        <div className="newchat">
            <div>
                <b><h1 align="center" className="newchat-h1">New Chat</h1></b>
                <br></br>
                
            </div>
            {chatData.map((res)=>{
                if(res.type==="Answer"){
                    return(
                    <Answer chat={res.chat} />)
                }else{
                    return(
                    <Question chat={res.chat} />
                    )
                }
            })}
            <div className="Input">
                    <textarea placeholder="Ask.." rows={"3"} value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                    <br></br>
                    <br></br>
                    <input type="button" value="Submit" onClick={handleQuestion} className="btn btn-primary" />
                </div>
        </div>
    )
}
function Answer(props){
    return(
        <div className="answer">
            <h4>{props.chat}</h4>
        </div>
    )
}
function Question(props){
    return(
        <div className="question">
            <h4>{props.chat}</h4>
        </div>
    )
}
export default NewChat;