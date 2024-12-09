import ReactDOM from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './components/Home Page/Home';
import App from './App.jsx';
import './index.css';
import Login from './pages/login';
import Signup from './pages/signup';
import MyClimbs from './pages/myClimbs';
import SingleClimb from './pages/singleClimb';
import AddClimb from './pages/addClimb'
import MyTraining from './pages/myTraining';
import SingleTraining from  './pages/singleTraining';
import AddTraining from './pages/addTraining'
import ForgotPassword from './pages/forgotPassword'
import ResetPassword from './pages/resetPassword'



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
        path: '/Signup',
        element: <Signup />
      },
      {
        path: '/Login',
        element: <Login />
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
      {
        path:'/MyTraining',
        element: <MyTraining />
      },
      {
        path: '/Training/:trainingId',
        element: <SingleTraining />,
      },
      {
        path:'/AddTraining',
        element: <AddTraining />
      },
      {
        path:'/ForgotPassword',
        element: <ForgotPassword />
      },
      {
        path:'/ResetPassword',
        element: <ResetPassword />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)



