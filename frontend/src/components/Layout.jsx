import { Outlet, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  ShoppingBag, 
  User, 
  Search, 
  Heart, 
  Menu, 
  X,
  Smartphone,
  LogOut
} from 'lucide-react'
import useStore from '../context/StoreContext'

const Layout = () => {
  const location = useLocation()
  const { sidebarOpen, toggleSidebar, closeSidebar, cart, wishlist, user, logout } = useStore()

  const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/products', icon: Smartphone, label: 'Products' },
    { path: '/categories', icon: Menu, label: 'Categories' },
    { path: '/cart', icon: ShoppingBag, label: 'Cart', count: cart.length },
    { path: '/wishlist', icon: Heart, label: 'Wishlist', count: wishlist.length },
    { path: '/profile', icon: User, label: 'Profile' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                WEBTECH
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.count > 0 && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                      {item.count}
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {sidebarOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-64 bg-white border-l border-gray-200 z-50 md:hidden"
          >
            <div className="p-4">
              <button
                onClick={closeSidebar}
                className="mb-6 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X />
              </button>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      location.pathname === item.path
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {item.count > 0 && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full ml-auto">
                        {item.count}
                      </span>
                    )}
                  </Link>
                ))}
                {user && (
                  <button
                    onClick={logout}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">WEBTECH</span>
              </div>
              <p className="text-gray-500 text-sm">
                Your ultimate destination for the latest electronics and gadgets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Quick Links</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><Link to="/home" className="hover:text-blue-600 transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link></li>
                <li><Link to="/categories" className="hover:text-blue-600 transition-colors">Categories</Link></li>
                <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Customer Service</h3>
              <ul className="space-y-2 text-gray-500 text-sm">
                <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
                <li><Link to="/profile" className="hover:text-blue-600 transition-colors">My Account</Link></li>
                <li><Link to="/orders" className="hover:text-blue-600 transition-colors">Order Tracking</Link></li>
                <li><Link to="/wishlist" className="hover:text-blue-600 transition-colors">Wishlist</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-gray-900">Connect With Us</h3>
              <p className="text-gray-500 text-sm mb-4">
                Follow us on social media for the latest updates and offers.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Smartphone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2026 WEBTECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
