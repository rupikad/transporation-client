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
        distanceText = <><button>Ride Connection!</button> 
        <li>Trimet Bus Duration: 21 min</li></>;
      } else if(parseInt(directions.duration.text) < 10) {
        distanceText = <button>Lyft</button>;
      }
      else if(parseInt(directions.duration.text) > 100) {
        distanceText = <p>Loading...</p>;
      }
    }
    return (
      <div className={styles.map}>
        <div>
          {directions.distance && <><h3>Distance:</h3> <p>{directions.distance.text}</p> </>}
          {directions.duration && <><h3>Duration:</h3> <p>{directions.duration.text}</p> <h3>Ride Options:</h3> <ul><li>{distanceText}</li> </ul></>}
        </div>
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
