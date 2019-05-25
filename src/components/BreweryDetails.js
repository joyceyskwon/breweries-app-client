import React, { Component } from 'react';
import Map from './Map'
import statesArr from '../services/StatesArray'

class BreweryDetails extends Component {

  abbreviateStates = (stateName, arr) => {
    for (let i = 0; i < arr.statesArr.length; i++) {
      if (stateName === arr.statesArr[i].name)
        return arr.statesArr[i].abbreviation
    }
  }

  render() {
    const { brewery } = this.props

    return (
      <div className="ui segment">
 
          <div className="row">
            <div className="four wide column">
              <h2>{brewery.name}</h2>
              <p><strong>Address: </strong>{brewery.street}, {brewery.city}, {this.abbreviateStates(brewery.state, statesArr)}</p>
              <div className="ui segment">
                <Map
                  brewery={brewery}
                />
              </div>
              <button
                className="ui button fluid"
                onClick={() => this.props.handleReturn(brewery.id)
                }
              >
                Return
              </button>
            </div>
          </div>
        
      </div>
    )
  }
}

export default BreweryDetails