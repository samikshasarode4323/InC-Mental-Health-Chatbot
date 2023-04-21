require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const express=require('express')
const bodyParser=require('body-parser')
const axios=require('axios')

const chat = require('../model/chatModel')

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

let prompt = "The following is a conversation with a psychatrist. \n"



exports.askQuestion = async (req, res) => {
  try {

    function chatToString(arr){
      arr.map((item) => {
        prompt += "\nHuman:" + item.question + "\npshycatrist:" + item.answer;
      });
    }

    const { question } = req.body;
    // axios.get('http://localhost:9000/emotiondetector/'+question).then((response)=>{console.log(response.data)}).catch((err)=>{
    //   console.log(err.message)
    // })
    console.log(req.params.id)
    const cht1=await chat.findById(req.params.id)
    chatToString(cht1.chat)
    // console.log(`${prompt} \nHuman: ${question}\npsychatrist: `)
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt} \nHuman: ${question}\npsychatrist:`,
      max_tokens: 64,
      temperature: 0,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    cht1.chat.push({
      question:req.body.question,
      answer:response.data.choices[0].text
    })
    cht1.save()
    console.log(response.data.choices[0].text)
    
    return res.status(200).json(cht1);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}


exports.getChatHistory = (req, res) => {
  try {
    chat.find()
      .then(chats => { res.json(chats) })
  } catch (err) {
    return res.status(400).json(err.message)
  }
}

exports.getChat =async (req, res) => {
  id = req.params.id
  const cht1=await chat.findById(id)
  return res.status(200).send(cht1)
}
  


exports.createChat = async (req, res) => {
  try {
    const newChat = new chat({
      chat: [
        
      ]
    })
    newChat.save()
    return res.status(200).json(newChat);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}