const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


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