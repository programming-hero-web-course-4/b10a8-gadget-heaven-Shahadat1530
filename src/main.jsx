import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Computer from './components/Computer/Computer';
import Products from './components/Products/Products';
import SmartPhones from './components/SmartPhones/SmartPhones';
import Laptops from './components/Laptops/Laptops';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [
          {
            path: '/',
            loader: () => fetch('../public/products.json'),
            element: <Products></Products>
          },
          {
            path: '/computer',
            loader: () => fetch('../public/products.json'),
            element: <Computer></Computer>
          },
          {
            path: '/smartphones',
            loader:() => fetch('../public/products.json'),
            element: <SmartPhones></SmartPhones>
          },
          {
            path: '/laptops',
            loader:() => fetch('../public/products.json'),
            element: <Laptops></Laptops>
          }
        ]
      },
      {
        path:'/product/:product_id',
        element:<Details></Details>,
        loader:() => fetch('../public/products.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
