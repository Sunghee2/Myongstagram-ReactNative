import { combineReducers } from 'redux';

function posts(state = [], action) {
  switch (action.type) {
    case 'FETCHED_POSTS':
      return action.payload;
    case 'ADD_POST':
      return [action.payload, ...state];
    case 'EDIT_POST':
      var updatedPost = state.map( post => {
        if(post.id === action.payload.id) {
          return {...post, ...action.payload};
        }
        return post;
      });
      return updatedPost;
    case 'DELETE_POST':
      return state.filter( post => post.id !== action.payload.id);
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