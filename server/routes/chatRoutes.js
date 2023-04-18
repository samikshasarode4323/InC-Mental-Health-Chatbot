const express=require('express')

const {askQuestion}=require("../controllers/chatcontroller")
const router=express.Router();

router.get("/")

router.get("/:id")

router.post('/', askQuestion)

module.exports=router;