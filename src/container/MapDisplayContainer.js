import React from 'react';
import { getInfo, getDirections, getCenter } from '../selectors/map';
import { connect } from 'react-redux';
import { fetchDirectionsInfo } from '../actions/map';
import { MapDisplayContainer } from '../components/map/Map';
import PropTypes from 'prop-types';

class MapClass extends React.Component {
  static propTypes = {
    fetch: PropTypes.func,
    info: PropTypes.object,
    directions: PropTypes.object,
    center: PropTypes.object
  }

  render() {
    const { fetch, info, directions, center } = this.props;
    return (
      <>
        <MapDisplayContainer 
          fetch={fetch}
          info={info}
          directions={directions}
          center={center}
        />
        {directions.distance && <p>{directions.distance.text}</p>}
        {directions.duration && <p>{directions.duration.text}</p>}
      </>
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
