// const LIST_HOTEL = 'HotelAgentFrontEnd/Hotel/LIST_HOTEL';
const ADD_RESERVATION = 'HotelAgentFrontEnd/reservations/ADD_RESERVATION';
// const VIEW_HOTEL = 'HotelAgentFrontEnd/Hotel/VIEW_HOTEL';
// const DELETE_HOTEL = 'HotelAgentFrontEnd/Hotel/DELETE_HOTEL';

const initialState = { status: 'No Data', data: [] };

// export const dataSucces = (hotel) => ({
//   type: LIST_HOTEL,
//   hotel,
// });
export const addReservation = (reservation) => ({
  type: ADD_RESERVATION,
  reservation,
});
// export const viewHotelSucces = (hotel) => ({
//   type: VIEW_HOTEL,
//   hotel,
// });
// export const deleteHotelSucces = (hotel) => ({
//   type: DELETE_HOTEL,
//   hotel,
// });

// export const listHotel = () => async (dispatch) => {
//   fetch('http://localhost:3000/v1/users/2/hotels', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       dispatch(dataSucces(data));
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

export const addHotelReservation = (data) => async (dispatch) => {
  fetch(`http://127.0.0.1:3000/v1/users/${localStorage.getItem('userId')}/reservations`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      city: data.country,
      date: data.date,
      number_of_days: data.number_of_days,
      number_of_rooms: data.number_of_rooms,
      number_of_guests: data.number_of_guests,
      hotel_id: parseInt(data.hotel_id, 10),
    }),
  })
    .then((data) => data.json())
    .then((data) => {
      dispatch(addReservation(data));
    })
    .catch((error) => {
      throw error;
    });
};
// export const viewHotel = () => async (dispatch) => {
//   fetch('http://127.0.0.1:3000/v1/users/2/hotels/2', {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       dispatch(viewHotelSucces(data));
//     })
//     .catch((error) => {
//       throw error;
//     });
// };
// export const deleteHotel = () => async (dispatch) => {
//   fetch('http://127.0.0.1:3000/v1/users/2/hotels/3', {
//     method: 'DELETE',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//     },
//   })
//     .then((data) => data.json())
//     .then((data) => {
//       dispatch(deleteHotelSucces(data));
//     })
//     .catch((error) => {
//       throw error;
//     });
// };

const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LIST_HOTEL:
    //   return { data: action.hotel, status: 'successfully loaded' };
    case ADD_RESERVATION:
      return { data: action.reservation, status: 'Reservation successfully added' };
    // case VIEW_HOTEL:
    //   return { data: action.hotel, status: 'Hotel successfully loaded' };
    // case DELETE_HOTEL:
    //   return { data: action.hotel, status: 'Hotel successfully Deleted' };
    default:
      return state;
  }
};

export default ReservationReducer;
