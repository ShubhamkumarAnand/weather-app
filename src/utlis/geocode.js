const request = require('postman-request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaW1za2FuYW5kIiwiYSI6ImNrdDlmbzVqODAxaTAyd25pYncwODNuMm8ifQ.YmR0WS0chHby98t_EVQYLQ&limit=1`
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to MAP APIs service!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find Requested Location! Try Again with correct Location Please !', undefined)
    } else {
      callback(undefined, {
        Location: body.features[0].place_name,
        Latitude: body.features[0].center[1],
        Longitude: body.features[0].center[0]
      })
    }
  })
}

module.exports = geocode