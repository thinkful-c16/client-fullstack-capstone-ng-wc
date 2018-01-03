import {API_BASE_URL} from './config';

export const FETCH_CLOUDS_REQUEST = 'FETCH_CLOUDS_REQUEST';
export const fetchCloudsRequest = () => ({
  type: FETCH_CLOUDS,
})

export const FETCH_CLOUDS_SUCCESS = 'FETCH_CLOUDS_SUCCESS';
export const fetchCloudsSuccess = (clouds) => ({
  type: FETCH_CLOUDS_SUCCESS,
  clouds
})

export const FETCH_CLOUDS_ERROR = 'FETCH_CLOUDS_ERROR';
export const fetchCloudsError = (error) => ({
  type: FETCH_CLOUDS_ERROR,
  error
})

export const FETCH_SINGLE_CLOUD = 'FETCH_SINGLE_CLOUD';
export const fetchSingleCloud = (activeCloud) => ({
  type: FETCH_SINGLE_CLOUD,
  activeCloud
})

export const GENERATE_CLOUD = 'GENERATE_CLOUD';
export const generateCloud = (title, words, font, color) => ({
  type: GENERATE_CLOUD,
  title,
  words,
  font,
  color
});

export const fetchClouds = () => dispatch => {
  dispatch(fetchClouds());
  return fetch(`${API_BASE_URL}/clouds`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest)
      }
      return res.json();
    }).then(data => 
        dispatch(fetchCloudsSuccess(data))
    ).catch(err =>
        dispatch(fetchCloudsError(err)) 
    );
}