import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import { fetchMostRecentHotels } from './redux/MostRecent/MostRecent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HotelPage from './pages/HotelPage';
import DetailsPage from './pages/DetailsPage';
import FeaturedPage from './pages/FeaturedPage';
import ErrorPage from './pages/ErrorPage';
import ReservePage from './pages/ReservePage';
import AddHotel from './pages/AddHotelPage';
import { listHotel } from './redux/Hotel/Hotel';
import ReserveDefault from './components/ReserveDefault';
import ReservationsPage from './pages/ReservationsPage';
import { listReservations } from './redux/Reservations/Reservation';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostRecentHotels());
    dispatch(listHotel());
    dispatch(listReservations());
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<FeaturedPage />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/reserve/:name" element={<ReserveDefault />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/hotel/:name" element={<DetailsPage />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
