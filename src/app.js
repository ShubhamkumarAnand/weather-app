const path = require('path')
const express = require('express')

const app = express()
const port = 3000

const pathToDirectory = path.join(__dirname, '../public')

app.use(express.static(pathToDirectory))

app.get('/weather', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log('Server is Up and Running on port 3000')
})