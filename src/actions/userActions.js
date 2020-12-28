import api from './api';

export function fetchUsers() {
  console.log('api.get',api.get('users'))
  return {
    type: 'FETCH_USERS',
    payload: api.get('users'),
  };
}



export function submitUsers(data) {
  console.log('api.post',api.post('users'))
  return {
    type: 'POST_USERS',
    payload: api.post('users', data),
  };
}



