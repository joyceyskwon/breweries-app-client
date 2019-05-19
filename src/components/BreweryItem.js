import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const BreweryItem = props => {
  const { brewery } = props

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={brewery.id}
        onClick={() => props.handleClick(brewery.id)}
      >
        <div className="content">
          <div className="header">
            {brewery.name}
          </div>
          <div className="extra content">
            <Modal trigger={<Button>Show details</Button>}>
              <Modal.Header>
                {brewery.name}
              </Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                <Modal.Description>
                  <Header>{brewery.brewery_type}</Header>
                  <p>{brewery.city}</p>
                  <p>{brewery.state}</p>
                </Modal.Description>

              </Modal.Content>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )

}

export default BreweryItem