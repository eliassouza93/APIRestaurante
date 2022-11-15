import React from 'react';
import ReactDOM from 'react-dom/client';
import PaginaInicial from './pages';
import RotasWeb from './routs';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

    <RotasWeb />


  </React.StrictMode>
);

