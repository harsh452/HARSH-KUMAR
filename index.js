const { default: axios } = require('axios');
const express = require('express')
const app = express()
var request = require('request');

var port = process.env.PORT || 5000;

var letters = new Set();



app.get("/:servername/:dataType", (req, res,next) => {
let servername = req.params.servername;
console.log(servername);
let dataType = req.params.dataType
axios.get(` http://localhost:${servername}/${dataType}`).then((response)=>{
  letters.add(response.data.numbers)
  console.log(letters);

}).catch((err)=>{
  
})
});

app.get("/",(req,res)=>{
    res.send('heloo')
})




app.listen(port,() =>{
    console.log("listening on 5000");
})
