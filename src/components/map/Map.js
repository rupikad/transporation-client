import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

AnyReactComponent.propTypes = {
  text: PropTypes.string
};
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDBiuq7dDRszXgd8xTfADvK5RP9f9JawSQ' }}
          defaultCenter={{ lat:59.955413, lng:30.337844 }}
          defaultZoom={9}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
