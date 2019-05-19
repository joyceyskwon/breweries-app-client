import React, { Component } from 'react';
import BreweryItem from './BreweryItem'
import adapter from '../services/adapter'

class BreweriesContainer extends Component {
  state = {
    breweries: [],
    breweryClicked: false,
    clickedBot: null
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

    findBreweryById = breweryId => this.state.breweries.find(b => b.id === breweryId)

    handleClick = breweryId => {
        this.setState({
            breweryClicked: true,
            clickedBot: this.findBreweryById(breweryId)
        })
    }



    mapBreweries = () => {
        return this.state.breweries.map(brewery => {
            return <BreweryItem 
                key={brewery.id}
                brewery={brewery}
                handleClick={this.handleClick}
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