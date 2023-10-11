import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // Import your main App component
import LoginPage from './components/auth/LoginPage';
import OwnerPage from './components/homeowner/OwnerPage';
import OwnerProfile from './components/homeowner/OwnerProfile';
import VerifyQr from './components/loading/VerifyQr';
import Face2 from './components/scan/Face2';
import Qr2 from './components/scan/Qr2';
import Qrcode from './components/scan/Qrcode';
import TenantPage from './components/tenant/TenantPage';
import TenantProfilePage from './components/tenant/TenantProfile';
import ErrorPage from './errorPage';
import ScanPass from './components/scan/ScanPass';
import theme from './theme'; // Import your Material-UI theme configuration

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LoginPage />,
        index: true,
      },
      {
        path: 'tenant/',
        element: <TenantPage />,
      },
      {
        path: 'owner/',
        element: <OwnerPage />,
      },
      {
        path: 'qr/',
        element: <Qrcode />,
      },
      {
        path: 'face/',
        element: <Face2 />,
      },
      {
        path: 'qr/verifyQr/',
        element: <VerifyQr />,
      },
      {
        path: 'scanPass',
        element: <ScanPass />,
      },
      {
        path: 'tenant/profile',
        element: <TenantProfilePage />,
      },
      {
        path: 'owner/profile/',
        element: <OwnerProfile />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
