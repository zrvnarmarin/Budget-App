import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Layouts
import Main, { mainLoader } from './layouts/Main';
// Actions
import { logoutAction } from './actions/logout';
// Routes
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
// Library containers
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        path: '/', //ili index: true - kad dojdemo na / rutu, pokazi dashboard 
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: 'logout',
        element: <h1>Logout</h1>,
        action: logoutAction
      }
    ]
  },
]) 

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App;