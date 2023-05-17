const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");



app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://nsriganesh2002:goldfish@cluster0.8bl8jgi.mongodb.net/mernin60?retryWrites=true&w=majority"
    );

app.get("/getUsers", async(req, res) => {

    /*UserModel.find({}, (err, result) => { 
        if(err) {
            res.json(err);
        }else {
            res.json(result);

        }        
    });*/
    const data = await UserModel.find({})
    
    res.json(data);
    console.log(data);
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();
    res.json(newUser); 

});


app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});