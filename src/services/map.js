import { placesInstance } from './axios/axios';

export const getPlaceInfo = async(queryString) => {
  const res = await placesInstance.get(`findplacefromtext/json?input=${queryString}&inputtype=textquery&fields=formatted_address,geometry&key=${process.env.API_KEY}`);
  console.log(res.data.candidates[0].geometry.location);
  return res.data.candidates[0].geometry.location;
};
