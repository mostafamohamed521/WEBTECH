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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                WEBTECH
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg md:rounded-xl font-medium text-sm md:text-base transition-all ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">{item.label}</span>
                  {item.count > 0 && (
                    <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full font-bold">
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
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-64 md:w-72 bg-white shadow-2xl z-50 md:hidden"
            >
              <div className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg md:rounded-xl flex items-center justify-center">
                      <ShoppingBag className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className="text-lg md:text-xl font-bold text-gray-900">WEBTECH</span>
                  </div>
                  <button
                    onClick={closeSidebar}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeSidebar}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg md:rounded-xl font-medium text-sm md:text-base transition-all ${
                        location.pathname === item.path
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{item.label}</span>
                      {item.count > 0 && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold ml-auto">
                          {item.count}
                        </span>
                      )}
                    </Link>
                  ))}
                  {user && (
                    <button
                      onClick={logout}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg md:rounded-xl text-red-600 hover:bg-red-50 font-medium text-sm md:text-base transition-all mt-4"
                    >
                      <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                      <span>Logout</span>
                    </button>
                  )}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="pt-20 md:pt-24 pb-8 md:pb-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center">
                  <ShoppingBag className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-lg md:text-xl font-bold">WEBTECH</span>
              </div>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Your ultimate destination for the latest electronics and gadgets. Quality products, best prices.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-lg">Quick Links</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
                <li><Link to="/home" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link to="/deals" className="hover:text-white transition-colors">Deals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-lg">Customer Service</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-sm">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/profile" className="hover:text-white transition-colors">My Account</Link></li>
                <li><Link to="/orders" className="hover:text-white transition-colors">Order Tracking</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-lg">Newsletter</h3>
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">Subscribe for exclusive deals and updates.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 md:px-4 md:py-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 text-xs md:text-sm" />
                <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-xs md:text-sm">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 md:pt-8 text-center text-gray-400 text-xs md:text-sm">
            <p>&copy; 2026 WEBTECH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
