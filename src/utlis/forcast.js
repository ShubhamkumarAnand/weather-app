const request = require('postman-request')

const forcast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=94b204528b38e532ca88024943b5a43b&query=${latitude, longitude}&units=f`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to Weather Stack APIs service!', undefined)
    } else if (body.error) {
      callback('Unable to find Weather for the Requested Location! Try Again with correct Location Please !', undefined)
    } else {
      callback(undefined, `The Current Weather is ${body.current.weather_descriptions[0]}. The Current Temperature is ${body.current.temperature} °F. The Current Cloudcover is ${body.current.cloudcover} Okta. The Wind Speed is ${body.current.wind_speed} km/hr with Humidity of ${body.current.humidity} %. Have A Nice Day! 😊`)
    }
  })
}

module.exports = forcast