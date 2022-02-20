# AuthenticationAndSecurity
- Six levels of security for a Web

- Using mongoose as DB for user and password.

## Why Authenticate?
- Creating an ID card for the users.
- Prevent anonymous Users 
- so that all the data they generate like messages, history, activities , products can be stored in a secure place
- Restrict access to certain areas of the service depending on the user like spotify+ subscription. Unlimited music without any ads.

***There are 6 levels of security in our web.***
- **Level 1 Basic level, Only Email and password**
   - Password will be stored in simple Text which makes it extremely vulnerable of theif and cyber hacking.
- **Level 2 Mongoose DataBase Encryption**
   - Using mongoose-encryption to encrypt our database password.
   - To Secure the encryption key, it will be added in the .env file.
   - We can use it by using the command.
    ```
    require('dotenv').config();
    console.log(process.env.API_KEY);
    
    ```
   - Later it will be .gitignore in the github commits.
- **Level 3 **
- **Level 4 **
- **Level 5 **
- **Level 6 **
# Some git commands 
```
git pull --rebase origin main
git push origin main
```
