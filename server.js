
const express=require('express');
var app=express();
var path=require('path');
var fs=require('fs');

app.use(express.static(path.join(__dirname,'public')));



app.get('/',function (req,resp) {
    resp.sendFile(path.join(___dirname+'/index.html'));
    
})

app.get('/get_data',function (req,resp) {
    Console.log("Calling rest API");
    var person={firstname:'Dhruva',lastname:'Kumar',age:25,address:'sector 17a,Gurugram'};
    resp.send(person);
    
})

var server=app.listen(5500,function(){
    var host=server.address().address;
    var port=server.address().port;

    console.log('server listening at port 5500',host,port);
})

