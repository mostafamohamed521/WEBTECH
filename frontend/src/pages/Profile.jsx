import { motion } from 'framer-motion'
import { User, ShoppingBag, Heart, Settings, LogOut, Package, CreditCard, Bell, Shield } from 'lucide-react'
import useStore from '../context/StoreContext'

const Profile = () => {
  const { user, logout } = useStore()

  const menuItems = [
    { icon: User, label: 'Profile Information', id: 'profile' },
    { icon: Package, label: 'Order History', id: 'orders' },
    { icon: ShoppingBag, label: 'My Cart', id: 'cart' },
    { icon: Heart, label: 'Wishlist', id: 'wishlist' },
    { icon: CreditCard, label: 'Payment Methods', id: 'payment' },
    { icon: Bell, label: 'Notifications', id: 'notifications' },
    { icon: Shield, label: 'Security', id: 'security' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-500">Manage your account settings and preferences</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="card p-6 mb-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user?.name || 'John Doe'}</h2>
                <p className="text-gray-500 text-sm">{user?.email || 'john@example.com'}</p>
              </div>
            </div>

            <div className="card p-4">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-red-600 hover:bg-red-50 transition-colors font-medium mt-4"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Profile Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
                    <input type="text" defaultValue="John" className="input-field w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
                    <input type="text" defaultValue="Doe" className="input-field w-full" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                  <input type="email" defaultValue="john@example.com" className="input-field w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                  <input type="tel" defaultValue="+1 234 567 890" className="input-field w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Address</label>
                  <textarea className="input-field w-full" rows="3" defaultValue="123 Main St, City, Country" />
                </div>
                <div className="flex gap-4">
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                    Save Changes
                  </button>
                  <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-xl font-semibold transition-all">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile
