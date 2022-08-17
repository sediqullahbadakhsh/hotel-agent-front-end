// const LIST_HOTEL = 'HotelAgentFrontEnd/Hotel/LIST_HOTEL';
const ADD_RESERVATION = 'HotelAgentFrontEnd/reservations/ADD_RESERVATION';
const VIEW_RESERVATIONS = 'HotelAgentFrontEnd/reservations/VIEW_RESERVATIONS';
const DELETE_RESERVATION = 'HotelAgentFrontEnd/Hotel/DELETE_RESERVATION';

const initialState = { status: 'No Data', data: [] };


export const addReservation = (reservation) => ({
  type: ADD_RESERVATION,
  reservation,
});
export const viewReservetions = (reservations) => ({
  type: VIEW_RESERVATIONS,
  reservations,
});
export const deleteReservation = (reservation) => ({
  type: DELETE_RESERVATION,
  reservation,
});

export const listReservations = () => async (dispatch) => {
  fetch(`http://localhost:3000/v1/users/${localStorage.getItem('userId')}/reservations`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      dispatch(viewReservetions(data));
    })
    .catch((error) => {
      throw error;
    });
};

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

export const deleteHotelReservation = () => async (dispatch) => {
    // attention please
    // You neeed to spacify reservation id in the link

  fetch(`http://127.0.0.1:3000/v1/users/${localStorage.getItem('userId')}/reservations/3`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      dispatch(deleteReservation(data));
    })
    .catch((error) => {
      throw error;
    });
};

const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return { data: action.reservation, status: 'Reservation successfully added' };
    case VIEW_RESERVATIONS:
      return { data: action.reservations, status: 'Reservations successfully loaded' };
    case DELETE_HOTEL:
      return { data: action.hotel, status: 'Reservation  successfully Deleted' };
    default:
      return state;
  }
};

export default ReservationReducer;
