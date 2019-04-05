import { UPDATE_HOME, UPDATE_ADDRESS, FETCH_DIRECTIONS_INFO } from '../actions/map';

const initialState = {
  home: '',
  placeInfo: 'Portland, OR',
  address: '',
  time: '',
  date: '',
  info: {}
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
        info: payload
      };
    default:
      return state;
  }
}
