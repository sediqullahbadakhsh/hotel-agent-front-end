const LIST_HOTEL = 'HotelAgentFrontEnd/Hotel/LIST_HOTEL';

const initialState = { status: 'No Data', data: [] };

export const dataSucces = (hotel) => ({
  type: LIST_HOTEL,
  hotel,
});

export const listHotel = () => async (dispatch) => {
  fetch('http://localhost:3000/v1/users/2/hotels', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      dispatch(dataSucces(data));
      console.log(data);
    })
    .catch((error) => {
      throw error;
    });
};

const HotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_HOTEL:
      return { data: action.hotel, status: 'successfully loaded' };

    default:
      return state;
  }
};

export default HotelReducer;
