import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'

import Home from './components/Home Page/Home';
import App from './App.jsx';
import './index.css';
import MyClimbs from './pages/myClimbs';
import SingleClimb from './pages/singleClimb';
import AddClimb from './pages/addClimb'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/MyClimbs',
        element: <MyClimbs />
      },
      {
        path: '/Climb/:climbId',
        element: <SingleClimb />,
      },
      {
        path:'/AddClimb',
        element: <AddClimb />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)



