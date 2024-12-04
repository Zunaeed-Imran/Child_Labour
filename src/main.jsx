import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainOutlet from './routes/MainOutlet';
import Error from './pages/Error';
import App from './App';


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
