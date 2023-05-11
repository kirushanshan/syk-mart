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
import UserListPage from '../pages/UserListPage'
import UserEditPage from '../pages/UserEditPage'
import ProductListPage from '../pages/ProductListPage'
import ProductEditPage from '../pages/ProductEditPage'
import OrderListPage from '../pages/OrderListPage'

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
      { path: '/admin/userlist', element: <UserListPage /> },
      { path: '/admin/user/:id/edit', element: <UserEditPage /> },
      { path: '/admin/productlist', element: <ProductListPage /> },
      { path: '/admin/orderlist', element: <OrderListPage /> },
      { path: '/admin/product/:id/edit', element: <ProductEditPage /> },
    ],
  },
]

export const router = createBrowserRouter(routes)
