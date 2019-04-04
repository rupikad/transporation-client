import { UPDATE_HOME, UPDATE_ADDRESS } from '../actions/map';

const initialState = {
  home: '',
  placeInfo: 'Portland, OR',
  address: '',
  time: '',
  date: '',
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
    default:
      return state;
  }
}
