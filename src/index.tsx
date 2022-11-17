import React from 'react';
import ReactDOM from 'react-dom/client';
import RotasWeb from './routs';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >

    <div >
      <RotasWeb />
    </div>


  </React.StrictMode>
);

