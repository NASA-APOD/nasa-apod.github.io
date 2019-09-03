import { UPDATE_DATE } from '../actions/imageActions';

const initialState = {
  loading: false,
  error: null,
  image: '',
  date: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_DATE:
      return { ...state, date: action.payload };
    default: 
      return state;
  }
}
