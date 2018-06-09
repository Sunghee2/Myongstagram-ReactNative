import { combineReducers } from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    case 'FETCHED_POSTS':
      return action.payload;
    default:
      return state;
  }
}

function user(state = [], action) {
  switch (action.type) {
    case 'FETCHED_USER':
      return {...state, 'user': action.payload};
    case 'FETCHED_MYPOST':
      return {...state, 'posts': action.payload};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: posts,
  user: user
});

export default rootReducer;