const express = require('express')
const app = express()
const port = 3000

// we're saying we want to use ejs template engine
app.set("view engine", "ejs")


app.get('/', (req, res) => {
//   res.send('Hello World!')
siteName = "Rendered as ejs name"
//now we'll render index.html in "/" path
res.render("index", {siteName: siteName})
})

// example we get blog title and content from the DB and now want to add it in index.html now
app.get("/blog/:slug", (req,res)=>{

// if we get these 2 variables from DB
// we are going to use template engines now (ejs)
    let blotTitle = "Adidas"
    let blogContent = "It's a very good brand"
res.render("blogpost.html", {blogTitle: blogTitle, blogContent:blogContent})
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})