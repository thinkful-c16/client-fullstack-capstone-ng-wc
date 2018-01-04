import {
  FETCH_CLOUDS_REQUEST,
  FETCH_CLOUDS_SUCCESS,
  FETCH_CLOUDS_ERROR,
  FETCH_SINGLE_CLOUD_REQUEST,
  FETCH_SINGLE_CLOUD_SUCCESS,
  FETCH_SINGLE_CLOUD_ERROR,
  GENERATE_CLOUD_REQUEST,
  GENERATE_CLOUD_SUCCESS,
  GENERATE_CLOUD_ERROR,
  UPDATE_CLOUD_REQUEST,
  UPDATE_CLOUD_SUCCESS,
  UPDATE_CLOUD_ERROR,
  DELETE_CLOUD_REQUEST,
  DELETE_CLOUD_SUCCESS,
  DELETE_CLOUD_ERROR,
  GO_HOME,
  GO_EDIT
  } from './actions';

const initialState = {
  view: 'home',
  clouds: [],
  activeCloud: {
    title: '',
    text: '',
    words: [],
    font: '',
    color: ''
  },
  loading: false,
  error: null
};

export const reducer = (state = initialState, action) => {
  if(action.type === GO_HOME){
    return Object.assign({}, state, {
      view: 'home'
    })
  }
  if(action.type === GO_EDIT){
    return Object.assign({}, state, {
      view: "cloudEdit"
    })
  }
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
      loading: true,
      error: null
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
  if(action.type === GENERATE_CLOUD_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  //might have issues with the activeCloud not resetting
  if(action.type === GENERATE_CLOUD_SUCCESS){
    console.log('action:', action);

    return Object.assign({}, state, {
      activeCloud: {
      title: action.title,
      text: action.text,
      words: action.words,
      font: action.font,
      color: action.color
      },
      view: 'cloudEdit'
    })
  }
  if(action.type === GENERATE_CLOUD_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  if(action.type === UPDATE_CLOUD_REQUEST){
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  if(action.type === UPDATE_CLOUD_SUCCESS){
    return Object.assign({}, state.activeCloud, {
      title: action.title,
      text: action.text,
      words: action.words,
      font: action.font,
      color: action.color,
      upvotes: action.upvotes,
      downvotes: action.downvotes
    })
  }
  if(action.type === UPDATE_CLOUD_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  if(action.type === DELETE_CLOUD_REQUEST){
    return Object.assign({}, state, {
      loading: false,
      error: null,
      view: 'library'
    })
  }
  if(action.type === DELETE_CLOUD_SUCCESS){
    return Object.assign({}, state, {
      clouds: action.clouds
    })
  }
  if(action.type === DELETE_CLOUD_ERROR){
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    })
  }
  return state;
};