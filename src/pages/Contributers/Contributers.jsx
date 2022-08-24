import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ContributorDetails from './ContributorDetails';
import ahmad from './cont-image/ahmad.jpg';
import jorge from './cont-image/jorge.jpg';
import sediq from './cont-image/sediq.jpg';

const Contributers = () => (
  <div className="App">
    <div className="cont-container">
      <div>
        <h2>Ahmad</h2>
        <NavLink to="ahmad">
          <img src={ahmad} alt="Ahmad" />
        </NavLink>
      </div>
      <div>
        <h2>Jorge</h2>
        <NavLink to="jorge">
          <img src={jorge} alt="jorge" />
        </NavLink>
      </div>
      <div>
        <h2>Sediq</h2>
        <NavLink to="sediq">
          <img src={sediq} alt="sediq" />
        </NavLink>
      </div>
    </div>

    <Routes>
      <Route path=":slug" element={<ContributorDetails />} />
    </Routes>
  </div>
);

export default Contributers;
