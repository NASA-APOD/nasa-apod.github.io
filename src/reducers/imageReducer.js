import { UPDATE_DATE } from '../actions/imageActions';

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();
let date = `${yyyy}-${mm}-${dd}`;

const initialState = {
  loading: false,
  error: null,
  image: '',
  date: date
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_DATE:
      return { ...state, date: action.payload };
    default: 
      return state;
  }
}
