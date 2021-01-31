import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/Store";

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
