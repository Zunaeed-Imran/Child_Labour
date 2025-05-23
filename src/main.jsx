import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Error from './pages/Error';
import MainOutlet from './routes/MainOutlet';
import { StrictMode } from 'react'

import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainOutlet />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <App/>,
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
