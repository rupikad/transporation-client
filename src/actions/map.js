import { createAction } from 'promise-middleware-redux';
import { getPlaceInfo } from '../services/map';

export const [
  fetchPlaceInfo,
  FETCH_PLACE_INFO,
  LOAD_PLACE_INFO_START,
  LOAD_PLACE_INFO_END,
  FETCH_PLACE_INFO_LOADING
] = createAction('FETCH_PLACE_INFO', getPlaceInfo);

export const UPDATE_HOME = 'UPDATE_HOME';
export const updateHome = address => ({
  type: UPDATE_HOME,
  payload: address
});
