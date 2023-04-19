require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
const express=require('express')
const bodyParser=require('body-parser')

const chat = require('../model/chatModel')

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

let prompt = "The following is a conversation with a psychatrist. \n"



exports.askQuestion = async (req, res) => {
  try {

    function chatToString(id){
      const cht1 = chat.findById(id)
      cht1.chat.map((item) => {
        prompt += "\nHuman:" + item.question + "\npshycatrist:" + item.answer;
      });
    }

    const { question } = req.body;
    console.log(req.params.id)
    chatToString(req.params.id)
    console.log(`${prompt} \nHuman: ${question}\npsychatrist: `)
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
    console.log(response.data.choices[0].text)
    
    return res.status(200).json(newChat);
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
  


exports.askFirstQuestion = async (req, res) => {
  try {
    const { question } = req.body;
    console.log(`${prompt} \nHuman: ${question}\npsychatrist: `)
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
    console.log(response.data.choices[0].text)
    const newChat = new chat({
      chat: [
        {
          question: req.body.question,
          answer: response.data.choices[0].text
        }
      ]
    })
    newChat.save()
    return res.status(200).json(newChat);
  } catch (error) {
    return res.status(400).send(error.message);
  }
}