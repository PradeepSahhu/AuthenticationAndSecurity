const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require("mongoose");
const encrypt = require('mongoose-encryption');

const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/userDB");

// ----- simple mongoose schema.
// const userSChema = {
//     email: String,
//     password: String
// };

//Mongoose schema for password Encryption.
const userSChema = new mongoose.Schema({
    email: String,
    password: String
});
//It will encrypt and decrypt our password automatially.
const secret = "Thisisourlittlesecret."; //encryption key.
userSChema.plugin(encrypt,{secret: secret, encryptedFields: ['password']}); 


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
    const newUser = new User({
        email: req.body.username, //email has the value as the user typed in the registration input
        password: req.body.password
    });
    newUser.save(function(err){
        if(err){
            console.log(err);
        } else {
            res.render('secrets'); //After the registration the user can access the secrets page.
        }
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
                if(foundUser.password === password){
                    // console.log(foundUser.password);
                    res.render("secrets");
                }
            }
        }
                
                
            
    });


});

app.listen(3000, function(req,res){
    console.log("Your server is running smoothly at localhost:3000");
});
