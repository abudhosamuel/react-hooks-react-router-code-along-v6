import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import './index.css'; // Ensure this import is correct

ReactDOM.render(
  <RouterProvider router={routes} />,
  document.getElementById('root')
);
