import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

import DashboardRouter from 'components/DashboardRouter';
import Login from 'pages/Login';

const Router = (): JSX.Element => {
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
