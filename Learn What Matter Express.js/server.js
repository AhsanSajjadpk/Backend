const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000

// Middleware

app.use((req,res,next)=>{
    console.log('Run before route ');
    next();
})
app.use((req,res,next)=>{
    console.log('Run before route - 2nd Middleware ')
    next();
})
// -----------------------------------------------------------
// EJS SETUP ====================
// npm i ejs
// code
app.set("view engine","ejs");
// views folder
//views/file.ejs
//res.render('file')
// -----------------------------------------------------------


// -----------------------------------------------------------
// Static Files ===============
// Create folder public
// code
app.use(express.static('./public'));
// views folder
//views/file.ejs
//res.render('file')
// -----------------------------------------------------------


// Dynamic Routing
app.get('/', (req, res) => {
  res.render("home");
})
// -----------------------------------------------------------

app.get('/profile', (req, res) => {
    // Dynamic Changing
    res.render('profile',{name : "AHSAN SAJJAD"})
  })
// -----------------------------------------------------------
app.get('/error', (req, res,next) => {
  throw Error("Something went wrong")
})


app.get('/profile/ahsan', (req, res) => {
    res.send('Hello Ahsan!')
  })
  app.get('/profile/bilal', (req, res) => {
    res.send('Hello bilal!')
  })
  app.get('/profile/:username', (req, res) => {
    res.send(`Hello Mr. ${req.params.username}`)
  })


  // Error Handling ==== ==========

  app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    // err is the error which we was thrown from error route
    res.render('error', { error: err })
  })

//================================================
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})