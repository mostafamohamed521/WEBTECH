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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          My Profile
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card"
          >
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-semibold">{user?.name || 'John Doe'}</h2>
              <p className="text-gray-400 text-sm">{user?.email || 'john@example.com'}</p>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left hover:bg-gray-800 transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </nav>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-3 card"
          >
            <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" defaultValue="John" className="input-field w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" defaultValue="Doe" className="input-field w-full" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" defaultValue="john@example.com" className="input-field w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input type="tel" defaultValue="+1 234 567 890" className="input-field w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Address</label>
                <textarea className="input-field w-full" rows="3" defaultValue="123 Main St, City, Country" />
              </div>
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Profile
