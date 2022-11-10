const events =require('events');
const { EventEmitter } = require('stream');


// so prothome event create korte hobe 
const eventEmitter =new events.EventEmitter()
// creating and event 

const chitkarDibo =()=>{
    console.log("oi beta ami dharaiya aci ");
}

// assign the handler into an event 

EventEmitter.on('scream',chitkarDibo).chitkarDibo

//firing the event

eventEmitter.emit('scream')