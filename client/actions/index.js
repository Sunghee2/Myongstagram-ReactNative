import axios from 'axios';
import qs from 'qs';
import { AsyncStorage, ToastAndroid } from 'react-native';
import { Config } from '../config';
import NavigationService from '../navigation_service';
import { Permissions, Notifications } from 'expo';

export function checkEmail(email) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/users`,
        qs.stringify({
          email: email
        }));
      if (response.status == 200) {
        NavigationService.navigate('CheckPw', { email : email });
      } 
    } catch (err) {
      if (err.response.status == 422) {
        ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
      }
    }
  }
}

export function signup(email, username, password) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/users/new`,
      qs.stringify({
        email: email,
        username: username,
        password: password
      }));
      if (response.status == 200) {
        ToastAndroid.show(response.data.message, ToastAndroid.SHORT);
        NavigationService.navigate('Login');
      }
    } catch (err) {
      if (err.response.status == 422) {
        ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT);
      }      
    }
  }
}

export function signin(email, password) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/oauth/token`,
        qs.stringify({
          username: email,
          password: password,
          client_secret: Config.clientSecret,
          client_id: Config.clientId,
          grant_type: 'password'
        }), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
      await AsyncStorage.setItem('accessToken', response.data.access_token);
      axios.get(`${Config.server}/api/users/me`).then(async user => {
        await AsyncStorage.setItem('user', JSON.stringify(user.data));
        NavigationService.navigate('Home');
      });
    } catch (err) {
      ToastAndroid.show('Invalid ID or Password', ToastAndroid.SHORT);  
    }
  };
}


export async function facebookLogIn() {
  const { type, token } = await Facebook.logInWithReadPermissionsAsync('224269501712885', {
    permissions: ['public_profile', 'email'],
  });
  // console.log(token);

  if (type === 'success') {
    const response = await fetch(`https://graph.facebook.com/me?fields=email,name,picture&access_token=${token}`);
    console.log(await response.json());
    Alert.alert(
      'Logged in!',
      `Hi ${(await response.json()).picture}!`,
    );
  } else {
    ToastAndroid.show('로그인이 취소되었습니다.', ToastAndroid.SHORT); 
    NavigationService.navigate('Login'); 
  }
}

export function editUser(username, name, image) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/users/edit`,
        qs.stringify({
          username: username,
          name: name,
          image: image
        }))
      await AsyncStorage.getItem('user')
        .then( user => {
          user = JSON.parse(user);
          user.username = username;
          user.name = name;
          user.image = image;
          AsyncStorage.setItem('user', JSON.stringify(user));
        }).done();
      dispatch({ type: 'EDIT_USER', payload: response.data});
      ToastAndroid.show('성공적으로 수정되었습니다!', ToastAndroid.SHORT);
      NavigationService.navigate('Profile');  
    } catch (err) {
      console.log(err);
    }
  }
}

export function addPushToken(token) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/users/token`,
        qs.stringify({
          token: token,
        }));
      await AsyncStorage.getItem('user')
        .then( user => {
          user = JSON.parse(user);
          user.pushToken = token;
          AsyncStorage.setItem('user', JSON.stringify(user));
        }).done();
    } catch(err) {
      console.log(err);
    }
  } 
}

export function signout() {
  return async dispatch => {
    delete axios.defaults.headers.common['Authorization'];
    await AsyncStorage.clear();
    NavigationService.navigate('Login');
  };
}


export function fetchPosts() {
  return async dispatch => {
    axios.get(`${Config.server}/api/posts`).then(response => {
      dispatch({ type: 'FETCHED_POSTS', payload: response.data});
    }).catch(err => {
      console.log(err);
      if (err.response.status == 401) {
        dispatch(signout());
      } else {        
        alert('Network Error');
      }
    })
  }
}

export function postNew(image, content) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/posts/new`,
        qs.stringify({
          image: image,
          content: content
        }));
      await AsyncStorage.getItem('user').then( user => {
          user = JSON.parse(user);
          const new_post = { ...response.data, "User": user};
          dispatch({ type: 'ADD_POST', payload: new_post});
      });
      ToastAndroid.show('새 글을 등록하였습니다.', ToastAndroid.SHORT);  
      NavigationService.navigate('Home');
    } catch (err) {
      console.log(err);
    }
  }
}

export function editPost(id, content) {
  return async dispatch => {
    try {
      const response = await axios.post(`${Config.server}/api/posts/${id}`,
        qs.stringify({
          content: content
        }))
      dispatch({ type: 'EDIT_POST', payload: response.data});
      ToastAndroid.show('성공적으로 수정되었습니다!', ToastAndroid.SHORT);
      NavigationService.navigate('Feed');  
    } catch (err) {
      console.log(err);
    }
  }
}

export function deletePost(id) {
  return async dispatch => {
    try {
      const response = await axios.delete(`${Config.server}/api/posts/${id}`);
      dispatch({type: 'DELETE_POST', payload: response.data}); 
      ToastAndroid.show('성공적으로 삭제되었습니다!', ToastAndroid.SHORT);
      NavigationService.navigate('Feed');  
    } catch (err) {
      console.log(err);
    }
  }
}

export function getUser() {
  return async dispatch => {
    axios.get(`${Config.server}/api/users/me`).then(response => {
      dispatch({ type: 'FETCHED_USER', payload: response.data});
    }).catch(err => {
      console.log(err);
      if (err.response.status == 401) {
        dispatch(signout());
      } else {        
        alert('Network Error');
      }
    })
  }
}

export function getMyPost() {
  return async dispatch => {
    axios.get(`${Config.server}/api/posts/me`).then(response => {
      dispatch({ type: 'FETCHED_MYPOST', payload: response.data});
    }).catch(err => {
      console.log(err);
      if (err.response.status == 401) {
        dispatch(signout());
      } else {        
        alert('Network Error');
      }
    })
  }
}

export function searchUser(searchValue) {
  return async dispatch => {
    try {
      const users = await axios.post(`${Config.server}/api/users/search`,
        qs.stringify({
          searchValue: searchValue
      }));
      dispatch({ type: 'SEARCH_USER', payload: users.data});
    } catch (err) {
      console.log(err);
    }
  }
}

export function searchPost(searchValue) {
  return async dispatch => {
    try {
      const posts = await axios.post(`${Config.server}/api/posts/search`,
        qs.stringify({
          searchValue: searchValue
      }));
      dispatch({ type: 'SEARCH_POST', payload: posts.data});
    } catch (err) {
      console.log(err);
    }
  }
}

export function addLike(id) {
  return async dispatch => {
    axios.get(`${Config.server}/api/posts/${id}/like`).then(response => {
      dispatch({ type: 'ADD_LIKE', payload: response.data});
    }).catch(err => {
      console.log("err " + err);
      if (err.response.status && err.response.status == 401) {
        dispatch(signout());
      } else {        
        alert('Network Error');
      }
    })
  }
}

export function deleteLike(id) {
  return async dispatch => {
    try {
      const response = await axios.delete(`${Config.server}/api/posts/${id}/like`);
      dispatch({type: 'DELETE_LIKE', payload: response.data}); 
    } catch (err) {
      console.log(err);
    }
  } 
}

export function sendPush(id, username) {
  return async dispatch => {
    try {
      const token = await axios.get(`${Config.server}/api/users/${id}/token`);

      const message = `${username}님이 회원님의 게시물을 좋아합니다.`;
      await axios({
        method: 'post',
        url: 'https://exp.host/--/api/v2/push/send',
        data: qs.stringify({ to: token.data, body: message}),
        headers: {
          Authorization: '',
        }
      })
    } catch (err) {
      console.log(err);
    }  
  }
}