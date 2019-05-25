import React, { Component } from 'react';
import BreweryItem from './BreweryItem'

class BreweriesContainer extends Component {

  mapBreweries = () => {
    return this.props.breweries.map(brewery => {
      return <BreweryItem 
        key={brewery.id}
        brewery={brewery}
        handleShowDetail={this.props.handleShowDetail}
      />
    })
  }

  render() {
    return (
      <div className="ui three column grid">
        <div className="row">
          {this.mapBreweries()}
        </div>
      </div>
    )
  }
}

export default BreweriesContainer