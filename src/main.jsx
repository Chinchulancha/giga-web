import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout';
import Index from './pages/Index'
import Proyectos from './pages/Proyectos';
import QuienesSomos from './pages/QuienesSomos';
import Contacto from './pages/Contacto';
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index/>,
      },
      {
        path: '/proyectos',
        element: <Proyectos/>,
      },
      {
        path: '/quienes-somos',
        element: <QuienesSomos/>,
      },
      {
        path: '/contacto',
        element: <Contacto/>,
      }
    ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
