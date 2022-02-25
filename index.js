const { default: axios } = require('axios');
const express = require('express')
const app = express()
var request = require('request');
app.use(express.json());
var port = process.env.PORT || 5000;

var letters = new Set();

app.get("/:servername/:dataType", (req, res) => {
let servername = req.params.servername;
let dataType = req.params.dataType
axios.get(` http://localhost:${servername}/${dataType}`).then((response)=>{
 
  for(var i in response.data.numbers)
  letters.add( response.data.numbers[i]);



}).catch((err)=>{
  
})
var sortedNumbers = Array.from(letters).sort((a, b) => a - b);
var sortedLetters = new Set(sortedNumbers);
res.send({
    sortedLetters
})
console.log(sortedLetters);


});

app.get("/",(req,res)=>{
    res.send('heloo')
})




app.listen(port,() =>{
    console.log("listening on 5000");
})

// Not able to display the json data at the moment but the program is able to fetch the data and sort it;

