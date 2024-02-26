const express = require('express')
const app = express()
const port = 3000


//we can make all files in public available to users if we put any file in public now.
// go to localhost:3000/public_text_file.txt to access the text file
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello Worlds!')
})


app.get('/about', (req, res) => {
    res.send('Hello about!')
  })
  

  app.get('/contact', (req, res) => {
    res.send('Hello contact!')
  })

  app.get('/blog', (req, res) => {
    res.send('Hello Blog!')
  })

// look at this, we have to write same code for lot of time, that's why we use slugs
// app.get('/blog/intro-to-js', (req, res) => {
//     res.send('Hello Intro to js!')
//   })

//   app.get('/blog/python-tutorial', (req, res) => {
//     res.send('Hello Python!')
//   })
//   app.get('/blog/learn-mongodb', (req, res) => {
//     res.send('Hello Mongodb!')
//   })





app.get("/blog/:slug", (req,res)=>{

// now if we go to /blog/tony, it will also work
    res.send(`Hello ${req.params.slug}`)
})
// slug is parameter and all things after "?" in an URL is query




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})