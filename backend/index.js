const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user')
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://127.0.0.1:27017/fb-clone')

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello');
})

app.post('/users/register/', async(req,res) => {
    console.log(req.body)
    try{
        const user = await User.create({
            fname: req.body.fname,
            sname: req.body.sname,
            remail: req.body.remail,
            npass: req.body.npass,
            dob : req.body.dob,
            gender: req.body.gender
        })
        res.json({status : 'ok'})
    }
    catch(err){
        res.json({status : 'error', error: 'Duplicate emails'})
        console.log(err)
    }

})

app.post('/users/login/', async(req,res)=>{
    console.log(req.body)
    const user = await  User.findOne({
        remail : req.body.email,
        npass : req.body.pass,
    })
    if (user){
        console.log(user)
        const token = jwt.sign({
            name: user.fname,
            email: user.remail,

        },'ThisSecret@')
        return res.json({user:token, status : 'ok'})
    }
    else{
        return res.json({status : 'error',user:'false'})
    }
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000....')
})