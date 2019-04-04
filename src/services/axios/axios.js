import axios from 'axios';

export const placesInstance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/'
});
