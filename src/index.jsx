import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App'; // Import your main App component
import LoginPage from './components/auth/LoginPage';
import OwnerPage from './components/homeowner/OwnerPage';
import OwnerProfile from './components/homeowner/OwnerProfile';
import TenantPage from './components/tenant/TenantPage';
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
        element: <OwnerPage />,
      },
      {
        path: 'ownerprofile/',
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
