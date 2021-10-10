const express = require('express');

const app = express();

const rooms = new Map([

]);

app.get('/users', (req,res)=> {
    rooms.set('hello','')
    // res.send('ответ')
   res.json(rooms)
});

app.listen(9999, (err)=>{
    if(err){
        throw Error(err)
    }
    console.log('server start')
});