import api from './api';

export function fetchUsers() {
  console.log('api.get',api.get('employees/get'))
  return {
    type: 'FETCH_EMPLOYEES',
    payload: api.get('employees/get'),
  };
}


export function addEmployee() {
  console.log('api.get',api.get('employees/get'))
  return {
    type: 'FETCH_EMPLOYEES',
    payload: api.get('employees/get'),
  };
}





