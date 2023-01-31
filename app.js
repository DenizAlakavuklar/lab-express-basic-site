const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(req.url)
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res,) => {
    console.log(req.url)
    res.sendFile(__dirname + '/views/about.html')
    //res.send("It is about Doruk Alakavuklar!")
  })

app.get('/works', (req, res) => {
  console.log(req.url)
  res.sendFile(__dirname + '/views/works.html')
})

app.get('/images', (req, res) => {
    console.log(req.url)
    res.sendFile(__dirname + '/views/images.html')
  })

app.listen(3000, () => {
  console.log(`now listening`)
})

