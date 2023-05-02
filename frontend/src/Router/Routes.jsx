import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProfilePage from '../pages/ProfilePage'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: '/cart/:id?', element: <CartPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/profile', element: <ProfilePage /> },
    ],
  },
]

export const router = createBrowserRouter(routes)