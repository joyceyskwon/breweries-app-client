import React, { Component } from 'react';
import BreweryDetails from './BreweryDetails'
import statesArr from '../services/StatesArray'

class BreweryItem extends Component {

  parseIntCoordinate = strCoor => parseInt(strCoor)

  abbreviateStates = (stateName, arr) => {
    for(let i = 0; i < arr.statesArr.length; i++) {
      if (stateName === arr.statesArr[i].name)
        return arr.statesArr[i].abbreviation
    }
  }

  upCaseFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

  renderFullAddress = (street, city, state, zip) => `${street}, ${city}, ${state} ${zip}`

  renderURL = url => <a rel='noopener noreferrer' target='_blank' href={url}>Visit website</a>

  render() {
    const { brewery } = this.props

    return (
      <div 
        className="ui cards"
        key={brewery.id}
        onClick={() => this.props.handleClick(brewery.id)}
      >
        <div className="ui card">
          <div className="content">
            <div className="header">{brewery.name}</div>
            <div className="meta">{this.upCaseFirstLetter(brewery.brewery_type)}</div>
            <div className="description">
              {this.renderFullAddress(brewery.street, brewery.city, this.abbreviateStates(brewery.state, statesArr), brewery.postal_code)}<br />
              <a rel='noopener noreferrer' target='_blank' href={brewery.website_url}>Visit website</a>
            </div>
            <div className="extra">
              <BreweryDetails
                brewery={this.props.brewery}
                text={brewery.name}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default BreweryItem