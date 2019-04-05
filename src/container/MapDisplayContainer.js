import React from 'react';
import { getInfo, getDirections, getCenter } from '../selectors/map';
import { connect } from 'react-redux';
import { fetchDirectionsInfo } from '../actions/map';
import { MapDisplayContainer } from '../components/map/Map';
import PropTypes from 'prop-types';
import styles from './MapDisplay.css';

class MapClass extends React.Component {
  static propTypes = {
    fetch: PropTypes.func,
    info: PropTypes.object,
    directions: PropTypes.object,
    center: PropTypes.object
  }

  render() {
    const { fetch, info, directions, center } = this.props;
    let distanceText;
    if(directions.duration) {
      if(parseInt(directions.duration.text) > 10) {
        distanceText = <a href="https://rideconnection.org/">Call for Ride Connection!</a>;
      } else if(parseInt(directions.duration.text) < 10) {
        distanceText = <a href="https://www.lyft.com/rider">Lyft is an affordable option!</a>;
      }
    }
    return (
      <div className={styles.map}>

        {directions.distance && <><p>Distance: {directions.distance.text}</p> <p>Trimet Bus Distance: 5.1 mi</p></>}
        {directions.duration && <><p>Duration: {directions.duration.text}</p> <p>Ride Options: {distanceText}</p> <p>Trimet Bus Duration: 21 min</p></>}
        <MapDisplayContainer
          fetch={fetch}
          info={info}
          directions={directions}
          center={center}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  info: getInfo(state),
  directions: getDirections(state),
  center: getCenter(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDirectionsInfo());
  }
});

export const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapClass);
