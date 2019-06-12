const API_URL = 'https://breweries-app-server.herokuapp.com/api/v1/breweries'

const API_KEY = 'AIzaSyCvwhzK9f5f18-_N33kZmXczrWBEXS33L8'

const fetchBreweries = () => {
    return fetch(API_URL)
    .then(res => res.json())
}

export default { fetchBreweries, API_KEY }