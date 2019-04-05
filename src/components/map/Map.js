import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width: '75vw',
      // height: '75vh',
      'marginTop': '50px',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    };
    return (
      <>
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 12 }
        initialCenter = {this.props.center}
      >
        <Marker
          position = {this.props.info.southwest}
        />
        <Marker
          position = {this.props.info.northeast}
        />
      </Map>
      </>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object,
  info: PropTypes.object,
  directions: PropTypes.object,
  fetch: PropTypes.func,
  center: PropTypes.object
};

export const MapDisplayContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyDBiuq7dDRszXgd8xTfADvK5RP9f9JawSQ',
  libraries: ['places']
})(MapContainer);
