import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import LoginPage from './components/auth/LoginPage';
import RegisterForm from './components/auth/RegisterTenant';
import ChatBotPage from './components/chatbot/pages/chatbot';
import HomeOwnerPage from './components/homeowner/OwnerPage';
import OwnerProfile from './components/homeowner/OwnerProfile';
import OwnerTenantPage from './components/homeowner/OwnerTenantPage';
import FaceScan from './components/scan/FaceScan';
import Qrcode from './components/scan/Qrcode';
import ScanPass from './components/scan/ScanPass';
import TenantPage from './components/tenant/TenantPage';
import TenantProfilePage from './components/tenant/TenantProfile';
import TenantOnboarding from './components/tenant_onboard/TenantOnboard';
import VerifyFailure from './components/verify/VerifyFailure';
import VerifyProfile from './components/verify/VerifyProfile';
import VerifySuccess from './components/verify/VerifySuccess';
import VerifyTenant from './components/verify/VerifyTenant';
import ErrorPage from './errorPage';
import theme from './theme';

const ownerID = '000';

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
        path: 'tenant/:tenantId/',
        element: <TenantPage />,
      },
      {
        path: 'tenant/:tenantId/profile/',
        element: <TenantProfilePage />,
      },
      {
        path: 'owner/',
        element: <HomeOwnerPage ownerID={ownerID} />,
      },
      {
        path: 'owner/profile/',
        element: <OwnerProfile ownerID={ownerID} />,
      },
      {
        path: 'owner/:tenantId/profile/',
        element: <OwnerTenantPage ownerID={ownerID} />,
      },
      {
        path: 'owner/add-tenant/:ownerId/:residenceId/qr',
        element: <Qrcode />,
      },
      {
        path: 'owner/add-tenant/:ownerId/:residenceId/face',
        element: <FaceScan account="owner" />,
      },
      {
        path: 'owner/add-tenant/:ownerId/:residenceId/verify',
        element: <VerifyTenant />,
      },
      {
        path: 'qr/verifyQr/',
        element: <VerifyProfile />,
      },
      {
        path: 'qr/verifyQr/failure/',
        element: <VerifyFailure />,
      },
      {
        path: 'tenant/onboard/pass/',
        element: <TenantOnboarding />,
      },
      {
        path: 'tenant/onboard/scan/pass/',
        element: <ScanPass />,
      },
      {
        path: 'tenant/onboard/register/',
        element: <RegisterForm />,
      },
      {
        path: 'tenant/onboard/scan/face/',
        element: <FaceScan account="tenant" />,
      },
      {
        path: 'tenant/onboard/verify/success/',
        element: <VerifySuccess />,
      },
      {
        path: '/chatpage',
        element: <ChatBotPage />,
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
