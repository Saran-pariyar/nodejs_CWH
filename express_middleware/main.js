const express = require('express')
const app = express()
const port = 3000

// MIDDLEWARE MODIFIES OUR REQUEST 
// middleware is a function which runs before every request
// to create a middleware, we write app.use() and put a function inside it
// if we also wanted to do something for all request, we can do it with middleware

app.use((req, res, next)=>{

    console.log(`${Date.now()} is a ${req.method}`);
    next()
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})