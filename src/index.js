import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import {Provider} from 'react-redux';
import reducers from './reducer/index'


let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
ReactDOM.render(
  <Provider store = {store}>
    
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
