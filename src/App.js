import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import BreweryDetails from './components/BreweryDetails'
import BreweriesContainer from './components/BreweriesContainer'
import adapter from './services/adapter'

class App extends Component {

  state = {
    breweries: [],
    isBreweryClicked: false,
    clickedBrewery: null
  }

  componentDidMount() {
    adapter.fetchBreweries()
      .then(breweries => {
        if (breweries) {
          this.setState({ breweries })
        } else {
          return this.state.breweries
        }
      })
  }

  handleReturn = breweryId => {
    this.setState({
      isBreweryClicked: !this.state.isBreweryClicked,
      clickedBrewery: null
    })
  }

  findBrewery = breweryId => this.state.breweries.find(brewery => brewery.id === breweryId)

  handleShowDetail = breweryId => {
    this.setState({
      isBreweryClicked: !this.state.isBreweryClicked,
      clickedBrewery: this.findBrewery(breweryId)
    })
  }

  render() {
    return (
      <div>
        <Nav />
        {this.state.isBreweryClicked ?
          <BreweryDetails
            key={this.state.clickedBrewery.id}
            brewery={this.state.clickedBrewery}
            handleReturn={this.handleReturn}
          />
        :
          <BreweriesContainer 
            breweries={this.state.breweries}
            isBreweryClicked={this.state.isBreweryClicked}
            handleShowDetail={this.handleShowDetail}
          />
        }
      </div>
    )
  }
}

export default App;
