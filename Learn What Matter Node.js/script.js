// npm init              - npm sa ak app initialize karo -> package.json/script ma start cmd, require
// npm install express   
// npm install nodemon   -refresh karna sa server restart ho jaya baar baar na chalana para

let name = "Ahsan"
let age = 21
let data;
module.exports = {Name: name, Age: age};


//-----------------------------------

var figlet = require("figlet");

figlet("AHSAN", function (err, data) {
  if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    });
    
    //----------JOKES-------------------------
    
        var daddy_jokes=require('daddy-jokes');
    console.log(daddy_jokes());
    
    
    //----------Nodemon-------------------------
    // npm i nodemon
    // server baar baar nai run karna parta resresh karna sa kaam ho jata ha
    // npx nodemon script.js
    
    //----------Express-------------------------

    const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>")
})
app.get('/jokes', (req, res) => {
  res.send(`<h1>${daddy_jokes()}</h1>`)
})
app.get('/art', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})