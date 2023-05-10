import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomePage from '../pages/HomePage'
import ProductPage from '../pages/ProductPage'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ProfilePage from '../pages/ProfilePage'
import ShippingPage from '../pages/ShippingPage'
import PaymentPage from '../pages/PaymentPage'
import PlaceOrderPage from '../pages/PlaceOrderPage'
import OrderPage from '../pages/OrderPage'
import UserPage from '../pages/UserPage'

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/shipping', element: <ShippingPage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'product/:id', element: <ProductPage /> },
      { path: '/cart/:id?', element: <CartPage /> },
      { path: '/register', element: <RegisterPage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/payment', element: <PaymentPage /> },
      { path: '/placeorder', element: <PlaceOrderPage /> },
      { path: '/order/:id', element: <OrderPage /> },
      { path: '/admin/userlist', element: <UserPage /> },
    ],
  },
]

export const router = createBrowserRouter(routes)
