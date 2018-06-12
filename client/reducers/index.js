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
    case 'ADD_LIKE':
      var updatedLike = state.map( post => {
        if (post.id === action.payload.postId) {
          if (post.Likes) {
            let like = [action.payload, ...post.Likes];
            return {...post, 'Likes': like};
          } else {
            let like = [action.payload];
            return {...post, 'Likes': like};
          }
        }
        return post;
      });
      return updatedLike;
    case 'DELETE_LIKE':
      var deletedLike = state.map( post => {
        if (post.id == action.payload.postId) {
          var likesArr = post.Likes.filter( like => like.userId != action.payload.userId);
          return {...post, 'Likes': likesArr};
        }
        return post;
      });
      return deletedLike;
    case 'EDIT_USER':
      var updatedUser = state.map( post => {
        if(post.User.id == action.payload.id) {
          return {...post, 'User':action.payload};
        }
        return post;
      });
      return updatedUser;
    default:
      return state;
  }
}


function user(state = [], action) {
  switch (action.type) {
    case 'FETCHED_USER':
      return {...state, 'user': action.payload};
    case 'EDIT_USER':
      return {...state, 'user': action.payload};
    case 'FETCHED_MYPOST':
      return {...state, 'posts': action.payload};
    case 'ADD_POST':
      if(state.posts == undefined) { 
        return state;
      } else {
        if (action.payload.userId == state.user.id) {
          var posts = [action.payload, ...state.posts];
        }
        return {...state, 'posts': posts};
      }
    case 'EDIT_POST':
      if (state.posts==undefined) { 
        return state;
      } else {
        var updatedPost = state.posts.map( post => {
          if(post.id === action.payload.id) {
            return {...post, ...action.payload};
          }
          return post;
        });
        return {...state, 'posts': updatedPost}; 
      }
    case 'DELETE_POST':
      if(state.posts==undefined) { 
        return state;
      } else {
        var deletedPost = state.posts.filter(post => post.id != action.payload.id);
        return {...state, 'posts': deletedPost};
      }
    case 'ADD_LIKE':
      if(state.posts==undefined) { 
        return state;
      } else {
        var updatedLike = state.posts.map( post => {
          if (post.id === action.payload.postId) {
            if (post.Likes) {
              let like = [action.payload, ...post.Likes];
              return {...post, 'Likes': like};
            } else {
              let like = [action.payload];
              return {...post, 'Likes': like};
            }
          }
          return post;
        });
        return {...state, 'posts': updatedLike};
      }
    case 'DELETE_LIKE':
      if(state.posts==undefined) { 
        return state;
      } else {
        var deletedLike = state.posts.map( post => {
          if (post.id == action.payload.postId) {
            var likesArr = post.Likes.filter( like => like.userId != action.payload.userId);
            return {...post, 'Likes': likesArr};
          }
          return post;
        });
        return {...state, 'posts': deletedLike};
      }
    default:
      return state;
  }
}

function search(state=[], action) {
  switch (action.type) {
    case 'SEARCH_USER':
      return {...state, 'user': action.payload};
    case 'SEARCH_POST':
      return {...state, 'post': action.payload};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: posts,
  search: search,
  user: user
});

export default rootReducer;