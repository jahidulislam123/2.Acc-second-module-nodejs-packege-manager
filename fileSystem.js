const http =require('http');
const url =require('url');
//file er jonno prothomei fs module require korte hobe eta hocce shobceye beshi mendatory 
const fs =require('fs')


//eta hocce asyncronous er jonno 
// const server =http.createServer((req,res)=>{
//     if(req.url='/'){
//         fs.readFile('data.txt',(err,data)=>{
//             if(err){
//                 res.write("Failed to read data")
//                 res.end()
//             }else{
//                 res.write(data)
//                 res.end()
//             }
//         })

//     }
// })


//nicer ta hocce syncronous er jonno
const server =http.createServer((req,res)=>{
//  const data=   fs.readFileSync('data.txt')
//  res.write(data);
//  res.end()



// ekhon arekta system er korbo 
fs.writeFile('data.txt','hello Node js !!!',(err)=>{
    if(err){
        res.write("data failed to write !!!")
        res.end()
    }else{
        res.write("data writtend successfully")
        res.end()
    }
})

})

const PORT =4000;
server.listen(PORT);
console.log(`server is running at ${PORT}`)