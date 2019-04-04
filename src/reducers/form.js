import { CREATE_DESTINATION } from //action file

const initialState = {
  home: '',
  address: '',
  time: '',
  date: '',
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_DESTINATION: 
      return {
        ...state, 
        home: payload.body,
        address: payload.body,
        time: payload
      }
  }
}