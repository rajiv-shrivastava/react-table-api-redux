const INITIAL_STATE = { 
  users: [],
  usersLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `FETCH_EMPLOYEES_LOADING`:
      return { 
        ...state, 
        usersLoading: true 
      }
    case `FETCH_EMPLOYEES_SUCCESS`:
      return { 
        ...state, 
        users: action.payload.data.data,
        usersLoading: false

    }
    case `FETCH_EMPLOYEES_ERROR`:
      return { 
        ...state, 
        users: [],
        usersLoading: false,
        userError: 'Error in fetching users'
    }
      
    default:
      return state;
  }
}
