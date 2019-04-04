import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import PropTypes from 'prop-types';
import { getPlaceInfo } from '../../services/map';
class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  componentDidMount() {
    getPlaceInfo();
  }

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClick = () => {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      width: '75vw',
      height: '75vh',
      'marginTop': '50px',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    };
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 45.5155, lng: -122.6793 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Your Home' }
          position = {{ lat: 45.5155, lng: -122.6793 }}
          name = { 'Your Home' }
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>HOME</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object
};

export const MapDisplayContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyDBiuq7dDRszXgd8xTfADvK5RP9f9JawSQ',
  libraries: ['places']
})(MapContainer);
