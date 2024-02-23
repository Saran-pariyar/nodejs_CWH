// to create a structured project, we have to do "npm init" first and fill the details

var slugify = require('slugify')

//slugify will remove spaces in string and create it as url slug
let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
console.log(b)