import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div id="main-ui">
        <Outlet />
      </div>
    </>
  );
}

export default App;
