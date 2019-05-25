import React, { Component } from 'react';
import adapter from '../services/adapter'
import GoogleMapReact from 'google-map-react';

const mapStyle = {
  width: '100%',
  height: '100%'
}

class Map extends Component {

  state = {
    zoom: 12,
    center: {
      lat: this.props.brewery.latitude ? parseFloat(this.props.brewery.latitude) : 37.7749,
      lng: this.props.brewery.longitude ? parseFloat(this.props.brewery.longitude) : -122.4194
    }
  }

  renderMarkers = (map, maps, lat, lng) => {
    return new maps.Marker({
      position: { lat, lng },
      map,
      title: 'hi!'
    })
  }

  render() {

    return (
      <div className="map">
        <GoogleMapReact
          style={mapStyle}
          bootstrapURLKeys={{ key: adapter.API_KEY }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps, parseFloat(this.state.center.lat), parseFloat(this.state.center.lng))}
          yesIWantToUseGoogleMapApiInternals={true}
        />
      </div>
    )
  }
}

export default Map