import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard, { dashboardLoader } from './pages/Dashboard';
import Error from './pages/Error';
import Logout from './components.jsx/Logout';
import Main, { mainLoader } from './layouts/Main';
import { logoutAction } from './actions/logout';

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
    </div>
  )
}

export default App;