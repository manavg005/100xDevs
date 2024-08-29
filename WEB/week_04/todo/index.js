const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({status:200,data:"Success",data:{id:1,name:"Manav"}})
})


app.get('/post', function (req, res) {
  req.body.json({})
  res.json({status:200,data:"Success",message:"Submitted Successfully"})
})

app.listen(3000)
