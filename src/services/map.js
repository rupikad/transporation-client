import { placesInstance } from './axios/axios';

export const getDirectionsInfo = async(homeQuery, providerQuery) => {
  const encodedHomeQuery = encodeURI(homeQuery);
  const encodedProviderQuery = encodeURI(providerQuery);
  const res = await placesInstance.get(`json?origin=${encodedHomeQuery}&destination=${encodedProviderQuery}&key=${process.env.API_KEY}`);
  console.log(res.data.routes[0]);
  return res.data.routes[0];
};
