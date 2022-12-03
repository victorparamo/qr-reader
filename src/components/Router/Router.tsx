import { useEffect } from 'react';

import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import DashboardRouter from 'components/DashboardRouter';
import Login from 'pages/Login';

const Router = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Routes>
      <Route path="/qr-reader/" element={<Outlet />}>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<DashboardRouter />} />
        <Route path="" element={<Navigate to="login" replace={true} />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/qr-reader/login" replace={true} />}
      />
    </Routes>
  );
};

export default Router;
