import { placesInstance } from './axios/axios';

export const getHomeInfo = async(queryString) => {
  const res = await placesInstance.get(`findplacefromtext/json?input=${queryString}&inputtype=textquery&fields=formatted_address,geometry&key=${process.env.API_KEY}`);
  console.log(res.data.candidates[0].geometry.location);
  return res.data.candidates[0].geometry.location;
};

export const getAddressInfo = async(queryString) => {
  const res = await placesInstance.get(`findplacefromtext/json?input=${queryString}&inputtype=textquery&fields=formatted_address,geometry&key=${process.env.API_KEY}`);
  console.log(res.data.candidates[0].geometry.location);
  return res.data.candidates[0].geometry.location;
};
