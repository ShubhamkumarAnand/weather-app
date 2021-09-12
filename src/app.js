const path = require('path')
const express = require('express')

const app = express()
const port = 3000

// Define path foe Express config
const pathToDirectory = path.join(__dirname, '../public')
const pathToViews = path.join(__dirname,'../views')

// Setup handlebars engine & views location
app.set('view engine', 'hbs')
app.set('views', pathToViews)

// Setup static Directory to serve
app.use(express.static(pathToDirectory))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'imskanand'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'imskanand'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    service: 'what i can help you with!'
  })
})

app.get('/weather', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.log('Server is Up and Running on port 3000')
})