// now not using commonjs and using module 

import fs from "fs/promises"

//we don't need to be async function to use "await" here:

let a = await fs.readFile("Harry.txt")
let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise")

console.log(a.toString());