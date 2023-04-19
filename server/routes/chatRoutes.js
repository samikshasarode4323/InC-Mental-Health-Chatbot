const express=require('express')

const {askQuestion , getChatHistory , getChat , askFirstQuestion}=require("../controllers/chatcontroller")
const router=express.Router();

router.get("/",getChatHistory);

router.get("/:id",getChat);

router.post("/new",askFirstQuestion);

router.post("/:id", askQuestion);



module.exports=router;