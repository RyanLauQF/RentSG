import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import theme from "./theme"; // Import your Material-UI theme configuration
import App from "./App"; // Import your main App component
import ErrorPage from "./errorPage";
import LoginPage from "./components/auth/loginpage";
import TenantPage from "./components/tenant/TenantPage";
import OwnerPage from "./components/homeowner/OwnerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login/",
        element: <LoginPage />,
      },
      {
        path: "tenant/",
        element: <TenantPage />,
      },
      {
        path: "owner/",
        element: <OwnerPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
