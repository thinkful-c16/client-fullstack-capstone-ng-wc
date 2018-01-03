import {API_BASE_URL} from './config';

export const FETCH_CLOUDS_REQUEST = 'FETCH_CLOUDS_REQUEST';
export const fetchCloudsRequest = () => ({
  type: FETCH_CLOUDS_REQUEST,
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

export const FETCH_SINGLE_CLOUD_REQUEST = 'FETCH_SINGLE_CLOUD_REQUEST';
export const fetchSingleCloudRequest = () => ({
  type: FETCH_SINGLE_CLOUD_REQUEST,
})

export const FETCH_SINGLE_CLOUD_SUCCESS = 'FETCH_SINGLE_CLOUD_SUCCESS';
export const fetchSingleCloudSuccess = (activeCloud) => ({
  type: FFETCH_SINGLE_CLOUD_SUCCESS,
  activeCloud
})

export const FETCH_SINGLE_CLOUD_ERROR = 'FETCH_SINGLE_CLOUD_ERROR';
export const fetchSingleCloudError = (error) => ({
  type: FETCH_SINGLE_CLOUD_ERROR,
  error
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

export const fetchSingleCloud = () => dispatch => {
  dispatch(fetchSingleCloud());
  return fetch(`${API_BASE_URL}/clouds/:id`)
    .then(res => {
      if(!res.ok) {
        throw new Error(res.statusTest);
      }
      return res.json();
    }).then(data =>
        dispatch(fetchSingleCloudSuccess(data))
    ).catch(err =>
        dispatch(fetchSingleCloudError(err))
    );
}