import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import App from './App';
import Ads from './components/Ads';
import Orders from './components/Orders';
import { NavItem } from './types';

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
] as Array<NavItem>;

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <App 
        navItems={navItems.map((item: NavItem) => (item.key === 1 ? {...item, active: true} : {...item, active: false}))}
      >
        <Ads/>
      </App>,
  },
  {
    path: "/ads",
    element: 
      <App 
        navItems={navItems.map((item: NavItem) => (item.key === 1 ? {...item, active: true} : {...item, active: false}))}
      >
        <Ads/>
      </App>,
  },
  {
    path: "/orders",
    element: 
      <App 
        navItems={navItems.map((item: NavItem) => (item.key === 2 ? {...item, active: true} : {...item, active: false}))}
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