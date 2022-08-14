import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { fetchMostRecentHotels } from './redux/MostRecent/MostRecent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HotelPage from './pages/HotelPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostRecentHotels());
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="log-in" element={<Login />} />
        <Route path="hotel" element={<HotelPage />} />
      </Routes>
    </Router>
  );
};

export default App;
