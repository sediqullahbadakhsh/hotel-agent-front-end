import './App.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { fetchMostRecentHotels } from './redux/MostRecent/MostRecent';
import { listReservations } from './redux/Reservations/Reservation';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LogOutNavBar from './components/LogOutNavBar';
import HotelPage from './pages/HotelPage';
import DetailsPage from './pages/DetailsPage';
import FeaturedPage from './pages/FeaturedPage';
import ErrorPage from './pages/ErrorPage';
import ReservePage from './pages/ReservePage';
import AddHotel from './pages/AddHotelPage';
import { listHotel } from './redux/Hotel/Hotel';
import ReserveDefault from './components/ReserveDefault';
import DetailsHotelLog from './components/DetailsHotelLog';
import ReserveDefaultLog from './components/ReserveDefaultLog';
import ReservationsPage from './pages/ReservationsPage';
import Contributors from './pages/Contributers/Contributers';

const App = () => {
  const dispatch = useDispatch();
  /* eslint-disable */
  var { status } = useSelector((state) => state.Hotel);

  const getSatus = async () => {
    status;
  };
  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchMostRecentHotels());
      await dispatch(listHotel());
      await dispatch(listReservations());
      await getSatus();
    };

    getData();
  }, []);

  if (status === 'successfully loaded') {
    // eslint-enable
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<FeaturedPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/reserve/:name" element={<ReserveDefault />} />
          <Route path="/reserve/log/:name" element={<ReserveDefaultLog />} />
          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/hotel/:name" element={<DetailsPage />} />
          <Route path="/hotel/log/:name" element={<DetailsHotelLog />} />
          <Route path="/add-hotel" element={<AddHotel />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <LogOutNavBar />
      <Routes>
        <Route path="/" element={<FeaturedPage />} />
        <Route path="/hotel/:name" element={<DetailsPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/contributors/*" element={<Contributors />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
