const express = require('express')
//exporting routes
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static('public'))

//now all the url that will have /blog will be handled by this route
// if i go to localhost:3000/blog/about, the get request inside blog will be called
// we can also go to /blog/intro-to-express
app.use('/blog', blog)
//now all the url that will have /shop will be handled by this route
app.use('/shop', shop)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//testing POST request
app.post('/', (req,res)=>{
    res.send('Hello World Post')
})


//we need to use sendFile to render a proper html page
app.get("/index", (req, res) => {
    // console.log(__dirname)
    // console.log("H");
    // we gave directory name in __dirname
    res.sendFile('templates/index.html', { root: __dirname })
})


// to return a json
app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})