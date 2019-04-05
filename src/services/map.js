import { placesInstance } from './axios/axios';

export const getDirectionsInfo = async(homeQuery, providerQuery) => {
  const res = await placesInstance.get(`json?origin=${homeQuery}&destination=${providerQuery}&key=${process.env.API_KEY}`);
  console.log(res.data.routes[0].bounds);
  return res.data.routes[0].bounds;
};
