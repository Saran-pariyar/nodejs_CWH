import path from "path"

// let myPath = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video 87\\harry.txt"
//gives extention name
console.log(path.extname(myPath))

//gives directory name
console.log(path.dirname(myPath))

//gives basename example: harry of harry.txt
console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\harry.txt"))