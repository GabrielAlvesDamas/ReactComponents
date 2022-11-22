import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, useQuery } from '@apollo/client';
import ClientApollo from './Apollo';
import GetQuadro from './Querys';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
/*
  <React.StrictMode>
  </React.StrictMode>
*/
root.render(
    <ApolloProvider client={ClientApollo}>
      <App />
    </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
