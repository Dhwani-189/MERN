const express = require('express');
const router = express.Router();

router.get('/' , (req, res) => {
    res.send(`hello world from server router.js`);
});
router.post('/register' , async(req,res) => {

    const User = require('../model/userSchema')

    const {name , email , phone , password ,cpassword} = req.body;
    
    if(!name ||  !email || !phone ||  !password || !cpassword){
        return res.status(423).json({error : "plz fill all the above field"})
    }
        try{
            const userExist =  await User.findOne({email : email})
            if(userExist){
                return res.status(422).json({error : "user already exist"})
            }
                const user = new User({name , email , phone , password ,cpassword});

                const userRegister = await user.save()
                if(userRegister){
                    res.status(201).json({message : "user registered succesfully" })
                }else{
                    res.status(500).json({error : "failed to register"})
                }
        }
        catch(err){
        console.log(err)
        }
});
module.exports = router;