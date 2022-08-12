const CREATE_USER = 'HotelAgentFrontEnd/User/CREATE_USER';
const initialState = { status: 'Not created', data: [] };

export const success = (user) => ({
  type: CREATE_USER,
  user,
});

export const createUser = () => async (dispatch) => {
  fetch('http://localhost:3000/v1/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Augusto',
      email: 'auguto@hotmail.com',
      password: '123456',
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(success(res));
    })
    .catch((error) => { throw error; });
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { data: action.user, status: 'Created successfully' };

    default:
      return state;
  }
};

export default UserReducer;
