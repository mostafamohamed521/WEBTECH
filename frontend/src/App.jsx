import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Splash from './pages/Splash'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Categories from './pages/Categories'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Search from './pages/Search'
import Compare from './pages/Compare'
import Reviews from './pages/Reviews'
import Deals from './pages/Deals'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Checkout from './pages/Checkout'
import OrderTracking from './pages/OrderTracking'
import ReturnPolicy from './pages/ReturnPolicy'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import FAQ from './pages/FAQ'
import Support from './pages/Support'
import Contact from './pages/Contact'
import About from './pages/About'
import Gifts from './pages/Gifts'
import Coupons from './pages/Coupons'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:name" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="search" element={<Search />} />
          <Route path="compare" element={<Compare />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="deals" element={<Deals />} />
          <Route path="gifts" element={<Gifts />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-tracking" element={<OrderTracking />} />
          <Route path="return-policy" element={<ReturnPolicy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="support" element={<Support />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
