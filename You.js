
const user ="Jahidul islam"
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = ["Jennifer", "Elizabeth Olsen", "Saoirse Ronan", "Michelle Yeoh", "Zoe Saldana"];
if(items){
    console.log(user ,"+",random_item(items),"= Somvob na , Ekhono boyos Hoy ni ");

}
else{
    console.log("vagghe ki kicu nai ?")

}
