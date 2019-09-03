import { getImage } from '../services/imageApi';

export const UPDATE_DATE = 'UPDATE_DATE';
export const updateDate = (date) => ({
  type: UPDATE_DATE,
  payload: date
});

export const FETCH_IMAGE = 'FETCH_IMAGE';
export const FETCH_IMAGE_LOADING = 'FETCH_IMAGE_LOADING';
export const FETCH_IMAGE_ERROR = 'FETCH_IMAGE_ERROR';
export const fetchImage = (date) => dispatch => {
  dispatch({
    type: FETCH_IMAGE_LOADING
  });

  return getImage(date)
    .then(res => {
      dispatch({
        type: FETCH_IMAGE,
        payload: res
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_IMAGE_ERROR,
        payload: err
      });
    });
};
