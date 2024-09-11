import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import Ads from './components/Ads';
import Orders from './components/Orders';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const navItems = [
  {
    key: 1,
    title: 'Объявления',
    href: '/ads',
  },
  {
    key: 2,
    title: 'Заказы',
    href: '/orders',
  },
] as { key: number, title: string, href: string, active: boolean }[];

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <App 
        navItems={navItems.map((item) => (item.key === 1 ? {...item, active: true} : {...item, active: false}))}
      >
        <Ads/>
      </App>,
  },
  {
    path: "/ads",
    element: 
      <App 
        navItems={navItems.map((item) => (item.key === 1 ? {...item, active: true} : {...item, active: false}))}
      >
        <Ads/>
      </App>,
  },
  {
    path: "/orders",
    element: 
      <App 
        navItems={navItems.map((item) => (item.key === 2 ? {...item, active: true} : {...item, active: false}))}
      >
        <Orders/>
      </App>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);