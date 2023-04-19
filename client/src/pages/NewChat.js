import React, {useState} from "react";
import axios from "axios"

function NewChat() {
    const [question, setQuestion] = useState("");
    const [data, setData] = useState([]);

    const handleQuestion = () => {

        axios.post("http://localhost:5000/chat/new",{
            question:question
        }).
        then(newData => axios.get("http://localhost:5000/chat/"+newData.data._id).then((res)=>console.log(res.data)));
        console.log(data)
        setQuestion("");
    }
    return (
        <div className="newchat">
            <div>
                <b><h1 align="center" className="newchat-h1">New Chat</h1></b>
                <br></br>
                
            </div>
            {data.map((res)=>{
                return(
                    <div>
                    <Answer chat={res.question} />
                    <Question chat={res.answer} />
                    </div>)
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