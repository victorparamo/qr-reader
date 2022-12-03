import { useEffect } from 'react';

import Event from '@mui/icons-material/Event';
import EventRepeat from '@mui/icons-material/EventRepeat';
import HelpIcon from '@mui/icons-material/Help';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import { Routes, Route, Outlet } from 'react-router-dom';

import MainLayout from 'components/MainLayout';
import { DrawerElements } from 'components/MainLayout/types';
import Dashboard from 'pages/Dashboard';
import Help from 'pages/Help';
import OldEvents from 'pages/OldEvents';
import ScanPage from 'pages/ScanPage';
import QRValidatorProvider from 'Providers/ValidatorProvider';

const drawerElements: Array<DrawerElements> = [
  {
    name: 'Eventos',
    route: '../dashboard',
    icon: <Event />,
  },
  {
    name: 'Eventos Pasados',
    route: '../oldEvents',
    icon: <EventRepeat />,
  },
  {
    name: 'Escanear Codigos',
    route: '../scanQRS',
    icon: <QrCodeScanner />,
  },
  {
    name: 'Ayuda',
    route: '../help',
    icon: <HelpIcon />,
  },
];

const DashboardRouter = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <MainLayout title="Panel de eventos" drawerElements={drawerElements}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="oldEvents" element={<OldEvents />} />
          <Route path="help" element={<Help />} />
          <Route
            path="scanQRS"
            element={
              <QRValidatorProvider>
                <ScanPage />
              </QRValidatorProvider>
            }
          />
        </Route>
      </Routes>
    </MainLayout>
  );
};

export default DashboardRouter;
