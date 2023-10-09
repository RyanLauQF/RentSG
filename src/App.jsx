import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div id="main-ui">
      <Outlet />
    </div>
  );
}

export default App;
