import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // Import your main App component
import LoginPage from './components/auth/LoginPage';
import HomeOwnerPage from './components/homeowner/OwnerPage';
import OwnerProfile from './components/homeowner/OwnerProfile';
import VerifyQr from './components/loading/VerifyQr';
import Face2 from './components/scan/Face2';
import Qrcode from './components/scan/Qrcode';
import ScanPass from './components/scan/ScanPass';
import TenantPage from './components/tenant/TenantPage';
import TenantProfilePage from './components/tenant/TenantProfile';
import VerifyFailure from './components/verify/VerifyFailure';
import VerifySuccess from './components/verify/VerifySuccess';
import ErrorPage from './errorPage';
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
        element: <HomeOwnerPage />,
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
        path: 'qr/verifyQr/success',
        element: <VerifySuccess />,
      },
      {
        path: 'qr/verifyQr/failure',
        element: <VerifyFailure />,
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
