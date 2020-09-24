import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';


const initState={ count:0};
const reducers= (state=initState, action)=>{
  switch(action.type){
    case 'INC': return {...state, count:action.count}
    case 'DEC':  return {...state, count:action.count}
    default: return state;
  }
}

const store= createStore(reducers)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
