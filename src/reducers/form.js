import { UPDATE_HOME } from '../actions/map';

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
    default:
      return state;
  }
}
