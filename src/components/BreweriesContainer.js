import React, { Component } from 'react';
import BreweryItem from './BreweryItem'
import adapter from '../services/adapter'

class BreweriesContainer extends Component {
    state = {
        breweries: []
    }

    componentDidMount() {
        adapter.fetchBreweries()
        .then(breweries => {
            if(breweries) {
                this.setState({ breweries })
            } else {
                return this.state.breweries
            }
        })
    }

    mapBreweries = () => {
        return this.state.breweries.map(brewery => {
            return <BreweryItem 
                key={brewery.id}
                brewery={brewery}
            />
        })
    }

    render() {
        return (
            <div className="ui four column grid">
                <div className="row">
                    {this.mapBreweries()}
                </div>
            </div>
        )
    }
}

export default BreweriesContainer