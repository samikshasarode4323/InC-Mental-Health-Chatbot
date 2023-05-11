const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler")
const User = require('../model/userModel');

exports.register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
      }
    
      // Check if user exists
      const userExists = await User.findOne({ email })
    
      if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }

    const salt=await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(password,salt);

    console.log(hashedPass)

    const user=new User({
        name:name,
        email:email,
        password:hashedPass
    })
    user.save()
    return res.status(200).json(user);
})

exports.login = (req, res) => {

}