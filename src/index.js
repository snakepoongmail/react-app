import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Webworker';
// import App from './components/MemoryLeak/Table';
// import App from './components/MemoryLeak/Closure';
// import App from './components/CancelFetch';
// import App from './components/Redux'
// import App from './App';
// import App from './components/landing';
// import App from './components/setState/setState'
// import App from './components/UseContext/UseContext'
// import App from './components/lazyLoading/lazyLoading'
// import reportWebVitals from './reportWebVitals';
// import App from './components/momentTest'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
