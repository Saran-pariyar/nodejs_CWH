const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World!')

//now we'll render index.html in "/" path
res.sendFile("templates/index.html", {root:__dirname})
})

// example we get blog title and content from the DB and now want to add it in index.html now
app.get("/blog/:slug", (req,res)=>{

// if we get these 2 variables from DB
// we are going to use template engines now (ejs)
    let blotTitle = "Adidas"
    let blogContent = "It's a very good brand"
res.sendFile("templates/index.html", {root:__dirname})
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})