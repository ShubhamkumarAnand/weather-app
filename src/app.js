const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 3000

// Define path foe Express config
const pathToDirectory = path.join(__dirname, '../public')
const pathToViews = path.join(__dirname,'../templates/views')
const pathToPartials = path.join(__dirname,'../templates/partials')

// Setup handlebars engine & views location
app.set('view engine', 'hbs')
app.set('views', pathToViews)
hbs.registerPartials(pathToPartials)

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
    service: 'what i can help you with!',
    title: 'Help',
    name: 'imskanand'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Patna',
    Condition: 'Hottest Day 🔥'
  })
})

app.get('/help/*', (req, res) => {
  res.send('404', {
    title: 'Help Page Not found',
    errorMessage: 'Help Article Not Found!',
    name: 'imskanand'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Not Found',
    name: 'imskanand',
    errorMessage:'Page Not Available'
  })
})

app.listen(port, () => {
  console.log('Server is Up and Running on port 3000')
})