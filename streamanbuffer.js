const { chunk } = require("underscore")

const fs =require('fs')


const readstream =fs.createReadStream('./data.txt')

readstream.on("data",(chunk)=>{
    console.log('..............');
    console.log(chunk)
})

readstream.on('open',()=>{
    console.log("stream data is open")
})
setTimeout(()=>{
readstream.pause('pause');
console.log("steaming is pause now")

},15)

setTimeout(()=>{
    readstream.resume()
    console.log("streaming is resume now ")

},8000)