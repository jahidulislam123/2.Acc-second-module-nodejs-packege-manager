// global variable 
// var name ="programming hero "
// console.log(global.name );
// const name1="jahidul islam";
// console.log(name1);

// const {name,add}=require('./2.other.js')
// const others =require('./2.other')
// const res=others.substraction(5,4)

// console.log(res)

// evabeo kora jay




// const _=require('underscore')
// const addit =add(2,4)
// console.log(addit)
// console.log(name);


// const http = require('http');
// //create a server object:
// const server1 = http.createServer(function (req, res) {
//   console.log(`server is running`);
// });
// server1.listen(5000)

// //the server object listens on port 8080

// var stooges = [

//   {
//     name: 'moe',
//      age: 40
//   }, 

//   {
//     name: 'larry', 
//     age: 50
//   }, 

//   {
//     name: 'curly', 
//     age: 60
//   }

// ];
// const res=_.pluck(stooges, 'name');
// console.log(res)





// ekhon local module use korbona , core module use korbo 



//eita alada arekta part jokhon porbo uporer gula comment out korbo tarpor nicer gula comment out korbo 
// const http =require('http');
// const { stringify } = require('querystring');
// console.log(http);

// const server = http.createServer((req,res)=>{
//   // res.end("hello nodoejs")
//   // console.log(req.url)
//   if(req.url=='/'){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('<p>This is home page </p>');
//     res.end()
//   }

//   else if(req.url=='/contact'){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('<p>This is contact  page </p>');
//     res.end()
//   }

//   else if(req.url=='/about-us'){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write('<p>This is about us  page </p>');
//     res.end()
//   }

//   else if(req.url=='/json'){
//     res.writeHead(200,{'Content-Type':'application/json'})
//     res.write(JSON.stringify({course:"ACC"}));
//     res.end()
//   }
// })
// const PORT=5000;
// server.listen(PORT)
// console.log(`server is running at ${PORT}`);



// 3rd ongso suro hobe ekhon theke 

const http =require('http')
const url =require('url')

const server =http.createServer((req,res)=>{
  const address_url ='http://localhost:5000/contact?name=mezba&country=bangladesh';
  const parsed_url= url.parse(address_url,true);
  console.log(parsed_url);

})
console.log(url)

const PORT =5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);