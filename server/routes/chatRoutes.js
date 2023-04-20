const express=require('express')

const {askQuestion , getChatHistory , getChat , createChat}=require("../controllers/chatcontroller")
const router=express.Router();

router.get("/",getChatHistory);

router.get("/:id",getChat);

router.post("/new",createChat);

router.post("/:id", askQuestion);



module.exports=router;