import './App.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavBar from './components/Navbar';
import { fetchMostRecentHotels } from './redux/MostRecent/MostRecent';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostRecentHotels());
  });

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotel-details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
