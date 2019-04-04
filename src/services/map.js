import { placesInstance } from './axios/axios';

export const getPlaceInfo = async() => {
  const config = { mode: 'no-cors' };
  const res = await placesInstance.get('findplacefromtext/json?input=Portland%20OR&inputtype=textquery&fields=formatted_address,geometry&key=AIzaSyDBiuq7dDRszXgd8xTfADvK5RP9f9JawSQ', config);
  console.log('RES', res.data);

  // return fetch('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Portland%20OR&inputtype=textquery&fields=formatted_address,geometry&key=AIzaSyDBiuq7dDRszXgd8xTfADvK5RP9f9JawSQ', {
  //   mode: 'no-cors',
  //   headers: {

  //   }
  // })
  //   .then(res => {
  //     console.log(res);
  //     // res.json()
  //   });
};
