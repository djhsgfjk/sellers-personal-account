import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Ads from './components/Ads';
import Orders from './components/Orders';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App header='Объявления'><Ads/></App>,
  },
  {
    path: "/ads",
    element: <App header='Объявления'><Ads/></App>,
  },
  {
    path: "/orders",
    element: <App header='Заказы'><Orders/></App>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);