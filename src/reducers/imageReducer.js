import { UPDATE_DATE, FETCH_IMAGE, FETCH_IMAGE_ERROR, FETCH_IMAGE_LOADING } from '../actions/imageActions';

let today = new Date();
let dd = today.getDate();

let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();
let date = `${yyyy}-${mm}-${dd}`;

const initialState = {
  loading: false,
  error: null,
  image: '',
  date: date,
  mediaType: '',
  explanation: '',
  title: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case UPDATE_DATE:
      return { ...state, date: action.payload };
    case FETCH_IMAGE: 
      return { 
        ...state, 
        loading: false,
        error: null,
        image: action.payload.url,
        mediaType: action.payload.media_type,
        explanation: action.payload.explanation,
        title: action.payload.title
      };
    case FETCH_IMAGE_ERROR: 
      return { ...state, loading: false, error: action.payload };
    case FETCH_IMAGE_LOADING:
      return { ...state, loading: true, error: null };
    default: 
      return state;
  }
}
