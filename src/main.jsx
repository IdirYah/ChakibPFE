import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import App2 from './App2.jsx';
import App4 from './App4.jsx';
import Login from './components/login/login.jsx';
import ListCamionTrajet from './components/listCamionTrajet/listCamionTrajet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "inscription",
    element: <App2 />,
  },
  {
    path: "savoirPlus",
    element: <App4 />,
  },
  {
    path: "connection",
    element: <Login />,
  },
  {
    path:"listCamionTrajet",
    element: <ListCamionTrajet />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
