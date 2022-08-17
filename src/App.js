import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
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
import ReserveDefault from './components/ReserveDefault';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostRecentHotels());
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<FeaturedPage />} />
        <Route path="/reserve" element={<ReservePage />} />
        <Route path="/reserve/:name" element={<ReserveDefault />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/hotel/:name" element={<DetailsPage />} />
        <Route path="/add-hotel" element={<AddHotel />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
