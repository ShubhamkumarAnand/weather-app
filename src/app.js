const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utlis/geocode')
const forcast = require('./utlis/forcast')

const app = express()
const port = 3000

// Define path foe Express config
const pathToDirectory = path.join(__dirname, '../public')
const pathToViews = path.join(__dirname, '../templates/views')
const pathToPartials = path.join(__dirname, '../templates/partials')

// Setup handlebars engine & views location
app.set('view engine', 'hbs')
app.set('views', pathToViews)
hbs.registerPartials(pathToPartials)

// Setup static Directory to serve
app.use(express.static(pathToDirectory))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Shubham Kumar Anand'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Shubham Kumar Anand'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'what i can help you with!',
    title: 'Help',
    name: 'Shubham Kumar Anand'
  })
})

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You haven\'t provided a search Address'
    })
  }
  geocode(req.query.address, (error, { Latitude, Longitude, Location } = {}) => {
    if (error) {
      return res.send({error})
    }
    forcast(Latitude, Longitude, (error, forecastData) => {
      if (error) {
        return res.send({error})
      }
      return res.send({
        Location: Location,
        Weather: forecastData,
        Address: req.query.address
      })
    })
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: 'Help Page Not found',
    name: 'Shubham Kumar Anand',
    errorMessage: 'Help Article Not Found!'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 Not Found',
    name: 'Shubham Kumar Anand',
    errorMessage: 'Page Not Available'
  })
})

app.listen(port, () => {
  console.log('Server is Up and Running on port 3000')
})