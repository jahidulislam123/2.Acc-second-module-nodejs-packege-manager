const http =require('http')
const url =require('url')

const server =http.createServer((req,res)=>{
  const address_url ='http://localhost:5000/contact?name=mezba&country=bangladesh';
  const parsed_url= url.parse(address_url,true);
  console.log(parsed_url);

  // i can do a acam 
  const queryObject =parsed_url.host
  console.log(queryObject)

})
// console.log(url)

const PORT =4000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);