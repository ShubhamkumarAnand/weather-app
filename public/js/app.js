const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const locationOutput = document.querySelector('#location')
const weatherOutput = document.querySelector('#weather')

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const Location = search.value

  locationOutput.textContent = 'Loding...'
  weatherOutput.textContent = ''

  fetch(`/weather?address=${Location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
       return locationOutput.textContent = data.error
      }
      locationOutput.textContent = data.Location
      weatherOutput.textContent = data.forcast
    })
  })
  console.log(Location)
})