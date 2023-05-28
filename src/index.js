import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from "./App";
// import {persistor} from './redux/index'
import store from './redux/index'
// import {PersistGate} from "redux-persist/integration/react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
    {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);


