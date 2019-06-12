const API_URL = 'https://breweries-app-server.herokuapp.com/api/v1/breweries'

const fetchBreweries = () => {
    return fetch(API_URL)
    .then(res => res.json())
}

export default { fetchBreweries }