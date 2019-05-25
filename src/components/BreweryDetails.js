import React, { Component } from 'react';
import Map from './Map'
import { Button, Header, Modal } from 'semantic-ui-react'

class BreweryDetails extends Component {

  render() {
    const { brewery } = this.props

    return (
      <div className='modal'>
        <Modal
          trigger={<Button>Show details</Button>}
        >
          <Modal.Header>
            {brewery.name}
          </Modal.Header>
          <Modal.Content>
            <Map 
              brewery={brewery}
            />
            <Modal.Description>
              <Header>Address</Header>
              <p>{brewery.street}, {brewery.city}, {brewery.state}</p>
            </Modal.Description>

          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default BreweryDetails