import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ContributorDetails from './ContributorDetails';

const Contributers = () => (
  <div className="App">
    <ul className="about__list">
      <li>
        <NavLink to="cont-ahmad">Ahmad</NavLink>
      </li>
      <li>
        <NavLink to="cont-jorge">Jorge</NavLink>
      </li>
      <li>
        <NavLink to="cont-sediq">Sediq</NavLink>
      </li>
    </ul>

    <Routes>
      <Route path=":slug" element={<ContributorDetails />} />
    </Routes>
  </div>
);

export default Contributers;
