const express = require('express')//

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.sendFile("./p.html",{root:__dirname})

})
app.post('/naitik', (req, res) => {
  res.json(
    ["akash","naitik","soumadep","aman"]
  )
})
app.put('/change',(req,res)=>{


  res.send("u have entered to put api")
})
app.delete('/delete',(req,res)=>{


  res.send("u have entered to delete pi")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

