import { createAction } from 'promise-middleware-redux';
import { getDirectionsInfo } from '../services/map';

export const [
  fetchDirectionsInfo,
  FETCH_DIRECTIONS_INFO,
  LOAD_PLACE_INFO_START,
  LOAD_PLACE_INFO_END,
  FETCH_DIRECTIONS_INFO_LOADING
] = createAction('FETCH_DIRECTIONS_INFO', getDirectionsInfo);

export const UPDATE_HOME = 'UPDATE_HOME';
export const updateHome = home => ({
  type: UPDATE_HOME,
  payload: home
});

export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const updateAddress = address => ({
  type: UPDATE_ADDRESS,
  payload: address
});
