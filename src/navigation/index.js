import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/LandingPage';
import LoanDetails from '../pages/LoanDetails';
import { Route as RouteName } from './Routes';
import ViewDetails from '../pages/ViewDetails';
import Outcome from '../pages/OutcomePage';

const Navigation = () => (
  <>
    <Router>
      <Routes>
        <Route exact path={RouteName.home} element={<Home />} />
        <Route path={RouteName.loanDetails} element={<LoanDetails />} />
        <Route path={RouteName.viewDetails} element={<ViewDetails />} />
        <Route path={RouteName.outcome} element={<Outcome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </>
);

export default Navigation;
