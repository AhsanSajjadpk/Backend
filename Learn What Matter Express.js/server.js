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

// Dynamic Routing
app.get('/', (req, res) => {
  res.send('Hello Home Page!')
})
app.get('/profile', (req, res) => {
    res.send('Hello From Profile!')
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


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})