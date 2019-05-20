const API_URL = 'https://breweries-app-server.herokuapp.com/api/v1/breweries'

const headers = {
    'Content-Type': 'application/json',
    'Accepts': 'application/json'
}

const fetchBreweries = () => {
  return fetch(API_URL)
    .then(res => res.json())
}

export default { fetchBreweries }