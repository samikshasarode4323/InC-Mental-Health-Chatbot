const mongoose=require('mongoose')

const chatSchema=mongoose.Schema({
    date:{
        type:Date,
        default:Date.now
    },
    chat:[]  // array of question and answer
})

module.exports=chatSchema