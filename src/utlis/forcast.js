const request = require('postman-request')

const forcast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=94b204528b38e532ca88024943b5a43b&query=${latitude, longitude}&units=f`

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to Weather Stack APIs service!', undefined)
    } else if (body.current.length === 0) {
      callback('Unable to find Weather for the Requested Location! Try Again with correct Location Please !', undefined)
    } else {
      callback(undefined, {
        CurrentForcast: body.current.weather_descriptions[0],
        Temperature: body.current.temperature,
        WindSpeed: body.current.wind_speed,
        Humidity: body.current.humidity
      })
}
  })
}

module.exports = forcast