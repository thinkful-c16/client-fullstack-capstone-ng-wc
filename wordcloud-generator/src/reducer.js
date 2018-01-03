import { 
  GENERATE_CLOUD,
  FETCH_CLOUDS,
  FETCH_SINGLE_CLOUD
  } from './actions';

const initialState = {
  view: 'home',
  clouds: [],
  activeCloud: {}
};

export const reducer = (state = initialState, action) => {
  if(action.type === GENERATE_CLOUD){
    return Object.assign({}, state, {
      view: 'newCloud'
    })
  }
  if(action.type === FETCH_CLOUDS){
    return Object.assign({}, state, {
      view: 'library'
    })
  }
  if(action.type === FETCH_SINGLE_CLOUD){
    return Object.assign({}, state, {
      view: 'focus'
    })
  }
  return state;
};