const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const User = require('./model/userModel')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
dotenv.config();

const PORT = process.env.PORT || 8080
const mongourl = process.env.MONGO_URL;

mongoose.connect(mongourl).then(() => {
    console.log('We Go Again!!! DB Connected Successfully');
    app.listen(PORT, () => {
        console.log(`I don tire aje but Server Up on ${PORT}`)
    })
}).catch(error => console.log(error))

app.get('/api/user', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
})

app.get('/api/user/:id', async (req, res) => {
    try {
        const {id} = req.params;       
        const user = await User.findById(id)

        if(!user) {
            return res.status(404).json({message: `cannot find user with ${id}`})
        }
        
        res.status(200).json(user) 
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})
    }
})

app.post('/api/user', async (req, res) => {
    // console.log(req.body)
    // res.send(req.body)
    try {
        const user = await User.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

//update user
app.put('/api/user/:id', async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body)

        if(!user) {
            return res.status(404).json({message: `cannot find user with ${id}`})
        }

        const updatedUser = await User.findByIdAndUpdate(id)
        res.status(200).json(updatedUser)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.delete('/api/user/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id)

        if(!user) {
            return res.status(404).json({message: `cannot find user with ${id}`})
        }

        res.status(200).json({message: "Successfully deleted"})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: error.message})
    }
})
