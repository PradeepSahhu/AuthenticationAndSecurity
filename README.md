# AuthenticationAndSecurity
- Six levels of security for a Web

- Using mongoose as DB for user and password.

## Why Authenticate?
- Creating an ID card for the users.
- Prevent anonymous Users 
- so that all the data they generate like messages, history, activities , products can be stored in a secure place
- Restrict access to certain areas of the service depending on the user like spotify+ subscription. Unlimited music without any ads.

***There are 6 levels of security in our web.***
- **Level 1-Basic level, Only Email and password**
   - Password will be stored in simple Text which makes it extremely vulnerable of theif and cyber hacking.
- **Level 2-Mongoose DataBase, Password Encryption**
   - Using mongoose-encryption to encrypt our database password.
   - To Secure the encryption key, it will be added in the .env file.
   - We can use it by using the command.
    ```
    require('dotenv').config();
    console.log(process.env.API_KEY);
    ```
   - Later it will be .gitignore in the github commits.
- **Level 3-Hashing the Password**
   - Using the hasing function which is a mathematical function to encrypt the passwords. 
   - Passwords are easy to convert into Hash but almost impossible to convert back into password again because of its complex mathematics which is lots of time consuming.
   - so, How we will check if the real password is real or not while logging? we will convert the password into Hash while logging and then compare Hash with the Hash password which is in our database.
   - Hash can't decode the password, it can only encode.
  
  ## Hashing.
   - npm modules like md5 could to used in our server.
   - just npm i md45
   - require it and use it before passoword like md5();
  
- **Level 4 Salting the Hashed password**
   - Salt Rounds, Salting the password multiple rounds/times.
   - In this method of encryption salt and hash is stored in the DB.
   - more salt rounds = more salty = more secure.
   - Using npm bcrypt.
   
   ## Bcrypt npm module
   -npm i bcrypt
   ```
   const bcrypt = require('bcrypt');
   const saltRounds = 10;
   const myPlaintextPassword = 's0/\/\P4$$w0rD';
   
   bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
   });
   
   bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
   });
   ```
   
- **Level 5 **
- **Level 6 **
# Some git commands 
```
git pull --rebase origin main
git push origin main
```
