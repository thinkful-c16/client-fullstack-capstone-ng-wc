import {API_BASE_URL} from '../config';

export const GENERATE_CLOUD = 'GENERATE_CLOUD';
export const generateCloud = () => ({
  type: GENERATE_CLOUD,
  title,
  words,
  font,
  color
});

export const FETCH_CLOUDS = 'FETCH_CLOUDS';
export const fetchClouds = () => ({
  type: FETCH_CLOUDS,
  clouds
})

export const FETCH_SINGLE_CLOUD = 'FETCH_SINGLE_CLOUD';
export const fetchSingleCloud = () => ({
  type: FETCH_SINGLE_CLOUD,
  activeCloud
})