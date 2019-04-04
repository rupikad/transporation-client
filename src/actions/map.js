import { createAction } from 'promise-middleware-redux';
import { getAddressInfo, getHomeInfo } from '../services/map';

export const [
  fetchHomeInfo,
  FETCH_HOME_INFO,
  LOAD_PLACE_INFO_START,
  LOAD_PLACE_INFO_END,
  FETCH_HOME_INFO_LOADING
] = createAction('FETCH_HOME_INFO', getHomeInfo);

export const [
  fetchAddressInfo,
  FETCH_ADDRESS_INFO,
  LOAD_ADDRESS_INFO_START,
  LOAD_ADDRESS_INFO_END,
  FETCH_ADDRESS_INFO_LOADING
] = createAction('FETCH_ADDRESS_INFO', getAddressInfo);

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
