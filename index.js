const { default: axios } = require('axios');
const express = require('express')
const app = express()
var request = require('request');
app.use(express.json());
var port = process.env.PORT || 5000;

var letters = [];
app.use(express.json());


app.get("/:servername/:dataType", (req, res) => {
let servername = req.params.servername;
let dataType = req.params.dataType
var temp = [];
axios.get(` http://localhost:${servername}/${dataType}`).then((response)=>{
 

  for(var i in response.data.numbers)
  letters.push( response.data.numbers[i]);
  
   temp = [...new Set(letters)];
   temp.sort(function(a, b){return a - b});
   res.send(temp);

}).catch((err)=>{
  console.log(err);
})



});

app.get("/",(req,res)=>{
    res.send('hello')
})




app.listen(port,() =>{
    console.log("listening on 5000");
})
