import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router"
import { ShopPage } from './pages/ShopPage';
import { SingleProductPage } from './pages/SingleProductPage';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/shop",
    element: <ShopPage />
  },
  {
    path: `/shop/:id`,
    element: <SingleProductPage />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

