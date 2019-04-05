import { UPDATE_HOME, UPDATE_ADDRESS, FETCH_DIRECTIONS_INFO } from '../actions/map';

const initialState = {
  home: '30 NW 10th Avenue, Portland, OR 97209',
  center: { lat: 45.5242219, lng: -122.6800816 },
  address: '9205 SW Barnes Rd. Portland, OR 97225',
  time: '',
  date: '',
  info: {},
  directions: {}
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_HOME: 
      return {
        ...state, 
        home: payload
      };
    case UPDATE_ADDRESS: 
      return {
        ...state,
        address: payload
      };
    case FETCH_DIRECTIONS_INFO:
      return {
        ...state,
        info: payload.bounds,
        center: payload.bounds.northeast,
        directions: payload.legs[0]
      };
    default:
      return state;
  }
}
