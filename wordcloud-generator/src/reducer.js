import {
  FETCH_CLOUDS_REQUEST,
  FETCH_CLOUDS_SUCCESS,
  FETCH_CLOUDS_ERROR,
  FETCH_SINGLE_CLOUD_REQUEST,
  FETCH_SINGLE_CLOUD_SUCCESS,
  FETCH_SINGLE_CLOUD_ERROR,
  GENERATE_CLOUD
  } from './actions';

const initialState = {
  view: 'home',
  clouds: [],
  activeCloud: {},
  loading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  if(action.type === FETCH_CLOUDS_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  if(action.type === FETCH_CLOUDS_SUCCESS){
    return Object.assign({}, state, {
      loading: false,
      error: null,
      clouds: action.clouds,
      view: 'library'
    })
  }
  if(action.type === FETCH_CLOUDS_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  if(action.type === FETCH_SINGLE_CLOUD_REQUEST){
    return Object.assign({}, state, {
      view: 'focus'
    })
  }
  if(action.type === FETCH_SINGLE_CLOUD_SUCCESS){
    return Object.assign({}, state, {
      loading: false,
      error: null,
      activeCloud: action.activeCloud,
      view: 'focus'
    })
  }
  if(action.type === FETCH_SINGLE_CLOUD_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  if(action.type === GENERATE_CLOUD){
    return Object.assign({}, state, {
      view: 'newCloud'
    })
  }
  return state;
};