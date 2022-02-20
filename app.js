require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10; //The more the more time it takes to hash.


const app = express();
//To get the value of .env file 
// console.log(process.env.API_KEY);

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB");

//Mongoose schema for password Encryption.
const userSChema = new mongoose.Schema({
    email: String,
    password: String
});



// mongoose model
const User = mongoose.model("User", userSChema);


app.get('/',function(req,res){
    res.render("home");
});

app.get('/login',function(req,res){
    res.render("login");
});

app.get('/register',function(req,res){
    res.render("register");
});

app.post('/register', function(req,res){

    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const newUser = new User({
            email: req.body.username, //email has the value as the user typed in the registration input
            password: hash
        });
    
      newUser.save(function(err){
            if(err){
                console.log(err);
            } else {
                res.render('secrets'); //After the registration the user can access the secrets page.
            }
        });
    });
});

app.post('/login', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username}, function(err , foundUser){ //all the DB data of the user is inside foundUser.
        if(err){
            console.log(err);
        } else {
            if(foundUser){
                bcrypt.compare(password, foundUser.password, function(err, result) {
                    if(result === true){
                        result.render("secrets");
                    }
                });
                
                    
            
            }
        }
                
                
            
    });


});

app.listen(3000, function(req,res){
    console.log("Your server is running smoothly at localhost:3000");
});
