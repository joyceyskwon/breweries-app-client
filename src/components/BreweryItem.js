import React from 'react';

const BreweryItem = props => {
  const { brewery } = props

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={brewery.id}
      >
        <div className="content">
          <div className="header">
            {brewery.name}
          </div>
        </div>
      </div>
    </div>
  )

}

export default BreweryItem