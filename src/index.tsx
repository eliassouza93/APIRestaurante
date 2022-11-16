import React from 'react';
import ReactDOM from 'react-dom/client';
import RotasWeb from './routs';
import style from './index.module.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode >

    <div className={style.module}>
      <RotasWeb />
    </div>


  </React.StrictMode>
);

