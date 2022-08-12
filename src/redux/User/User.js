const CREATE_USER = 'HotelAgentFrontEnd/User/CREATE_USER';
const LOGIN_USER = 'HotelAgentFrontEnd/User/LOGIN_USER';

const initialState = { status: 'Not created', data: [] };

export const success = (user) => ({
  type: CREATE_USER,
  user,
});

export const loginSuccess = (user) => ({
  type: LOGIN_USER,
  user,
});

const setToken = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
};

export const createUser = (data) => async (dispatch) => {
  fetch('http://localhost:3000/v1/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(success(res));
      if (res.ok) {
        setToken(res.content.auth_token);
      }
    })
    .catch((error) => { throw error; });
};

export const logInUser = (data) => async (dispatch) => {
  fetch('http://127.0.0.1:3000/v1/auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(loginSuccess(res));
      if (res.ok) {
        setToken(res.content.auth_token);
      }
    })
    .catch((error) => { throw error; });
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { data: action.user, status: 'Created successfully' };
    case LOGIN_USER:
      return { data: action.user, status: 'Loged In successfully' };
    default:
      return state;
  }
};

export default UserReducer;
