import { placesInstance } from './axios/axios';

export const getPlaceInfo = async() => {
  const res = await placesInstance.get(`findplacefromtext/json?input=Portland%20OR&inputtype=textquery&fields=formatted_address,geometry&key=${process.env.API_KEY}`);
  console.log(res.data.candidates[0].geometry.location);
  return res.data.candidates[0].geometry.location;
};
