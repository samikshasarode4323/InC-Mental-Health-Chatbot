require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const chatSchema=require('../model/chatModel')

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
  });
const openai = new OpenAIApi(configuration);

let {prompt}=""

exports.askQuestion=async (req,res)=>{
    try {
        const { newChat } = req.body;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "The following is a conversation with a psychatrist. \n\nHuman: I am feeling depressed\npsychatrist:",
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
          });
        console.log(prompt)
        return res.status(200).json({
          success: true,
          data: response.data.choices[0].text,
        });
      } catch (error) {
        return res.status(400).json({
          success: false,
          error: error.response
            ? error.response.data
            : "There was an issue on the server",
        });
      }
}
    

exports.getChatHistory=()=>{

}

exports.getChat=()=>{

}
const chatToString=()=>{

}